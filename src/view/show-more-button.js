import AbstractView from "./abstract.js";
import {createElement} from "../utils/render.js";
import {showMoreButton} from "../mock/show-more-button.js";

const createShowMoreButtonTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

export default class Button extends AbstractView {
  constructor() {
    super();

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  getTemplate() {
    return createShowMoreButtonTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
      this._element.addEventListener(`click`, this.onButtonClick);
    }

    return this._element;
  }

  onButtonClick(evt) {
    evt.preventDefault();
    showMoreButton();
  }
}
