USE `movies_db`;
/*1)Obtener el nombre género y el promedio de duración de todas las películas
agrupadas por el mismo..
a) Consigna: Selecciona el nombre de género con el promedio más bajo.
b) Tip: _ _ _ a_ _ _ _ _ _*/
SELECT movies.title, AVG(movies.length), name FROM movies
Inner join gengres on genres. ide = movies.genre_id
GROUP BY genres.name;




/*2) Obtener todos los actores junto con la cuenta de las películas en las que actuaron.
a) Consigna: Selecciona el first_name de la actriz que actuó en más películas.
b) Tip: _ _ _ a*/
SELECT actors.first_name, actors.last_name, COUNT(actor_movie.id) AS Total_Pelis FROM actors
inner join actor_movie on actor_movie.actor_id = actors.id
group by actors.id;






/*3) Obtener la cuenta de películas agrupadas por su género.
a) Consigna: Selecciona el mayor número de películas de un género.
b) Tip: _*/
select genres.name, count(movies.id) AS total_pelis from movies
inner join genres on movies.genre_id = genres.id
group by genres.name







/*4) Obtener el nombre de los géneros que tengan más de 3 películas agrupadas por
el género.
a) Consigna: Selecciona la cantidad del segundo registro que sale en la
consulta.
b) Tip: _*/

SELECT movies.title, AVG(movies.length), name FROM movies 
INNER JOIN genres ON genres.id = movies.genre_id 
GROUP BY genres.name
SELECT actors.first_name, actors.last_name, COUNT(actor_movie.id) AS Total_Pelis FROM actors 
INNER JOIN actor_movie ON actor_movie.actor_id = actors.id 
GROUP BY actors.id
SELECT genres.name, COUNT(movies.id) AS Total_Pelis FROM movies 
INNER JOIN genres ON movies.genre_id = genres.id 
GROUP BY genres.name




/*5) Obtener los géneros que tengan películas con rating promedio mayor a 3
agrupados por su género.
a) Consigna: Elige del valor del rating resultante el número de la parte entera
del primer registro.
b) Tip: _*/

SELECT movies.title, AVG(movies.length), name FROM movies 
INNER JOIN genres ON genres.id = movies.genre_id 
GROUP BY genres.name
SELECT actors.first_name, actors.last_name, COUNT(actor_movie.id) AS Total_Pelis FROM actors 
INNER JOIN actor_movie ON actor_movie.actor_id = actors.id 
GROUP BY actors.id
SELECT genres.name, COUNT(movies.id) AS Total_Pelis FROM movies 
INNER JOIN genres ON movies.genre_id = genres.id 
GROUP BY genres.name
