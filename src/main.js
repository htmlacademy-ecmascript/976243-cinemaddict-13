import {render} from "./utils/render.js";

import {generateMovie} from "./mock/movie.js";
import {moviesNum} from "./mock/const.js";

import Rank from "./view/user-rank.js";

import MovieListPresenter from "./presenter/movies-list.js";

const {MOVIES_NUM_ALL} = moviesNum;

export const films = new Array(MOVIES_NUM_ALL).fill().map(generateMovie);

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderElement, new Rank());

const movieListPresenter = new MovieListPresenter(siteMainElement);
movieListPresenter.init(films);
