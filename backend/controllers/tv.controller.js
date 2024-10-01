import { fetchFromTmdb } from "../services/tmdb.services.js";

export async function getTrendingTv(req, res) {
  try {
    const data = await fetchFromTmdb(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US"
    );
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results?.length)];
    res.json({ success: true, content: randomMovie });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function getTvTrailers(req, res) {
  try {
    const { id } = req.params;
    const data = await fetchFromTmdb(
      `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`
    );
    res.json({ success: true, trailers: data.results });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function getTvDetails(req, res) {
  try {
    const { id } = req.params;
    const data = await fetchFromTmdb(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`
    );
    res.status(200).json({ success: true, content: data });
  } catch (error) {
    if (error.message.inclures("404")) {
      return res.status(404).send(null);
    }
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function getTvSimilar(req, res) {
  try {
    const { id } = req.params;
    const data = await fetchFromTmdb(
      `https://api.themoviedb.org/3/tv/${id}/similar`
    );
    res.status(200).json({ success: true, similar: data.results });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function getTvCategory(req, res) {
  try {
    const { category } = req.params;
    const data = await fetchFromTmdb(
      `https://api.themoviedb.org/3/tv/${category}`
    );
    res.status(200).json({ success: true, content: data.results });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
