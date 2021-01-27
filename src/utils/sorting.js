import dayjs from "dayjs";

const getWeight = (a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};

export const sortMovieDate = (filmA, filmB) => getWeight(dayjs(new Date(filmB.year)).format(`YYYY`), dayjs(new Date(filmA.year)).format(`YYYY`));
export const sortMovieRating = (filmA, filmB) => getWeight(filmB.rating, filmA.rating);
