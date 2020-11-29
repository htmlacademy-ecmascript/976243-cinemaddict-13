import {createElement} from "../utils.js";

const createMovieCardTemplate = (movie) => {
  const {poster, title, rating, year, duration, genre, description, isInWatchList, isWatched, isFavorite} = movie;

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
    <a class="film-card__comments">51 comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isActive(isInWatchList)}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isActive(isWatched)}" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${isActive(isFavorite)}" type="button">Mark as favorite</button>
    </div>
  </article>`;
};

export default class Movie {
  constructor(films) {
    this._films = films;
    this._element = null;
  }

  getTemplate() {
    return createMovieCardTemplate(this._films);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
