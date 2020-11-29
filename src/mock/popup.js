import {render} from "../utils.js";
import {getRandomInteger} from "../utils.js";
import {createPopupTemplate} from "../view/popup.js";
import {createComments} from "../view/popup-comments.js";
import {commentsNum} from "./const.js";

const EvtKeys = {
  ESCAPE: `Escape`
};

const siteMainElement = document.querySelector(`.main`);

const onPopupEscPress = function (evt) {
  if (evt.key === EvtKeys.ESCAPE) {
    evt.preventDefault();
    closePopup();
  }
};

const addComments = function () {
  const {MIN_COMMENTS, MAX_COMMENTS} = commentsNum;
  const commentsAmount = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
  const commentsWrapper = siteMainElement.querySelector(`.film-details__comments-list`);

  for (let i = 0; i < commentsAmount; i++) {
    render(commentsWrapper, createComments());
  }
};

export const openPopup = function (evt, films) {
  const randomFilm = films[getRandomInteger(0, films.length - 1)];

  if (evt.target.classList.contains(`film-card__title`)
  || evt.target.classList.contains(`film-card__poster`)
  || evt.target.classList.contains(`film-card__comments`)) {

    render(siteMainElement, createPopupTemplate(randomFilm));
    addComments();
  } else {
    return;
  }

  const closeButton = siteMainElement.querySelector(`.film-details__close-btn`);

  closeButton.addEventListener(`click`, closePopup);
  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  const popup = siteMainElement.querySelector(`.film-details`);

  popup.remove();

  document.removeEventListener(`keydown`, onPopupEscPress);
};
