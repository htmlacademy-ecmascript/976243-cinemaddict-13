import AbsttactView from "./abstract.js";
import {generateMovie} from "../mock/movie.js";

export const createComments = () => {

  const comments = generateMovie().comments;

  return `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="${comments.emoji}" width="55" height="55" alt="emoji-smile">
    </span>
    <div>
      <p class="film-details__comment-text">${comments.message}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${comments.author}</span>
        <span class="film-details__comment-day">${comments.date}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`;
};

export default class Comment extends AbsttactView {
  getTemplate() {
    return createComments();
  }
}
