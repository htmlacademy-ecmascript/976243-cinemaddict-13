import {getRandomInteger, getRandomElements} from "../utils.js";
import {titles, years, genres, posters,
  sentences, ratings, sentencesNum, durations, emojis} from "./const.js";
import dayjs from "dayjs";

const generateTitle = () => {
  return titles[getRandomInteger(0, titles.length - 1)];
};

const generateRating = () => {
  const {MIN_RATING, MAX_RATING} = ratings;

  return getRandomInteger(MIN_RATING, MAX_RATING);
};

const generateYear = () => {
  const {MIN_YEAR, MAX_YEAR} = years;

  return getRandomInteger(MIN_YEAR, MAX_YEAR);
};

const generateDuration = () => {
  const {MIN_DURATION, MAX_DURATION} = durations;

  return getRandomInteger(MIN_DURATION, MAX_DURATION);
};

const generateGenre = () => {
  const randomIndex = getRandomInteger(1, genres.length - 1);

  return getRandomElements(genres, randomIndex);
};

const generatePoster = () => {

  return posters[getRandomInteger(0, posters.length - 1)];
};

const generateDescription = () => {
  const {MIN_SENTENCES, MAX_SENTENCES} = sentencesNum;
  const randomNum = getRandomInteger(MIN_SENTENCES, MAX_SENTENCES);
  const newSentences = getRandomElements(sentences, randomNum);

  return newSentences.join(` `);
};

export const generateMovie = () => {
  return {
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
    comments: getComments()
  };
};

const generateEmojis = () => {
  return emojis[getRandomInteger(0, emojis.length - 1)];
};

const getComments = function () {
  return {
    author: `Tim Macoveev`,
    date: dayjs().format(`YYYY/M/D h:m`),
    message: generateDescription(),
    emoji: generateEmojis()
  };
};
