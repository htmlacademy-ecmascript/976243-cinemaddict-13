const filmToFilterMap = {
  watchList: (films) => films.filter((film) => film.isInWatchList).length,
  watched: (films) => films.filter((film) => film.isWatched).length,
  favorite: (films) => films.filter((film) => film.isFavorite).length,
};

export const generateFilter = (films) => {
  return Object.entries(filmToFilterMap).map(([filterName, countTasks]) => {
    return {
      name: filterName,
      count: countTasks(films),
    };
  });
};
