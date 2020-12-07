import {render} from "./utils/render.js";

import {generateMovie} from "./mock/movie.js";
import {generateFilter} from "./mock/filter.js";
import {moviesNum} from "./mock/const.js";

import Rank from "./view/user-rank.js";
import Filter from "./view/menu-filters.js";
import Sorting from "./view/menu-sorting.js";
import MoviesWrapper from "./view/movies-wrapper.js";
import Movie from "./view/movie-card.js";
import ListEmpty from "./view/list-empty.js";
import Button from "./view/show-more-button.js";

const {MOVIES_NUM_ALL, MOVIES_NUM_PER_STEP} = moviesNum;

export const films = new Array(MOVIES_NUM_ALL).fill().map(generateMovie);

const filters = generateFilter(films);

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderElement, new Rank());
render(siteMainElement, new Filter(filters));

const renderFilms = function (place) {
  for (let i = 0; i < Math.min(films.length, MOVIES_NUM_PER_STEP); i++) {
    render(place, new Movie(films[i]));
  }
};

if (films.length === 0) {
  render(siteMainElement, new ListEmpty());
} else {

  render(siteMainElement, new Sorting());
  render(siteMainElement, new MoviesWrapper());

  const movies = siteMainElement.querySelector(`.films`);
  const container = movies.querySelector(`.films-list__container`);
  const moviesContainer = movies.querySelector(`.films-list`);

  renderFilms(container);

  if (films.length > MOVIES_NUM_PER_STEP) {
    render(moviesContainer, new Button());
  }
}
