import express from "express";
import cors from "cors";
import superheroesRouter from "./routes/superheroesRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/superheroes", superheroesRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log("Server started on port 3000"));
