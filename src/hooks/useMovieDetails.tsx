import { API_KEY, API_URL } from "../api/config";
import { useState, useEffect } from "react";
import { MovieDetails } from "../types/types";

export const useMovieDetails = (movieId: string | null) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [movie, setMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    console.log("Fetching movie details for ID:", movieId);
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `${API_URL}/?apikey=${API_KEY}&i=${movieId}`
        );

        if (!response.ok) {
          throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);

        const movieDetails: MovieDetails = {
          id: data.imdbID,
          title: data.Title,
          user_rating: parseFloat(data.imdbRating) || 0,
          poster: data.Poster,
          plot: data.Plot || "",
          year: parseInt(data.Year, 10) || 0,
          language: data.Language,
          actors: data.Actors,
          is_favorite: data.is_favorite ?? false,
        };

        setMovie(movieDetails);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Произошла ошибка");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return { loading, error, movie };
};
