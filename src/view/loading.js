import AbstractView from "./abstract.js";

const createNoMovieTemplate = () => {
  return `<p class="board__no-tasks">
    Loading...
  </p>`;
};

export default class Loading extends AbstractView {
  getTemplate() {
    return createNoMovieTemplate();
  }
}
