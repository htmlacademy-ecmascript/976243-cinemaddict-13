import {render} from "../utile.js";
import {createPopupTemplate} from "../view/popup.js";

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

export const openPopup = function (evt, film) {
  if (evt.target.classList.contains(`film-card__title`)
  || evt.target.classList.contains(`film-card__poster`)
  || evt.target.classList.contains(`film-card__comments`)) {

    render(siteMainElement, createPopupTemplate(film));
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
