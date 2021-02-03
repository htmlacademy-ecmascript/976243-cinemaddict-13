export const MOVIES_NUM_PER_STEP = 5;
export const MAX_LENGTH_SHORT_DESCRIPTION = 140;
export const SHAKE_ANIMATION_TIMEOUT = 600;

export const EmotionsPics = {
  SMILE: `./images/emoji/smile.png`,
  SLEEPING: `./images/emoji/sleeping.png`,
  PUKE: `./images/emoji/puke.png`,
  ANGRY: `./images/emoji/angry.png`
};

export const SortType = {
  DEFAULT: `default`,
  DATE: `date`,
  RATING: `rating`
};

export const UserAction = {
  UPDATE_FILM: `UPDATE_FILM`,
  ADD_COMMENT: `ADD_COMMENT`,
  DELETE_COMMENT: `DELETE_COMMENT`
};

export const UpdateType = {
  PATCH: `PATCH`,
  MINOR: `MINOR`,
  MAJOR: `MAJOR`,
  INIT: `INIT`
};

export const FilterType = {
  ALL: `all`,
  WATCHLIST: `watchlist`,
  HISTORY: `history`,
  FAVORITES: `favorites`,
  STATS: `stats`
};

export const StatsNav = {
  ALL_TIME: `all-time`,
  TODAY: `today`,
  WEEK: `week`,
  MONTH: `month`,
  YEAR: `year`
};

export const UserRankTitle = {
  NOVICE: `Novice`,
  FAN: `Fan`,
  MOVIE_BUFF: `Movie Buff`
};

export const UserRankBoundaries = {
  NONE: 0,
  MIN_FAN: 11,
  MIN_MOVIE_BUFF: 21
};
