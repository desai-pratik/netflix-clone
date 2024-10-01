import express from "express";
import authRoutes from "./router/auth.js";
import movieRoutes from "./router/movies.js";
import tvRoutes from "./router/tv.js";
import searchRoutes from "./router/search.js";
import { ENV_VAR } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";
import { protectRoute } from "./middleware/protectRoute.js";

const app = express();
const port = ENV_VAR.PORT;

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);


app.listen(port, () => {
  console.log("server start in " + port);
  connectDB();
});
