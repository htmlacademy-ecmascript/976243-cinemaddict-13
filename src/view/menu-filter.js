import AbstractView from "./abstract.js";

const createFilterItemTemplate = (filter, currentFilterType) => {
  const {type, name, count} = filter;

  return `<a href="#${type}" data-type=${type} class="main-navigation__item ${type === currentFilterType
    ? `main-navigation__item--active`
    : ``}">${name} ${type === `all` ? `` : `<span class="main-navigation__item-count">${count}</span>`}</a>`;
};

const createFilterTemplate = (filterItems, currentFilterType) => {

  const filterItemsTemplate = filterItems
  .map((filter) => createFilterItemTemplate(filter, currentFilterType))
  .join(``);

  return `<div class="main-navigation__items">
      ${filterItemsTemplate}
    </div>`;
};

export default class MenuFilter extends AbstractView {
  constructor(filters, currentFilterType) {
    super();
    this._filters = filters;
    this._currentFilter = currentFilterType;

    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createFilterTemplate(this._filters, this._currentFilter);
  }

  _filterTypeChangeHandler(evt) {
    if (evt.target.tagName !== `A` || evt.target.classList.contains(`main-navigation__additional`)) {
      return;
    }

    evt.preventDefault();
    this._callback.filterTypeChange(evt.target.dataset.type);
  }

  setFilterTypeChangeHandler(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().addEventListener(`click`, this._filterTypeChangeHandler);
  }
}
