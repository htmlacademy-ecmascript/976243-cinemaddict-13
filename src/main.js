import {render} from "./utils/render.js";

import {generateMovie} from "./mock/movie.js";
import {generateFilter} from "./mock/filter.js";
import {moviesNum} from "./mock/const.js";

import Rank from "./view/user-rank.js";
import Filter from "./view/menu-filters.js";

import MovieListPresenter from "./presenter/movies-list.js";

const {MOVIES_NUM_ALL} = moviesNum;

export const films = new Array(MOVIES_NUM_ALL).fill().map(generateMovie);

const filters = generateFilter(films);

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderElement, new Rank());
render(siteMainElement, new Filter(filters));

const movieListPresenter = new MovieListPresenter(siteMainElement);
movieListPresenter.init(films);
