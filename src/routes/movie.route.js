import express from "express";
import {
  getAllMovies,
  getMovieById,
  movieByQuery,
  movieByGenre,
  updateMovie,
  deleteMovie,
  createMovie,
} from "../services/movie.service.js";

const router = express.Router();
router.post("/movie", createMovie);
router.get("/movie", getAllMovies);
router.get("/movies", movieByGenre);
router.get("/filter", movieByQuery);
router.delete("/movie/:id", deleteMovie);
router.get("/movie/:id", getMovieById);
router.put("/movie/:id", updateMovie);
export default router;
