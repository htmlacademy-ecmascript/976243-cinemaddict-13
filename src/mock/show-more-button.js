import {moviesNum} from "./const.js";
import {films} from "../main.js";
import {render} from "../utils.js";
import {createShowMoreButtonTemplate} from "../view/show-more-button.js";
import {createMovieCardTemplate} from "../view/movie-card.js";

const {MOVIES_NUM_PER_STEP} = moviesNum;


export const showMoreButton = function () {
  const siteMainElement = document.querySelector(`.main`);
  const movies = siteMainElement.querySelector(`.films`);
  const container = movies.querySelector(`.films-list__container`);
  const moviesWrapper = movies.querySelector(`.films-list`);


  if (films.length > MOVIES_NUM_PER_STEP) {
    let renderedFilms = MOVIES_NUM_PER_STEP;

    render(moviesWrapper, createShowMoreButtonTemplate());

    const buttonElement = movies.querySelector(`.films-list__show-more`);

    buttonElement.addEventListener(`click`, (evt) => {
      evt.preventDefault();

      films
      .slice(renderedFilms, renderedFilms + MOVIES_NUM_PER_STEP)
      .forEach((film) => render(container, createMovieCardTemplate(film)));

      renderedFilms += MOVIES_NUM_PER_STEP;

      if (renderedFilms >= films.length) {
        buttonElement.remove();
      }
    });
  }
};
