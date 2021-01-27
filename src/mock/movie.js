// import {getRandomInteger, getRandomElements} from "../utils/common.js";
// import {actors,
//   countries,
//   ageRating,
//   altTitles,
//   titles,
//   directors,
//   writers,
//   ratings,
//   years,
//   durations,
//   genres,
//   posters,
//   sentences,
//   sentencesNum,
//   crewNum,
//   commentsNum,
//   emojis} from "./const.js";
// import dayjs from "dayjs";
// import dayjsRandom from "dayjs-random";

// dayjs.extend(dayjsRandom);

// const {MIN_RATING, MAX_RATING} = ratings;
// const {MIN_YEAR, MAX_YEAR} = years;
// const {MIN_DURATION, MAX_DURATION} = durations;
// const {MIN_COMMENTS, MAX_COMMENTS} = commentsNum;
// const {MIN_SENTENCES, MAX_SENTENCES} = sentencesNum;
// const {MIN_CREW, MAX_CREW} = crewNum;
// const {MIN_AGE_RATING, MAX_AGE_RATING} = ageRating;

// const year1 = dayjs().year(MIN_YEAR);
// const year2 = dayjs().year(MAX_YEAR);

// const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);
// const generateCountry = () => countries[getRandomInteger(0, countries.length - 1)];
// const generateAgeRating = () => getRandomInteger(MIN_AGE_RATING, MAX_AGE_RATING);
// const generateTitle = () => titles[getRandomInteger(0, titles.length - 1)];
// const generateAltTitle = () => altTitles[getRandomInteger(0, altTitles.length - 1)];
// const generateDirector = () => directors[getRandomInteger(0, directors.length - 1)];
// const generateRating = () => getRandomInteger(MIN_RATING, MAX_RATING);
// const generateYear = () => dayjs.between(year1, year2).format(`DD MMMM YYYY`);
// const generateDuration = () => getRandomInteger(MIN_DURATION, MAX_DURATION);
// const generateGenre = () => getRandomElements(genres, getRandomInteger(1, genres.length - 1));
// const generatePoster = () => posters[getRandomInteger(0, posters.length - 1)];
// const commentsAmount = () => getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
// const generateEmojis = () => emojis[getRandomInteger(0, emojis.length - 1)];
// const generateDescription = () => getRandomElements(sentences, getRandomInteger(MIN_SENTENCES, MAX_SENTENCES)).join(` `);
// const generateActors = () => getRandomElements(actors, getRandomInteger(MIN_CREW, MAX_CREW)).join(`, `);
// const generateWriters = () => getRandomElements(writers, getRandomInteger(MIN_CREW, MAX_CREW)).join(`, `);


// const generateWatchedDate = () => dayjs.between(dayjs(), dayjs().year(dayjs().year() - 1));

// export const generateMovie = () => {
//   const numOfComments = commentsAmount();
//   const isWatched = Boolean(getRandomInteger(0, 1));
//   const watchedData = (isWatched) ? generateWatchedDate() : null;

//   return {
//     id: generateId(),
//     actors: generateActors(),
//     country: generateCountry(),
//     ageRating: generateAgeRating(),
//     altTitle: generateAltTitle(),
//     director: generateDirector(),
//     writers: generateWriters(),
//     poster: generatePoster(),
//     title: generateTitle(),
//     rating: generateRating(),
//     year: generateYear(),
//     duration: generateDuration(),
//     genre: generateGenre(),
//     description: generateDescription(),
//     isInWatchList: Boolean(getRandomInteger(0, 1)),
//     isWatched,
//     isFavorite: Boolean(getRandomInteger(0, 1)),
//     watchedData,
//     commentsAmount: numOfComments,
//     comments: generateComments(numOfComments)
//   };
// };

// const generateComments = (numOfComments) => {
//   const generateComment = () => {
//     return {
//       id: generateId(),
//       author: `Tim Macoveev`,
//       date: dayjs.between(`2019`, `2020`).format(`YYYY/M/D HH:mm`),
//       message: generateDescription(),
//       emoji: generateEmojis()
//     };
//   };

//   const comments = new Array(numOfComments).fill().map(generateComment);
//   return comments;
// };
