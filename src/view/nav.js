import AbstractView from "./abstract.js";
import {FilterType} from "../mock/const.js";

const createNavTemplate = () => {
  return `<nav class="main-navigation">
  <a href="#stats" class="main-navigation__additional" data-type=${FilterType.STATS}>Stats</a></nav>`;
};

export default class Nav extends AbstractView {
  constructor() {
    super();
    this._menuClickHandler = this._menuClickHandler.bind(this);
  }

  getTemplate() {
    return createNavTemplate();
  }

  _menuClickHandler(evt) {
    evt.preventDefault();

    if (evt.target.tagName !== `A`) {
      return;
    }

    const statsButton = this.getElement().querySelector(`[data-type="${FilterType.STATS}"]`);
    const isActive = statsButton.classList.contains(`main-navigation__additional--active`);

    if (evt.target.dataset.type !== FilterType.STATS && !isActive) {
      return;
    }

    statsButton.classList.toggle(`main-navigation__additional--active`);

    this._callback.menuClick(evt.target.dataset.type);
  }

  setMenuClickHandler(callback) {
    this._callback.menuClick = callback;
    this.getElement().addEventListener(`click`, this._menuClickHandler);
  }
}
