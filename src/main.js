import {render} from "./utils.js";

import {generateMovie} from "./mock/movie.js";
import {generateFilter} from "./mock/filter.js";
import {openPopup} from "./mock/popup.js";
import {moviesNum} from "./mock/const.js";
import {showMoreButton} from "./mock/show-more-button.js";

import Rank from "./view/user-rank.js";
import Filter from "./view/menu-filters.js";
import Sorting from "./view/menu-sorting.js";
import MoviesWrapper from "./view/movies-wrapper.js";
import Movie from "./view/movie-card.js";

const {MOVIES_NUM_ALL, MOVIES_NUM_PER_STEP} = moviesNum;

export const films = new Array(MOVIES_NUM_ALL).fill().map(generateMovie);

const filters = generateFilter(films);

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderElement, new Rank().getElement());
render(siteMainElement, new Filter(filters).getElement());
render(siteMainElement, new Sorting().getElement());
render(siteMainElement, new MoviesWrapper().getElement());

const movies = siteMainElement.querySelector(`.films`);
const container = movies.querySelector(`.films-list__container`);

for (let i = 0; i < Math.min(films.length, MOVIES_NUM_PER_STEP); i++) {
  render(container, new Movie(films[i]).getElement());
}

showMoreButton();

container.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  openPopup(evt, films);
});
