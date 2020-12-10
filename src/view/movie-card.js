import AbstractView from "./abstract.js";
import {createElement} from "../utils/render.js";
import {openPopup} from "../mock/popup.js";

const createMovieCardTemplate = (movie) => {
  const {poster,
    title,
    rating,
    year, duration,
    genre,
    description,
    isInWatchList,
    isWatched,
    isFavorite,
    commentsAmount} = movie;

  const isActive = (control) => {
    const activeClassName = control
      ? `film-card__controls-item--active`
      : ``;

    return activeClassName;
  };

  const shortDescriprion = () => {
    if (description.length >= 140) {
      return description.slice(0, 139) + `...`;
    } else {
      return description;
    }
  };

  const checkComments = () => {
    if (commentsAmount === 1) {
      return commentsAmount + ` comment`;
    } else {
      return commentsAmount + ` comments`;
    }
  };


  return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${year}</span>
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

    this.onCardClick = this.onCardClick.bind(this);
  }

  getTemplate() {
    return createMovieCardTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
      this._element.querySelector(`.film-card__title`).addEventListener(`click`, this.onCardClick);
      this._element.querySelector(`.film-card__poster`).addEventListener(`click`, this.onCardClick);
      this._element.querySelector(`.film-card__comments`).addEventListener(`click`, this.onCardClick);
    }

    return this._element;
  }

  onCardClick(evt) {
    evt.preventDefault();
    openPopup(this._film);
  }
}
