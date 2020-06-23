USE `movies_db`;
/*> Ejercitación
La contraseña es la primer letra/dígito de cada consigna, siempre en minúscula.
1) Obtener todas las películas que su fecha de estreno sea mayor a octubre de 1999
y menor a diciembre del 2004.
a) Consigna: Selecciona del tercer registro la segunda palabra del título.
b) Tip: _e_*/
SELECT * FROM movies WHERE release_date BETWEEN '1999-09-30' AND '2004-12-01';

/*2) Obtener todas las películas que terminan con la letra 'a'.
a) Consigna: Selecciona de las películas la primer palabra del último título.
b) Tip: _ o _ _ _*/
SELECT * FROM movies WHERE title LIKE '%a';

/*3) Obtener el total de los actores que se llamen Jim.
a) Consigna: Selecciona el resultado.
b) Tip: 3*/
SELECT * FROM actors WHERE first_name LIKE '%JIM%'

/*4) Obtener la suma de los premios que ganaron todas las películas 'La Guerra De Las
Galaxias'.
a) Consigna: Selecciona el resultado.
b) Tip: _ 3*/
SELECT SUM AWARDS FROM MOVIES WHERE TITLE LIKE 'La Guerra De Las Galaxias';

/*5) Obtener el nombre de la película favorita de Leonardo Di Caprio.
a) Consigna: Selecciona la tercer palabra del título de la película favorita.
b) Tip: _ e */
SELECT title  from movies INNER JOIN actors on movies.id = actors.favorite_movie_id where actors.last_name="Di Caprio";
