import Smartview from "./smart.js";
import dayjs from "dayjs";
import {EmotionsPics, SHAKE_ANIMATION_TIMEOUT} from "../const.js";


const createCommentTemplate = (comment, isDeleting) => {
  return `<li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="${EmotionsPics[comment.emotion]}" width="55" height="55" alt="emoji-${comment.emotion}">
  </span>
  <div>
    <p class="film-details__comment-text">${comment.text}</p>
    <p class="film-details__comment-info">
      <span class="film-details__comment-author">${comment.author}</span>
      <span class="film-details__comment-day">${dayjs(new Date(comment.date)).format(`DD MMMM YYYY HH:mm`)}</span>
      <button class="film-details__comment-delete" data-comment-id="${comment.id}" ${isDeleting ? `disabled` : ``}>${isDeleting ? `Deleting...` : `Delete`}</button>
      </p>
  </div>
</li>`;
};


const createCommentsTemplate = (comments, deletingCommentId) => {
  const commentListTemplate = comments
    .slice()
    .map((comment) => {
      if (deletingCommentId === comment.id) {
        return createCommentTemplate(comment, true);
      } else {
        return createCommentTemplate(comment, false);
      }
    })
    .join(`\n`);
  return commentListTemplate;
};

const createPopupTemplate = (movie, serverComments, localComment) => {
  const {poster,
    actors,
    country,
    ageRating,
    altTitle,
    director,
    writers,
    title,
    rating,
    year,
    duration,
    genre,
    description,
    isInWatchList,
    isWatched,
    isFavorite,
    comments,
    deletingCommentId
  } = movie;

  const {
    text,
    emotion
  } = localComment;

  const isActive = (control) => {
    const activeClassName = control
      ? `checked`
      : ``;

    return activeClassName;
  };

  const genreTitle = (genre.length === 1) ? `Genre` : `Genres`;

  const userEmotion = (emotion) ? `<img src=${`./images/emoji/` + emotion + `.png`} width="55" height="55" alt="emoji-${emotion}">` : ``;

  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="${poster}" alt="">
          <p class="film-details__age">${ageRating}+</p>
        </div>
        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">${altTitle}</p>
            </div>
            <div class="film-details__rating">
              <p class="film-details__total-rating">${rating}</p>
            </div>
          </div>
          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${writers}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${actors}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${dayjs(new Date(year)).format(`DD MMMM YYYY`)}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${Math.trunc(duration / 60)}h ${duration % 60}m</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">${genreTitle}</td>
              <td class="film-details__cell">
                <span class="film-details__genre">${genre.join(`, `)}</span>
            </tr>
          </table>
          <p class="film-details__film-description">${description}</p>
        </div>
      </div>
      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${isActive(isInWatchList)}>
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched"${isActive(isWatched)}>
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${isActive(isFavorite)}>
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
    </div>
    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>
        <ul class="film-details__comments-list">
          ${createCommentsTemplate(serverComments, deletingCommentId)}
        </ul>
        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label">
          ${userEmotion}
          </div>
          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">${text}</textarea>
          </label>
          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
            <label class="film-details__emoji-label" for="emoji-puke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </div>
      </section>
    </div>
  </form>
</section>`;
};

export default class Popup extends Smartview {
  constructor(film, serverComments) {
    super();
    this._film = film;
    this._serverComments = serverComments;


    this._localComment = {
      text: ``,
      emotion: ``
    };

    this._watchlistClickHandler = this._watchlistClickHandler.bind(this);
    this._watchedClickHandler = this._watchedClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);

    this._emojiClickHandler = this._emojiClickHandler.bind(this);
    this._commentInputHandler = this._commentInputHandler.bind(this);

    this._deleteButtonClickHandler = this._deleteButtonClickHandler.bind(this);
    this._closeClickHandler = this._closeClickHandler.bind(this);
  }

  getTemplate() {
    return createPopupTemplate(this._film, this._serverComments, this._localComment);
  }

  _closeClickHandler(evt) {
    evt.preventDefault();
    this._callback.closeClick();
  }

  setCloseClickHandler(callback) {
    this._callback.closeClick = callback;
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, this._closeClickHandler);
  }

  _emojiClickHandler(evt) {
    evt.preventDefault();
    this._localComment = Object.assign(
        {},
        this._localComment,
        {
          emotion: evt.target.value,
        }
    );

    this.updateElement();
  }

  _commentInputHandler(evt) {
    evt.preventDefault();
    this._localComment = Object.assign(
        {},
        this._localComment,
        {
          text: evt.target.value,
        }
    );
  }

  getNewComment() {
    return this._localComment;
  }

  _deleteButtonClickHandler(evt) {
    evt.preventDefault();
    this._callback.deleteButtonClick(evt.target.dataset.commentId);
  }

  _setHandlers() {
    const emojies = this.getElement().querySelectorAll(`.film-details__emoji-item`);
    for (const emoji of emojies) {
      emoji.addEventListener(`click`, this._emojiClickHandler);
    }
    this.getElement().querySelector(`.film-details__comment-input`).addEventListener(`input`, this._commentInputHandler);
  }

  setDeleteButtonClickHandler(callback) {
    this._callback.deleteButtonClick = callback;
    const commentsDeleteButtons = this.getElement().querySelectorAll(`.film-details__comment-delete`);
    commentsDeleteButtons.forEach((comment) => comment.addEventListener(`click`, this._deleteButtonClickHandler));
  }

  shake(callback) {
    this.getElement().style.animation = `shake ${SHAKE_ANIMATION_TIMEOUT / 1000}s`;

    setTimeout(() => {
      this.getElement().style.animation = ``;
      callback();
    }, SHAKE_ANIMATION_TIMEOUT);
  }

  _watchlistClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchlistClick();
  }

  _watchedClickHandler(evt) {
    evt.preventDefault();
    this._callback.watchedClick();
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setWatchlistClickHandler(callback) {
    this._callback.watchlistClick = callback;
    this.getElement().querySelector(`.film-details__control-label--watchlist`).addEventListener(`click`, this._watchlistClickHandler);
  }

  setWatchedClickHandler(callback) {
    this._callback.watchedClick = callback;
    this.getElement().querySelector(`.film-details__control-label--watched`).addEventListener(`click`, this._watchedClickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.film-details__control-label--favorite`).addEventListener(`click`, this._favoriteClickHandler);
  }

  restoreHandlers() {
    this._setHandlers();
    this.setCloseClickHandler(this._callback.closeClick);
    this.setWatchlistClickHandler(this._callback.watchlistClick);
    this.setWatchedClickHandler(this._callback.watchedClick);
    this.setFavoriteClickHandler(this._callback.favoriteClick);
    this.setDeleteButtonClickHandler(this._callback.deleteButtonClick);
  }
}
