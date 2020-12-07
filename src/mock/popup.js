import {render} from "../utils/render.js";

import Popup from "../view/popup.js";
import Comment from "../view/popup-comments.js";


const EvtKeys = {
  ESCAPE: `Escape`
};

const body = document.querySelector(`body`);
const siteMainElement = body.querySelector(`.main`);

const onPopupEscPress = function (evt) {
  if (evt.key === EvtKeys.ESCAPE) {
    evt.preventDefault();
    closePopup();
  }
};

const addComments = function (commentsAmount) {
  const commentsWrapper = siteMainElement.querySelector(`.film-details__comments-list`);

  for (let i = 0; i < commentsAmount; i++) {
    render(commentsWrapper, new Comment());
  }
};

export const openPopup = function (film) {
  const {commentsAmount} = film;

  body.classList.add(`hide-overflow`);

  render(siteMainElement, new Popup(film));
  addComments(commentsAmount);

  const closeButton = siteMainElement.querySelector(`.film-details__close-btn`);

  closeButton.addEventListener(`click`, closePopup);
  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  const popup = siteMainElement.querySelector(`.film-details`);

  popup.remove();
  body.classList.remove(`hide-overflow`);
  document.removeEventListener(`keydown`, onPopupEscPress);
};
