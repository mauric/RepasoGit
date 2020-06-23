/*SELECT
1) Mostrar todos los registros de la tabla de movies.
2) Mostrar el nombre, apellido y rating de todos los actores.*/

/* DO IT YOURSELF */

/*> WHERE, ORDER BY
3) Mostrar el nombre y apellido de los actores cuyo rating sea mayor a 7.5.
4) Mostrar el título de las películas, el rating y los premios de las películas con
un rating mayor a 7.5 y con más de dos premios.
5) Mostrar el título de las películas y el rating ordenadas por rating en forma
ascendente.*/
SELECT 
    actors.first_name, actors.last_name
FROM
    actors
WHERE
    rating > 7.5; /*beauty*/
    
/*> LIMIT, OFFSET
6) Mostrar los títulos de las primeras tres películas en la base de datos.
7) Mostrar el top 5 de las películas con mayor rating.
8) Mostrar las top 5 a 10 de las películas con mayor rating.*/

select movies.title, movies.rating, movies.awards from movies
inner join actors on actor_movie.movie_id = movies.id
inner join movies on 
where rating > 7.5;



/*> BETWEEN, LIKE
9) Mostrar el título y rating de todas las películas cuyo título sea de Toy Story.
10) Mostrar el título de las películas que salieron entre el 2004 y 2008.
> COMPLEJAS E INTEGRADORAS
11) Traer el título de las películas con el rating con más de 3 premios entre el año
2000 al 2009 ordenadas por rating.
12) Traer el top 5 a partir del registro 10 de la consulta anterior.*/