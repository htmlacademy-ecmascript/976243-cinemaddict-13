import {render, remove} from "../utils/render.js";
import {sortMovieDate, sortMovieRating} from "../utils/sorting.js";
import {filter} from "../utils/filter.js";
import {moviesNum, SortType, UpdateType, UserAction} from "../mock/const.js";

import Sorting from "../view/menu-sorting.js";
import Filter from "../view/menu-filters.js";
import MoviesWrapper from "../view/movies-wrapper.js";
import ListEmpty from "../view/list-empty.js";
import Button from "../view/show-more-button.js";

import MovieCardPresenter from "./movie.js";

const {MOVIES_NUM_PER_STEP} = moviesNum;

export default class MoviesList {
  constructor(container, moviesModel, filterModel) {
    this._container = container;
    this._moviesModel = moviesModel;
    this._filterModel = filterModel;
    this._renderedMovieCount = MOVIES_NUM_PER_STEP;
    this._cardPresenter = {};

    this._currentSortType = SortType.DEFAULT;

    this._listEmptyComponent = new ListEmpty();
    this._filters = new Filter();
    this._moviesWrapperComponent = new MoviesWrapper();

    this._handleViewAction = this._handleViewAction.bind(this);
    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);

    this._moviesModel.addObserver(this._handleModelEvent);
    this._filterModel.addObserver(this._handleModelEvent);

    this._movies = null;
    this._generateFilters = null;
    this._mainMoviesContainer = null;
    this._mainFilmsContainer = null;
    this._sortComponent = null;
    this._buttonComponent = null;
  }

  init() {
    this._renderBoard();
  }

  _getMovies() {
    const filterType = this._filterModel.getFilter();
    const movies = this._moviesModel.getMovies();
    const filtredMovies = filter[filterType](movies);

    switch (this._currentSortType) {
      case SortType.DATE:
        return filtredMovies.sort(sortMovieDate);
      case SortType.RATING:
        return filtredMovies.sort(sortMovieRating);
    }

    return filtredMovies;
  }

  _handleViewAction(actionType, updateType, update) {
    switch (actionType) {
      case UserAction.UPDATE_FILM:
        this._moviesModel.updateMovie(updateType, update);
        break;
    }
  }

  _handleModelEvent(updateType, data) {
    switch (updateType) {
      case UpdateType.PATCH:
        this._cardPresenter[data.id].init(data);
        break;
      case UpdateType.MINOR:
        this._clearBoard();
        this._renderBoard();
        break;
      case UpdateType.MAJOR:
        this._clearBoard({resetRenderedMovieCount: true, resetSortType: true});
        this._renderBoard();
        break;
    }
  }

  _handleModeChange() {
    Object
      .values(this._cardPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._currentSortType = sortType;
    this._clearBoard({resetRenderedMovieCount: true});
    this._renderBoard();
  }

  _renderSort() {
    if (this._sortComponent !== null) {
      this._sortComponent = null;
    }

    this._sortComponent = new Sorting(this._currentSortType);
    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
    render(this._container, this._sortComponent);
  }

  _renderMoviesWrapper() {
    render(this._container, this._moviesWrapperComponent);

    this._movies = this._container.querySelector(`.films`);
    this._mainMoviesContainer = this._movies.querySelector(`.films-list`);
    this._mainFilmsContainer = this._movies.querySelector(`.films-list__container`);
  }

  _renderCards(films, container) {
    films.forEach((film) => this._renderCard(film, container));
  }

  _renderCard(film, container) {
    const cardPresenter = new MovieCardPresenter(container, this._handleViewAction, this._handleModeChange);
    cardPresenter.init(film);
    this._cardPresenter[film.id] = cardPresenter;
  }

  _renderShowMoreButton() {
    if (this._buttonComponent !== null) {
      this._buttonComponent = null;
    }

    this._buttonComponent = new Button();
    this._buttonComponent.setClickHandler(this._handleShowMoreButtonClick);

    render(this._mainMoviesContainer, this._buttonComponent);

  }

  _handleShowMoreButtonClick() {
    const moviesCount = this._getMovies().length;
    const newRenderedMovieCount = Math.min(moviesCount, this._renderedMovieCount + MOVIES_NUM_PER_STEP);
    const movies = this._getMovies().slice(this._renderedMovieCount, newRenderedMovieCount);

    this._renderCards(movies, this._mainFilmsContainer);
    this._renderedMovieCount = newRenderedMovieCount;

    if (this._renderedMovieCount >= moviesCount) {
      remove(this._buttonComponent);
    }
  }

  _clearBoard({resetRenderedMovieCount = false, resetSortType = false} = {}) {
    const moviesCount = this._getMovies().length;

    Object
      .values(this._cardPresenter)
      .forEach((presenter) => presenter.destroy());
    this._cardPresenter = {};
    remove(this._sortComponent);
    remove(this._moviesWrapperComponent);
    remove(this._buttonComponent);

    if (resetRenderedMovieCount) {
      this._renderedMovieCount = MOVIES_NUM_PER_STEP;
    } else {
      this._renderedMovieCount = Math.min(moviesCount, this._renderedMovieCount);
    }

    if (resetSortType) {
      this._currentSortType = SortType.DEFAULT;
    }
  }

  _renderBoard() {
    const movies = this._getMovies();
    const moviesCount = this._getMovies().length;

    if (moviesCount === 0) {
      render(this._container, this._listEmptyComponent);
      return;
    }

    this._renderSort();
    this._renderMoviesWrapper();

    this._renderCards(movies.slice(0, Math.min(moviesCount, this._renderedMovieCount)), this._mainFilmsContainer);

    if (moviesCount > this._renderedMovieCount) {
      this._renderShowMoreButton();
    }
  }
}
