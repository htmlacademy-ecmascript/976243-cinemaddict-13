import {render} from "./utils.js";
import {generateMovie} from "./mock/movie.js";
import {generateFilter} from "./mock/filter.js";
import {openPopup} from "./mock/popup.js";
import {moviesNum} from "./mock/const.js";
import {showMoreButton} from "./mock/show-more-button.js";
import {createUserRankTemplate} from "./view/user-rank.js";
import {createFilterTemplate} from "./view/menu-filters.js";
import {createSortingTemplate} from "./view/menu-sorting.js";
import {createMovieCardTemplate} from "./view/movie-card.js";
import {createMoviesWrapperTemplate} from "./view/movies-wrapper.js";

const {MOVIES_NUM_ALL, MOVIES_NUM_PER_STEP} = moviesNum;

export const films = new Array(MOVIES_NUM_ALL).fill().map(generateMovie);

const filters = generateFilter(films);

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderElement, createUserRankTemplate());
render(siteMainElement, createFilterTemplate(filters));
render(siteMainElement, createSortingTemplate());
render(siteMainElement, createMoviesWrapperTemplate());

const movies = siteMainElement.querySelector(`.films`);
const container = movies.querySelector(`.films-list__container`);

for (let i = 0; i < Math.min(films.length, MOVIES_NUM_PER_STEP); i++) {
  render(container, createMovieCardTemplate(films[i]));
}

showMoreButton();

container.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  openPopup(evt, films);
});
