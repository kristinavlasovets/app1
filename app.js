const numberOfFilms = +prompt('How many movies did you watch?', '42');

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const a = prompt('What did you watch recently?', 'Sweet November'),
  b = prompt('How can you rate it?', 'from 1 to 10'),
  c = prompt('What did you watch recently?', 'Sweet November'),
  d = prompt('How can you rate it?', 'from 1 to 10');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);
