import AbstractView from "./abstract.js";
import {MAX_LENGTH_SHORT_DESCRIPTION} from "../const.js";
import dayjs from "dayjs";

const createMovieCardTemplate = (movie) => {
  const {poster,
    title,
    rating,
    year,
    duration,
    genre,
    description,
    isInWatchList,
    isWatched,
    isFavorite,
    comments} = movie;

  const isActive = (control) => {
    const activeClassName = control
      ? `film-card__controls-item--active`
      : ``;

    return activeClassName;
  };

  const shortDescriprion = () => {
    const descriptionText = (description.length >= MAX_LENGTH_SHORT_DESCRIPTION)
      ? description.slice(0, MAX_LENGTH_SHORT_DESCRIPTION - 1) + `...`
      : description;

    return descriptionText;
  };

  const checkComments = () => {
    const commentsAmount = comments.length;

    const commentsNum = (commentsAmount === 1)
      ? commentsAmount + ` comment`
      : commentsAmount + ` comments`;

    return commentsNum;
  };

  return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${dayjs(new Date(year)).format(`YYYY`)}</span>
      <span class="film-card__duration">${Math.trunc(duration / 60)}h ${duration % 60}m</span>
      <span class="film-card__genre">${genre[0]}</span>
    </p>
    <img src="${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${shortDescriprion()}</p>
    <a class="film-card__comments">${checkComments()}</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isActive(isInWatchList)}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isActive(isWatched)}" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${isActive(isFavorite)}" type="button">Mark as favorite</button>
    </div>
  </article>`;
};

export default class Movie extends AbstractView {
  constructor(film) {
    super();
    this._film = film;

    this._onPosterClick = this._onPosterClick.bind(this);
    this._onTitleClick = this._onTitleClick.bind(this);
    this._onCommentsClick = this._onCommentsClick.bind(this);

    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createMovieCardTemplate(this._film);
  }

  _onPosterClick(evt) {
    evt.preventDefault();
    this._callback.posterClick();
  }

  _onTitleClick(evt) {
    evt.preventDefault();
    this._callback.titleClick();
  }

  _onCommentsClick(evt) {
    evt.preventDefault();
    this._callback.commentsClick();
  }

  setPosterClickHandler(callback) {
    this._callback.posterClick = callback;
    this.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, this._onPosterClick);
  }

  setTitleClickHandler(callback) {
    this._callback.titleClick = callback;
    this.getElement().querySelector(`.film-card__title`).addEventListener(`click`, this._onTitleClick);
  }

  setCommentsClickHandler(callback) {
    this._callback.commentsClick = callback;
    this.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, this._onCommentsClick);
  }

  _watchlistClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchlistClick();
  }

  _watchedClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchedClick();
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, this._watchlistClickHandler);
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, this._watchedClickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._favoriteClickHandler);
  }
}
