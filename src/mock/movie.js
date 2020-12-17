import {getRandomInteger, getRandomElements} from "../utils/common.js";
import {titles,
  years,
  genres,
  posters,
  sentences,
  ratings,
  sentencesNum,
  commentsNum,
  durations,
  emojis} from "./const.js";
import dayjs from "dayjs";

const {MIN_RATING, MAX_RATING} = ratings;
const {MIN_YEAR, MAX_YEAR} = years;
const {MIN_DURATION, MAX_DURATION} = durations;
const {MIN_COMMENTS, MAX_COMMENTS} = commentsNum;
const {MIN_SENTENCES, MAX_SENTENCES} = sentencesNum;

const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);
const generateTitle = () => titles[getRandomInteger(0, titles.length - 1)];
const generateRating = () => getRandomInteger(MIN_RATING, MAX_RATING);
const generateYear = () => getRandomInteger(MIN_YEAR, MAX_YEAR);
const generateDuration = () => getRandomInteger(MIN_DURATION, MAX_DURATION);
const generateGenre = () => getRandomElements(genres, getRandomInteger(1, genres.length - 1));
const generatePoster = () => posters[getRandomInteger(0, posters.length - 1)];
const commentsAmount = () => getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
const generateEmojis = () => emojis[getRandomInteger(0, emojis.length - 1)];

const generateDescription = () => {
  const newSentences = getRandomElements(sentences, getRandomInteger(MIN_SENTENCES, MAX_SENTENCES));

  return newSentences.join(` `);
};

export const generateMovie = () => {
  return {
    id: generateId(),
    poster: generatePoster(),
    title: generateTitle(),
    rating: generateRating(),
    year: generateYear(),
    duration: generateDuration(),
    genre: generateGenre(),
    description: generateDescription(),
    isInWatchList: Boolean(getRandomInteger(0, 1)),
    isWatched: Boolean(getRandomInteger(0, 1)),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    commentsAmount: commentsAmount(),
    comments: getComments()
  };
};

const getComments = function () {
  return {
    author: `Tim Macoveev`,
    date: dayjs().format(`YYYY/M/D h:m`),
    message: generateDescription(),
    emoji: generateEmojis()
  };
};
