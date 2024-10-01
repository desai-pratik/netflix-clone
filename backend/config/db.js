import mongoose from "mongoose";
import { ENV_VAR } from "./envVars.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(ENV_VAR.MONGO_URI);
  } catch (error) {
    console.log("error" + error.message);
    process.exit(1);
  }
};
