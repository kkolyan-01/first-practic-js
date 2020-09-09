/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  // FUNCTIONS

  // количество фильмов
  start: function() {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    if (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      alert("Ошибка!");
      this.start();
    }
  },
  // определение уровня кинокритика
  detectPersonalLevel: function() { // Комментарий по поводу колличества фильмов
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      alert("Вы киноман");
    } else {
      alert("Ошибка!");
    }
  },
  // последние 2 фильмы и оценки
  rememberMyFilms: function() {
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
      this.movies[lastFilmName] = lastFilmRating;
    }
  },
  // показывает DB в консоли
  showMyDB: function() {
    if (!this.privat) {
      console.log(this);
    }
  },
  // записывает жанры пользователя
  writeYourGenres: function() {
    for (let i = 0; i < 3; i++) {
      let temp = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
      if (temp != "" && temp != null) {
        this.genres[i] = temp;
      } else {
        alert("Ошибка!");
        i--;
      }
    }

    this.genres.forEach(function callback(item, index) {
      alert(`Любимый жанр #${index+1} - это ${item}`);
    });

  },
  // переключатель приватности
  toggleVisibleMyDB: function() {
    this.privat = !this.privat;
  }
};

// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();