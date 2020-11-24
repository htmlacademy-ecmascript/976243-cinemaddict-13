import {render} from "./utile.js";
import {generateMovie} from "./mock/movie.js";
import {generateFilter} from "./mock/filter.js";

import {openPopup} from "./mock/popup.js";

import {createUserRankTemplate} from "./view/user-rank.js";
import {createFilterTemplate} from "./view/menu-filters.js";
import {createSortingTemplate} from "./view/menu-sorting.js";
import {createMovieCardTemplate} from "./view/movie-card.js";
import {createMoviesWrapperTemplate} from "./view/movies-wrapper.js";
import {createShowMoreButtonTemplate} from "./view/show-more-button.js";

const MOVIES_COUNT = 20;
const MOVIES_COUNT_PER_STEP = 5;

const films = new Array(MOVIES_COUNT).fill().map(generateMovie);

const filters = generateFilter(films);

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderElement, createUserRankTemplate());
render(siteMainElement, createFilterTemplate(filters));
render(siteMainElement, createSortingTemplate());
render(siteMainElement, createMoviesWrapperTemplate());

const movies = siteMainElement.querySelector(`.films`);
const moviesWrapper = movies.querySelectorAll(`.films-list`);
const container = movies.querySelector(`.films-list__container`);

for (let i = 0; i < Math.min(films.length, MOVIES_COUNT_PER_STEP); i++) {
  render(container, createMovieCardTemplate(films[i]));
}

if (films.length > MOVIES_COUNT_PER_STEP) {
  let renderedFilms = MOVIES_COUNT_PER_STEP;

  render(moviesWrapper[0], createShowMoreButtonTemplate());

  const showMoreButton = movies.querySelector(`.films-list__show-more`);

  showMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();

    films
    .slice(renderedFilms, renderedFilms + MOVIES_COUNT_PER_STEP)
    .forEach((film) => render(container, createMovieCardTemplate(film)));

    renderedFilms += MOVIES_COUNT_PER_STEP;

    if (renderedFilms >= films.length) {
      showMoreButton.remove();
    }
  });
}

container.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  openPopup(evt, films[0]);
});
