const getWeight = (a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};

export const sortMovieDate = (filmA, filmB) => getWeight(filmA.year.slice(-4), filmB.year.slice(-4));
export const sortMovieRating = (filmA, filmB) => getWeight(filmA.rating, filmB.rating);
