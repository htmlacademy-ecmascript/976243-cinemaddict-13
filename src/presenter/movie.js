import MovieCard from "../view/movie-card.js";
import Popup from "../view/popup.js";
import {render, remove, replace} from "../utils/render.js";
import {UserAction, UpdateType} from "../mock/const.js";
import MoviesModel from "../model/movies.js";
import CommentsModel from "../model/comments.js";

const EvtKeys = {
  ESCAPE: `Escape`,
  ENTER: `Enter`
};

const Mode = {
  DEFAULT: `DEFAULT`,
  POPUP: `POPUP`
};

export default class Movie {
  constructor(movieListContainer, changeData, changeMode, api) {
    this._movieListContainer = movieListContainer;

    this._changeData = changeData;
    this._changeMode = changeMode;
    this._api = api;

    this._cardComponent = null;
    this._popupComponent = null;
    this._mode = Mode.DEFAULT;

    this._bodyElement = document.querySelector(`body`);
    this._mainElement = null;
    this._closeButton = null;
    this._commentsWrapper = null;

    this._moviesModel = new MoviesModel();
    this._commentsModel = new CommentsModel();
    this._commentsModel.addObserver(this._handleModelEvent);

    this._openPopup = this._openPopup.bind(this);
    this._closePopup = this._closePopup.bind(this);
    this._onPopupEscPress = this._onPopupEscPress.bind(this);

    this._handleWatchListClick = this._handleWatchListClick.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleDeleteButtonClick = this._handleDeleteButtonClick.bind(this);
  }

  init(film) {
    this._film = film;

    const prevCardComponent = this._cardComponent;

    this._cardComponent = new MovieCard(film);

    this._cardComponent.setPosterClickHandler(this._openPopup);
    this._cardComponent.setTitleClickHandler(this._openPopup);
    this._cardComponent.setCommentsClickHandler(this._openPopup);

    this._cardComponent.setWatchlistClickHandler(this._handleWatchListClick);
    this._cardComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._cardComponent.setFavoriteClickHandler(this._handleFavoriteClick);


    if (prevCardComponent === null) {
      render(this._movieListContainer, this._cardComponent);
      return;
    }

    if (this._movieListContainer.contains(prevCardComponent.getElement())) {
      replace(this._cardComponent, prevCardComponent);
    }

    if (this._mode === Mode.POPUP) {
      this._openPopup();
    }

    remove(prevCardComponent);
  }

  destroy() {
    remove(this._cardComponent);
    remove(this._popupComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._closePopup();
    }
  }

  _openPopup() {
    if (this._mode !== Mode.POPUP) {
      this._changeMode();
    }

    this._mode = Mode.POPUP;

    this._bodyElement.classList.add(`hide-overflow`);
    this._siteMainElement = this._bodyElement.querySelector(`main`);

    const prevPopupComponent = this._popupComponent;

    this._api.getComments(this._film.id)
    .then((comments) => {
      this._commentsModel.setComments(comments);

      this._popupComponent = new Popup(this._film, this._commentsModel.getComments());
      this._popupComponent.setCloseClickHandler(this._closePopup);
      this._popupComponent.setWatchlistClickHandler(this._handleWatchListClick);
      this._popupComponent.setWatchedClickHandler(this._handleWatchedClick);
      this._popupComponent.setFavoriteClickHandler(this._handleFavoriteClick);
      this._popupComponent.setDeleteButtonClickHandler(this._handleDeleteButtonClick);
      this._popupComponent.restoreHandlers();

      if (prevPopupComponent !== null && this._bodyElement.contains(prevPopupComponent.getElement())) {
        const currentScrollYPosition = prevPopupComponent.getElement().scrollTop;
        replace(this._popupComponent, prevPopupComponent);
        this._popupComponent.getElement().scrollTo(0, currentScrollYPosition);
        this._bodyElement.classList.add(`hide-overflow`);
        document.addEventListener(`keydown`, this._handleFormSubmit);
        document.addEventListener(`keydown`, this._onPopupEscPress);
      } else {
        render(this._bodyElement, this._popupComponent);
        this._bodyElement.classList.add();
        document.addEventListener(`keydown`, this._handleFormSubmit);
        document.addEventListener(`keydown`, this._onPopupEscPress);
      }
    });
  }

  _closePopup() {
    this._mode = Mode.DEFAULT;
    remove(this._popupComponent);
    this._bodyElement.classList.remove(`hide-overflow`);
    document.removeEventListener(`keydown`, this._onPopupEscPress);
    document.removeEventListener(`keydown`, this._handleFormSubmit);
  }

  _onPopupEscPress(evt) {
    if (evt.key === EvtKeys.ESCAPE) {
      evt.preventDefault();
      this._closePopup();
      document.removeEventListener(`keydown`, this._onPopupEscPress);
      document.removeEventListener(`keydown`, this._handleFormSubmit);
    }
  }

  _handleFormSubmit(evt) {
    if (evt.ctrlKey && evt.key === EvtKeys.ENTER) {
      const localComment = this._popupComponent.getNewComment();

      if (localComment.newEmotion === `` || localComment.text === ``) {
        return;
      }

      localComment.date = new Date();
      localComment.author = `Author`;
      localComment.emotion = localComment.newEmotion;
      localComment.id = Date.now() + parseInt(Math.random() * 10000, 10);

      localComment[this._film.id].push(localComment);

      this._commentsModel.addComment(
          UserAction.ADD_COMMENT,
          localComment
      );
    }
  }

  _handleDeleteButtonClick(commentId) {
    this._popupComponent.updateData({
      isDeleting: true,
      deletingCommentId: commentId
    });

    this._api.deleteComment(commentId)
      .then(
          () => {
            this._commentsModel.deleteComment(UserAction.DELETE_COMMENT, commentId);
          }
      );
  }

  _handleModelEvent(userAction) {
    switch (userAction) {
      case UserAction.DELETE_COMMENT:
        this._changeData(
            UserAction.UPDATE_FILM,
            UpdateType.PATCH,
            Object.assign(
                {},
                this._film,
                {
                  comments: this._commentsModel.getComments().map((comment) => comment.id)
                }
            )
        );
        break;

      case UserAction.ADD_COMMENT:
        this._changeData(
            UserAction.UPDATE_FILM,
            UpdateType.PATCH,
            Object.assign(
                {},
                this._film,
                {
                  comments: this._commentsModel.getComments().map((comment) => comment.id)
                }
            )
        );
        break;
    }
  }

  _handleWatchListClick() {
    this._changeData(
        UserAction.UPDATE_FILM,
        UpdateType.PATCH,
        Object.assign(
            {},
            this._film,
            {
              isInWatchList: !this._film.isInWatchList
            }
        )
    );
  }

  _handleWatchedClick() {
    this._changeData(
        UserAction.UPDATE_FILM,
        UpdateType.PATCH,
        Object.assign(
            {},
            this._film,
            {
              isWatched: !this._film.isWatched
            }
        )
    );
  }

  _handleFavoriteClick() {
    this._changeData(
        UserAction.UPDATE_FILM,
        UpdateType.PATCH,
        Object.assign(
            {},
            this._film,
            {
              isFavorite: !this._film.isFavorite
            }
        )
    );
  }
}
