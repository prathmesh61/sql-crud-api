import express from "express";
import movieRouter from "./routes/movie.route.js";
const port = 3005;

const app = express();
app.use(express.json());
app.use("/api", movieRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
