import MovieCard from "../view/movie-card.js";
import Popup from "../view/popup.js";
import {render, remove, replace} from "../utils/render.js";
import {UserAction, UpdateType} from "../mock/const.js";
import dayjs from "dayjs";
import he from "he";

const EvtKeys = {
  ESCAPE: `Escape`
};

const Mode = {
  DEFAULT: `DEFAULT`,
  POPUP: `POPUP`
};

export default class Movie {
  constructor(movieListContainer, changeData, changeMode) {
    this._movieListContainer = movieListContainer;

    this._changeData = changeData;
    this._changeMode = changeMode;

    this._cardComponent = null;
    this._popupComponent = null;
    this._mode = Mode.DEFAULT;

    this._bodyElement = document.querySelector(`body`);
    this._mainElement = null;
    this._closeButton = null;
    this._commentsWrapper = null;

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
    const prevPopupComponent = this._popupComponent;

    this._cardComponent = new MovieCard(film);
    this._popupComponent = new Popup(film);

    this._cardComponent.setPosterClickHandler(this._openPopup);
    this._cardComponent.setTitleClickHandler(this._openPopup);
    this._cardComponent.setCommentsClickHandler(this._openPopup);

    this._cardComponent.setWatchlistClickHandler(this._handleWatchListClick);
    this._cardComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._cardComponent.setFavoriteClickHandler(this._handleFavoriteClick);


    if (prevCardComponent === null || prevPopupComponent === null) {
      render(this._movieListContainer, this._cardComponent);
      return;
    }

    if (this._movieListContainer.contains(prevCardComponent.getElement())) {
      replace(this._cardComponent, prevCardComponent);
    }

    if (this._bodyElement.contains(prevPopupComponent.getElement())) {
      remove(prevPopupComponent);
      this._openPopup();
    }

    remove(prevCardComponent);
    remove(prevPopupComponent);
  }

  _openPopup() {
    this._changeMode();
    this._bodyElement.classList.add(`hide-overflow`);
    this._siteMainElement = this._bodyElement.querySelector(`main`);

    render(this._siteMainElement, this._popupComponent);

    this._popupComponent.setWatchlistClickHandler(this._handleWatchListClick);
    this._popupComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._popupComponent.setFavoriteClickHandler(this._handleFavoriteClick);
    this._popupComponent.setCloseClickHandler(this._closePopup);
    this._popupComponent.setDeleteButtonClickHandler(this._handleDeleteButtonClick);

    this._popupComponent.restoreHandlers();

    this._mode = Mode.POPUP;

    document.addEventListener(`keydown`, this._onPopupEscPress);
    document.addEventListener(`keydown`, this._handleFormSubmit);
  }

  _closePopup() {
    this._popupComponent.removeNewComment();
    this._bodyElement.classList.remove(`hide-overflow`);
    remove(this._popupComponent);

    this._mode = Mode.DEFAULT;

    document.removeEventListener(`keydown`, this._onPopupEscPress);
    document.removeEventListener(`keydown`, this._handleFormSubmit);
  }

  _handleFormSubmit(evt) {
    if (evt.ctrlKey && evt.key === `Enter`) {
      const userComment = this._popupComponent.getNewComment();

      if (userComment.text === `` || userComment.emotion === ``) {
        return;
      }

      const newComment = {
        id: Date.now() + parseInt(Math.random() * 10000, 10),
        author: `Tim Macoveev`,
        date: dayjs().format(`YYYY/M/D HH:mm`),
        message: he.encode(userComment.text),
        emoji: `./images/emoji/` + userComment.emotion + `.png`,
      };

      this._film.comments.push(newComment);

      this._handleModelEvent(`ADD`);
    }
  }

  _handleDeleteButtonClick(commentId) {
    const index = this._film.comments.findIndex((comment) => comment.id === +commentId);
    this._film.comments = [
      ...this._film.comments.slice(0, index),
      ...this._film.comments.slice(index + 1)
    ];

    this._handleModelEvent(`DELETE`);
  }

  _onPopupEscPress(evt) {
    if (evt.key === EvtKeys.ESCAPE) {
      evt.preventDefault();
      this._closePopup();
    }
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._closePopup();
    }
  }

  destroy() {
    remove(this._cardComponent);
    remove(this._popupComponent);
  }

  _handleModelEvent(userAction) {
    switch (userAction) {
      case `ADD`:
        this._changeData(
            UserAction.UPDATE_FILM,
            UpdateType.PATCH,
            Object.assign(
                {},
                this._film,
                {
                  comments: this._film.comments,
                  commentsAmount: this._film.commentsAmount + 1
                }
            )
        );
        break;

      case `DELETE`:
        this._changeData(
            UserAction.UPDATE_FILM,
            UpdateType.PATCH,
            Object.assign(
                {},
                this._film,
                {
                  comments: this._film.comments,
                  commentsAmount: this._film.commentsAmount - 1
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
