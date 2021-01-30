import UserRankView from "../view/user-rank.js";
import {render, remove, replace} from "../utils/render.js";
import {UserRank} from "../const.js";

export default class UserProfile {
  constructor(userRankContainer, moviesModel) {
    this._userRankContainer = userRankContainer;
    this._moviesModel = moviesModel;

    this._userRank = null;
    this._userRankComponent = null;

    this._handleModelEvent = this._handleModelEvent.bind(this);
    this._moviesModel.addObserver(this._handleModelEvent);
  }

  init() {
    this._userRank = this._getUserRank();

    const prevUserRankComponent = this._userRankComponent;
    this._userRankComponent = new UserRankView(this._userRank);

    if (prevUserRankComponent === null) {
      render(this._userRankContainer, this._userRankComponent);
      return;
    }

    replace(this._userRankComponent, prevUserRankComponent);
    remove(prevUserRankComponent);
  }

  _getUserRank() {
    const watchedMoviesAmount = this._moviesModel.getMovies().filter((film) => film.isWatched).length;

    if (watchedMoviesAmount === 0) {
      return ``;
    } else if (watchedMoviesAmount >= 21) {
      return UserRank.MOVIE_BUFF;
    } else if (watchedMoviesAmount >= 11) {
      return UserRank.FAN;
    } else {
      return UserRank.NOVICE;
    }
  }

  _handleModelEvent() {
    this.init();
  }

  getCurrentUserRank() {
    return this._userRank;
  }
}
