'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('How many movies did you watch?', '42');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many movies did you watch?', '42');
  }
}
start();

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('What did you watch recently?', 'Sweet November'),
      b = prompt('How can you rate it?', 'from 1 to 10');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMoviesDB.movies[a] = b;
    } else {
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMoviesDB.count < 10) {
    console.log('You have seen not a lot of movies');
  } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log('You have seen quite a lot of movies');
  } else if (personalMoviesDB.count >= 30) {
    console.log('Impressive!');
  } else {
    console.log('Error');
  }
}
detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMoviesDB);
  }
}

showMyDB(personalMoviesDB.private);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMoviesDB.genres[i - 1] = prompt(
      `What is your number ${i} favorite genre?`
    );
  }
}
writeYourGenres();

console.log(personalMoviesDB);
