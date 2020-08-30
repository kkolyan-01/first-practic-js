/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";
let numberOfFilms;
let personalMovieDB;

createDB();
start();
detectPersonalLevel();
rememberMyFilms();
writeYourGenres();
showMyDB();

// FUNCTIONS

// инициализация DB
function createDB() {
  personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
  };
}

// количество фильмов
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  if (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    alert("Ошибка!");
    start();
  } else {
    personalMovieDB.count = numberOfFilms;
  }
}

// определение уровня кинокритика
function detectPersonalLevel() { // Комментарий по поводу колличества фильмов
  if (numberOfFilms < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    alert("Вы классический зритель");
  } else if (numberOfFilms >= 30) {
    alert("Вы киноман");
  } else {
    alert("Ошибка!");
  }
}

// последние 2 фильмы и оценки
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const lastFilmName = prompt("Один из последних просмотренных фильмов?");
    if (lastFilmName == null || lastFilmName == "" || lastFilmName.length > 50) {
      alert("Ошибка!");
      --i;
      continue;
    }
    const lastFilmRating = prompt("На сколько оцените его?");
    if (lastFilmRating == null || lastFilmRating == "" || lastFilmRating.length > 50) {
      alert("Ошибка!");
      --i;
      continue;
    }
    personalMovieDB.movies[lastFilmName] = lastFilmRating;
  }
}

// показывает DB в консоли
function showMyDB() {
  if (!personalMovieDB.privat) {
    console.log(personalMovieDB);
  }
}

// записывает жанры пользователя
function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
  }
}