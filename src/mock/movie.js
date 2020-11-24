import {getRandomInteger} from "../utile.js";

const generateTitle = () => {
  const titles = [
    `The Dance of Life`,
    `Sagebrush Trail`,
    `The Man with the Golden Arm`,
    `Santa Claus Conquers the Martians`,
    `Popeye the Sailor Meets Sindbad the Sailor`,
    `Made for each other`,
    `The great flamarion`
  ];

  const randomIndex = getRandomInteger(0, titles.length - 1);

  return titles[randomIndex];
};

const generateRating = () => {
  const MIN_RATING = 1;
  const MAX_RATING = 10;

  return getRandomInteger(MIN_RATING, MAX_RATING);
};

const generateYear = () => {
  const MIN_YEAR = 1950;
  const MAX_YEAR = 1999;

  return getRandomInteger(MIN_YEAR, MAX_YEAR);
};

const generateDuration = () => {
  const MAX_HOUR = 3;
  const MAX_MIN = 59;
  const randomHour = getRandomInteger(0, MAX_HOUR);
  const randomMinute = getRandomInteger(0, MAX_MIN);

  return randomHour + `h ` + randomMinute + `m`;
};

const generateGenre = () => {
  const genres = [
    `Musical`,
    `Western`,
    `Drama`,
    `Comedy`,
    `Cartoon`
  ];

  const randomIndex = getRandomInteger(0, genres.length - 1);

  return genres[randomIndex];
};

const generatePoster = () => {
  const relativePath = `./images/posters/`;
  const imgType = `.jpg`;

  const posters = [
    `made-for-each-other`,
    `popeye-meets-sinbad`,
    `sagebrush-trail`,
    `santa-claus-conquers-the-martians`,
    `the-dance-of-life`,
    `the-great-flamarion`,
    `the-man-with-the-golden-arm`
  ];

  const randomIndex = getRandomInteger(0, posters.length - 1);

  return relativePath + posters[randomIndex] + imgType;
};

const generateDescription = () => {
  const MAX_SENTENCES = 5;

  const sentences = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
  ];

  const description = [];

  for (let i = 0; i < MAX_SENTENCES; i++) {
    const sentenceNum = getRandomInteger(0, sentences.length - 1);

    description.push(sentences[sentenceNum]);
  }

  const uniqueSentences = new Set(description);

  return Array.from(uniqueSentences).join(` `);
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
    isFavorite: Boolean(getRandomInteger(0, 1))
  };
};
