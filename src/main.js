import {render, replace} from "./utils/render.js";
import {UpdateType, FilterType, StatsNav} from "./mock/const.js";
import Rank from "./view/user-rank.js";
import NavView from "./view/nav.js";
import StatsView from "./view/statistics.js";
import MovieListPresenter from "./presenter/movies-list.js";
import FilterPresenter from "./presenter/filter.js";
import MoviesModel from "./model/movies.js";
import FilterModel from "./model/filter.js";
import Api from "./api.js";

const AUTHORIZATION = `Basic hve879423okj09`;
const END_POINT = `https://13.ecmascript.pages.academy/cinemaddict`;

const api = new Api(END_POINT, AUTHORIZATION);

const moviesModel = new MoviesModel();
const filterModel = new FilterModel();

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

const navComponent = new NavView();

render(siteHeaderElement, new Rank());
render(siteMainElement, navComponent);

const siteNavElement = document.querySelector(`.main-navigation`);

const filterPresenter = new FilterPresenter(siteNavElement, filterModel, moviesModel);
const movieListPresenter = new MovieListPresenter(siteMainElement, moviesModel, filterModel, api);

filterPresenter.init();
movieListPresenter.init();

let statsComponent = null;

const handleNavClick = (navType) => {
  if (navType !== FilterType.STATS) {
    statsComponent.hide();
    movieListPresenter.init();
    return;
  }

  const prevStatsComponent = statsComponent;

  statsComponent = new StatsView(moviesModel.getMovies(), StatsNav.ALL_TIME);

  if (prevStatsComponent === null) {
    movieListPresenter.destroy();
    render(siteMainElement, statsComponent);
    return;
  }

  replace(statsComponent, prevStatsComponent);

  movieListPresenter.destroy();
  statsComponent.show();
};

navComponent.setMenuClickHandler(handleNavClick);

api.getMovies()
  .then((movies) => {
    moviesModel.setMovies(UpdateType.INIT, movies);
  })
  .catch(() => {
    moviesModel.setMovies(UpdateType.INIT, []);
  });
