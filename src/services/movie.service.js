import { db } from "../database/db.js";

export const createMovie = async (req, res) => {
  const { name, body, release_year, genre } = req.body;
  if (
    name === null ||
    body === null ||
    release_year === null ||
    genre === null
  ) {
    return res.status(500).json("Please provide all fields");
  }
  try {
    const values = `'${name}','${body}','${release_year}','${genre}'`;
    const query = `INSERT INTO movies (name,body,release_year,genre) VALUES (${values})`;
    const [results] = await db.query(query);
    res.status(200).json(results);
  } catch (error) {
    console.log("error on create movie");
    return res.status(500).json(error);
  }
};
export async function getAllMovies(req, res) {
  try {
    const [results, fields] = await db.query(`SELECT * FROM movies`);
    res.status(200).json(results);
  } catch (error) {
    console.log("error on fetch all movies");
    return res.status(500).json(error);
  }
}

export const getMovieById = async (req, res) => {
  const id = req.params.id;
  try {
    const query = `SELECT * FROM movies WHERE id=${id}`;
    const [results] = await db.query(query);
    res.status(200).json(results);
  } catch (error) {
    console.log("error on fetch movie by id");
    return res.status(500).json(error);
  }
};

export const movieByGenre = async (req, res) => {
  const queryParam = req.query.genre;
  try {
    const query = `SELECT * FROM movies WHERE genre = '${queryParam}'`;
    const [results] = await db.query(query);
    res.status(200).json(results);
  } catch (error) {
    console.log("error on fetch movie by genre");
    return res.status(500).json(error);
  }
};

export const movieByQuery = async (req, res) => {
  const year = req.query.year;
  const genre = req.query.genre;

  try {
    const query = `SELECT * FROM movies WHERE release_year >= ${year} OR genre='${genre}'`;
    const [results] = await db.query(query);
    res.status(200).json(results);
  } catch (error) {
    console.log("error on fetch movie by queryparams");
    return res.status(500).json(error);
  }
};

export const updateMovie = async (req, res) => {
  const { name, body, release_year, genre } = req.body;
  const id = req.params.id;

  try {
    let setClauses = []; // Array to hold SET clauses

    // Add SET clauses for each field if it exists in the request body
    if (name) setClauses.push(`name='${name}'`);
    if (body) setClauses.push(`body='${body}'`);
    if (release_year) setClauses.push(`release_year=${release_year}`);
    if (genre) setClauses.push(`genre='${genre}'`);

    // Constructing the SET part of the SQL query
    const setClause = setClauses.join(",");

    const query = `
    UPDATE movies
    SET ${setClause}
    WHERE id=${id}
    `;
    const [results] = await db.query(query);
    res.status(200).json(results);
  } catch (error) {
    console.log("error on update movie");
    return res.status(500).json(error);
  }
};

export const deleteMovie = async (req, res) => {
  const id = req.params.id;
  try {
    const query = `DELETE FROM movies WHERE id=${id}`;
    const [results] = await db.query(query);
    res.status(200).json(results);
  } catch (error) {
    console.log("error on delete movie");
    return res.status(500).json(error);
  }
};
