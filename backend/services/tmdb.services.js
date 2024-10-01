import axios from "axios";
import { ENV_VAR } from "../config/envVars.js";

export const fetchFromTmdb = async (url) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + ENV_VAR.TMDB_API_TOKEN,
    },
  };

  const response = await axios.get(url, options);

  if (response.status !== 200) {
    throw new Error("failed to fetch data from TMDB" + response.statusText);
  }

  return response.data;
};
