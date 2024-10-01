import dotenv from "dotenv";

dotenv.config();


export const ENV_VAR = {
    MONGO_URI : process.env.MONGO_URL,
    PORT : process.env.PORT || 5000,
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    TMDB_API_TOKEN: process.env.TMDB_API_TOKEN
}