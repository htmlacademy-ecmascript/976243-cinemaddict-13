import {render} from "./utils/render.js";
import {generateMovie} from "./mock/movie.js";
import {moviesNum, FilterType, StatsNav} from "./mock/const.js";
import Rank from "./view/user-rank.js";
import NavView from "./view/nav.js";
import StatsView from "./view/statistics.js";
import MovieListPresenter from "./presenter/movies-list.js";
import FilterPresenter from "./presenter/filter.js";
import MoviesModel from "./model/movies.js";
import FilterModel from "./model/filter.js";

const {MOVIES_NUM_ALL} = moviesNum;

const films = new Array(MOVIES_NUM_ALL).fill().map(generateMovie);

const moviesModel = new MoviesModel();
moviesModel.setMovies(films);

const filterModel = new FilterModel();

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

const navComponent = new NavView();
const statsComponent = new StatsView(films, StatsNav.ALL_TIME);

render(siteHeaderElement, new Rank());
render(siteMainElement, navComponent);

render(siteMainElement, statsComponent);
statsComponent.hide();

const siteNavElement = document.querySelector(`.main-navigation`);

const filterPresenter = new FilterPresenter(siteNavElement, filterModel, moviesModel);
const movieListPresenter = new MovieListPresenter(siteMainElement, moviesModel, filterModel);

filterPresenter.init();
movieListPresenter.init();

const handleNavClick = (navType) => {
  if (navType !== FilterType.STATS) {
    statsComponent.hide();
    movieListPresenter.init();
    return;
  }

  statsComponent.show();
  movieListPresenter.destroy();
};

navComponent.setMenuClickHandler(handleNavClick);
