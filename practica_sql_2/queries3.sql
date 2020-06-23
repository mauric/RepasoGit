/*EJERCITACIÓN SQL
Clase 2 SQL -> Desafío 3*/
USE `movies_db`;


/*La contraseña es la primer letra/dígito de cada consigna, siempre en minúscula.*/
/*1) Obtener las películas favoritas de los actores que tengan 2.3 de rating, ordenado
por el id de actors
a) Consigna: Selecciona el título del primer registro
*/
SELECT * from movies INNER JOIN actors on movies.id = actors.favorite_movie_id where actors.rating=2.3 ORDER BY actors.id ;


/*2) Obtener todas las series con sus géneros.
a) Consigna: Selecciona el género del primer título de más de dos palabras..
b) Tip: _ a _ _ _ _ _ _*/
SELECT title, name from series inner join genres on series.genre_id = 

/*3) Obtener todas las películas de Animación.
a) Consigna: Selecciona el último título.
b) Tip: _ _ _ e _ _ _ _ _ _ _ _*/
SELECT movies.title FROM movies 
INNER JOIN genres ON movies.genre_id = genres.id
WHERE genres.name = "Animacion"


/*4) Obtener todos los actores que trabajaron en Parque Jurásico.
a) Consigna: Selecciona el last_name del segundo registro.
b) Tip: _ e _ _*/
select last_name from actors
inner join  movies on actor_movie.actor = movies.id
inner join  movies on actor_movie.movie_id = movies.id
where movies.title = "Parque Jurasico"


/*5) Obtener los títulos de las películas y el nombre del género de aquellas que están
ranqueadas entre 1 y 4.
a) Consigna: Selecciona la primer palabra del que tiene menor rating.
b) Tip: _*/
SELECT movies.title, genres.name, genres.ranking FROM movies
INNER JOIN genres ON genres.id = movies.genre_id
WHERE ranking BETWEEN 1 AND 4
