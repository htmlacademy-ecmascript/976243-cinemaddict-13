import AbstractView from "./abstract.js";

const createFooterStatisticsTemplate = (movies) => {
  return `<p>${movies.length} movies inside</p>`;
};

export default class FooterStats extends AbstractView {
  constructor(movies) {
    super();
    this._movies = movies;
  }

  getTemplate() {
    return createFooterStatisticsTemplate(this._movies);
  }
}
