import Observer from "../utils/observer.js";

export default class Movies extends Observer {
  constructor() {
    super();
    this._movies = [];
    this._comments = [];
  }

  setMovies(updateType, movies) {
    this._movies = movies.slice();

    this._notify(updateType);
  }

  getMovies() {
    return this._movies;
  }

  updateMovie(updateType, update) {
    const index = this._movies.findIndex((movie) => movie.id === update.id);

    if (index === -1) {
      throw new Error(`Can't update unexisting movie`);
    }

    this._movies = [
      ...this._movies.slice(0, index),
      update,
      ...this._movies.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  static adaptToClient(movie) {
    const adaptedMovie = Object.assign(
        {},
        movie,
        {
          title: movie.film_info.title,
          altTitle: movie.film_info.alternative_title,
          poster: movie.film_info.poster,
          rating: movie.film_info.total_rating,
          director: movie.film_info.director,
          writers: movie.film_info.writers,
          actors: movie.film_info.actors,
          year: movie.film_info.release.date,
          duration: movie.film_info.runtime,
          genre: movie.film_info.genre,
          description: movie.film_info.description,
          country: movie.film_info.release.release_country,
          ageRating: movie.film_info.age_rating,
          isInWatchList: movie.user_details.watchlist,
          isWatched: movie.user_details.already_watched,
          isFavorite: movie.user_details.favorite,
          watchedData: movie.user_details.watching_date,
          commentsAmount: movie.comments.length,
        }
    );

    delete adaptedMovie.film_info;
    delete adaptedMovie.user_details;

    return adaptedMovie;
  }

  static adaptToServer(movie) {
    const adaptedMovie = Object.assign(
        {},
        movie,
        {
          "film_info": {
            "title": movie.title,
            "alternative_title": movie.altTitle,
            "poster": movie.poster,
            "total_rating": movie.rating,
            "director": movie.director,
            "writers": movie.writers,
            "actors": movie.actors,
            "runtime": movie.duration,
            "age_rating": movie.ageRating,
            "genre": movie.genre,
            "description": movie.description,
            "release": {
              "date": movie.year,
              "release_country": movie.country
            }
          }
        }
    );

    delete adaptedMovie.name;
    delete adaptedMovie.originalName;
    delete adaptedMovie.poster;
    delete adaptedMovie.rating;
    delete adaptedMovie.director;
    delete adaptedMovie.writers;
    delete adaptedMovie.actors;
    delete adaptedMovie.filmDate;
    delete adaptedMovie.filmDuration;
    delete adaptedMovie.genres;
    delete adaptedMovie.description;
    delete adaptedMovie.country;
    delete adaptedMovie.age;
    delete adaptedMovie.isWatchlist;
    delete adaptedMovie.isWatched;
    delete adaptedMovie.watchedData;
    delete adaptedMovie.isFavorite;

    return adaptedMovie;
  }
}
