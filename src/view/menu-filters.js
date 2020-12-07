import AbstractView from "./abstract.js";

const countFilms = (filterName, filters) => {
  let filterCount = 0;

  for (let filter of filters) {
    if (filter.name === filterName) {
      filterCount = filter.count;
    }
  }

  return filterCount;
};

const createFilterTemplate = (filters) => {
  const watchedListCount = countFilms(`watchList`, filters);
  const watchedCount = countFilms(`watched`, filters);
  const favoriteCount = countFilms(`favorite`, filters);

  return `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchedListCount}</span></a>
      <a href="#history" class="main-navigation__item main-navigation__item--active">History <span class="main-navigation__item-count">${watchedCount}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favoriteCount}</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};

export default class Filter extends AbstractView {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }
}
