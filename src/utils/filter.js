import {FilterType} from "../mock/const";

export const filter = {
  [FilterType.ALL]: (movies) => movies.filter((movie) => movie.id),
  [FilterType.WATCHLIST]: (movies) => movies.filter((movie) => movie.isInWatchList),
  [FilterType.HISTORY]: (movies) => movies.filter((movie) => movie.isWatched),
  [FilterType.FAVORITES]: (movies) => movies.filter((movie) => movie.isFavorite),
};
