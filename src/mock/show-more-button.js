import {render} from "../utils/render.js";
import {moviesNum} from "./const.js";
import {films} from "../main.js";
import Movie from "../view/movie-card.js";

const {MOVIES_NUM_PER_STEP} = moviesNum;

export const showMoreButton = function () {
  const siteMainElement = document.querySelector(`.main`);
  const movies = siteMainElement.querySelector(`.films`);
  const container = movies.querySelector(`.films-list__container`);
  const buttonElement = movies.querySelector(`.films-list__show-more`);

  let renderedFilms = container.querySelectorAll(`.film-card`);

  films
  .slice(renderedFilms.length, renderedFilms.length + MOVIES_NUM_PER_STEP)
  .forEach(function (film) {
    render(container, new Movie(film));
  });

  if (renderedFilms.length + MOVIES_NUM_PER_STEP >= films.length) {
    buttonElement.remove();
  }
};
