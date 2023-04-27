import express from "express";
import v1WorkoutRouter from "./v1/routes/workoutRoutes.js";

import { swaggerDocs } from "./v1/swagger.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/workouts", v1WorkoutRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
  swaggerDocs(app, PORT);
});
