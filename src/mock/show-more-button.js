import {render} from "../utils.js";
import {moviesNum} from "./const.js";
import {films} from "../main.js";
import Button from "../view/show-more-button.js";
import Movie from "../view/movie-card.js";

const {MOVIES_NUM_PER_STEP} = moviesNum;

export const showMoreButton = function () {
  const siteMainElement = document.querySelector(`.main`);
  const movies = siteMainElement.querySelector(`.films`);
  const container = movies.querySelector(`.films-list__container`);
  const moviesWrapper = movies.querySelector(`.films-list`);

  if (films.length > MOVIES_NUM_PER_STEP) {
    let renderedFilms = MOVIES_NUM_PER_STEP;

    render(moviesWrapper, new Button().getElement());

    const buttonElement = movies.querySelector(`.films-list__show-more`);

    buttonElement.addEventListener(`click`, (evt) => {
      evt.preventDefault();

      films
      .slice(renderedFilms, renderedFilms + MOVIES_NUM_PER_STEP)
      .forEach(function (film) {
        render(container, new Movie(film).getElement());
      });

      renderedFilms += MOVIES_NUM_PER_STEP;

      if (renderedFilms >= films.length) {
        buttonElement.remove();
      }
    });
  }
};
