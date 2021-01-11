import {render} from "./utils/render.js";
import {generateMovie} from "./mock/movie.js";
import {moviesNum} from "./mock/const.js";
import Rank from "./view/user-rank.js";
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

render(siteHeaderElement, new Rank());

const movieListPresenter = new MovieListPresenter(siteMainElement, moviesModel, filterModel);
const filterPresenter = new FilterPresenter(siteMainElement, filterModel, moviesModel);
movieListPresenter.init();
filterPresenter.init();
