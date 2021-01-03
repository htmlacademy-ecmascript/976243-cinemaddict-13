import MovieCard from "../view/movie-card.js";
import Popup from "../view/popup.js";
import {render, remove, replace} from "../utils/render.js";

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

    this._popupComponent.restoreHandlers();

    this._mode = Mode.POPUP;

    document.addEventListener(`keydown`, this._onPopupEscPress);
  }

  _closePopup() {
    this._bodyElement.classList.remove(`hide-overflow`);
    remove(this._popupComponent);

    this._mode = Mode.DEFAULT;

    document.removeEventListener(`keydown`, this._onPopupEscPress);
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

  _handleWatchListClick() {
    this._changeData(
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
