/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";


let numberOfFilms;
let personalMovieDB;

// количество фильмов
while (true) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
        break;
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
        break;
    }
    else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
        break;
    }
    else {
        alert("Ошибка!");
    }
}

// последние фильмы и оценки
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

console.log(personalMovieDB);