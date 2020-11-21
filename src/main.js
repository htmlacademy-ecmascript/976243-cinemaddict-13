import {createUserRankTemplate} from "./view/user-rank.js";
import {createMenuTemplate} from "./view/menu.js";
import {createMovieCardTemplate} from "./view/movie-card.js";
import {createMoviesWrapperTemplate} from "./view/movies-wrapper.js";
import {createShowMoreButtonTemplate} from "./view/show-more-button.js";
// import {createPopupTemplate} from "./view/popup.js";

const MOVIE_CARDS_MAIN = 5;
const MOVIE_CARDS_EXTRA = 2;

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const renderCard = (container, template, count) => {
  for (let i = 0; i < count; i++) {
    render(container, template);
  }
};

render(siteHeaderElement, createUserRankTemplate());
render(siteMainElement, createMenuTemplate());
render(siteMainElement, createMoviesWrapperTemplate());

const movies = siteMainElement.querySelector(`.films`);
const moviesWrapper = movies.querySelectorAll(`.films-list`);

moviesWrapper.forEach((list, index) => {
  const container = list.querySelector(`.films-list__container`);
  const count = (index === 0) ? MOVIE_CARDS_MAIN : MOVIE_CARDS_EXTRA;
  renderCard(container, createMovieCardTemplate(), count);
});

render(moviesWrapper[0], createShowMoreButtonTemplate());
// render(siteMainElement, createPopupTemplate());
