

-- CRUD API using MySql databse

-- creation oif table

CREATE TABLE MOVIES(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    body VARCHAR(255) NOT NULL,
    release_year INT NOT NULL,
    genre  CHAR(30) NOT NULL
)

-- create movie
INSERT INTO movies(name,body,release_year,genre)
VALUES('Meg 2','second shark thriller movie',2023,'thriller'),
('Black panther','adventures movie great movie to watch',2018,'adventure')


-- get all movies
SELECT * FROM movies


-- get single-mocie
SELECT * FROM movies WHERE id = 2


-- get movie by genre
SELECT * FROM movies WHERE genre = 'action'


-- get movie by year and genre
SELECT * FROM movies WHERE release_year > 2018 AND genre='action'


-- update movie
UPDATE movies
set genre='action'
WHERE id=2


-- update multipl fields
UPDATE movies
set name='THOR',body='thor best movie of all time'
WHERE id=3

-- delete movie
DELETE FROM movies WHERE id=4