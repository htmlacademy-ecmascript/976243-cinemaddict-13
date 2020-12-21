import {render, remove, RenderPosition} from "../utils/render.js";
import {updateItem} from "../utils/common.js";
import {sortMovieDate, sortMovieRating} from "../utils/sorting.js";
import {moviesNum, SortType} from "../mock/const.js";
import {generateFilter} from "../mock/filter.js";

import Sorting from "../view/menu-sorting.js";
import Filter from "../view/menu-filters.js";
import MoviesWrapper from "../view/movies-wrapper.js";
import ListEmpty from "../view/list-empty.js";
import Button from "../view/show-more-button.js";

import MovieCardPresenter from "./movie.js";

const {MOVIES_NUM_PER_STEP} = moviesNum;

export default class MoviesList {
  constructor(container) {
    this._container = container;
    this._renderedFilmCount = MOVIES_NUM_PER_STEP;
    this._cardPresenter = {};
    this._generateFilters = null;

    this._currentSortType = SortType.DEFAULT;

    this._filterComponent = null;
    this._listEmptyComponent = new ListEmpty();
    this._filters = new Filter();
    this._sortingComponent = new Sorting();
    this._moviesWrapperComponent = new MoviesWrapper();
    this._buttonComponent = new Button();

    this._handleFilmChange = this._handleFilmChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);

    this._movies = null;
    this._mainMoviesContainer = null;
    this._mainFilmsContainer = null;
  }

  init(films) {
    this._films = films.slice();
    this._sourcedFilmsTasks = films.slice();
    this._renderMainContent(films);
  }

  _handleFilmChange(updatedFilm) {
    this._films = updateItem(this._films, updatedFilm);
    this._cardPresenter[updatedFilm.id].init(updatedFilm);
    this._updateFilters();
  }

  _handleModeChange() {
    Object
      .values(this._cardPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _sortMovies(sortType) {
    switch (sortType) {
      case SortType.DATE:
        this._films.sort(sortMovieDate);
        break;
      case SortType.RATING:
        this._films.sort(sortMovieRating);
        break;
      default:

        this._films = this._sourcedFilmsTasks.slice();
    }

    this._currentSortType = sortType;
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortMovies(sortType);
    this._clearMoviesList();
    this._renderMoviesList();
  }

  _renderSort() {
    render(this._container, this._sortingComponent);
    this._sortingComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _renderMainContent() {
    if (this._films.length === 0) {
      render(this._container, this._listEmptyComponent);
      return;
    }

    this._renderMoviesList();
  }

  _renderFilter() {
    this._generateFilters = generateFilter(this._films);
    this._filterComponent = new Filter(this._generateFilters);

    render(this._container, this._filterComponent, RenderPosition.AFTERBEGIN);
  }

  _renderMoviesList() {
    this._renderFilter();
    this._renderSort();
    render(this._container, this._moviesWrapperComponent);

    this._movies = this._container.querySelector(`.films`);
    this._mainMoviesContainer = this._movies.querySelector(`.films-list`);
    this._mainFilmsContainer = this._movies.querySelector(`.films-list__container`);

    this._renderCards(0, Math.min(this._films.length, MOVIES_NUM_PER_STEP), this._mainFilmsContainer);

    if (this._films.length > MOVIES_NUM_PER_STEP) {
      this._renderShowMoreButton();
    }
  }

  _renderCards(from, to, container) {
    this._films
    .slice(from, to)
    .forEach((film) => this._renderCard(film, container));
  }

  _renderCard(film, container) {
    const cardPresenter = new MovieCardPresenter(container, this._handleFilmChange, this._handleModeChange);
    cardPresenter.init(film);
    this._cardPresenter[film.id] = cardPresenter;
  }

  _renderShowMoreButton() {
    render(this._mainMoviesContainer, this._buttonComponent);

    this._buttonComponent.setClickHandler(this._handleShowMoreButtonClick);
  }

  _handleShowMoreButtonClick() {
    this._renderCards(this._renderedFilmCount, this._renderedFilmCount + MOVIES_NUM_PER_STEP, this._mainFilmsContainer);
    this._renderedFilmCount += MOVIES_NUM_PER_STEP;

    if (this._renderedFilmCount >= this._films.length) {
      remove(this._buttonComponent);
    }
  }

  _updateFilters() {
    remove(this._filterComponent);
    this._renderFilter();
  }

  _clearMoviesList() {
    Object
      .values(this._cardPresenter)
      .forEach((presenter) => presenter.destroy());
    this._cardPresenter = {};
    this._renderedFilmCount = MOVIES_NUM_PER_STEP;
    remove(this._filterComponent);
    remove(this._moviesWrapperComponent);
    remove(this._moviesWrapperComponent);
    remove(this._buttonComponent);
  }
}
