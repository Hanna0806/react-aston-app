import { API_KEY, API_URL, API_HEADERS } from "../api/config";
import { useState, useEffect } from "react";

export type MovieDetails = {
  id: number;
  title: string;
  release_date: string;
  user_rating: number;
  poster: string;
  plot_overview: string;
  year: number;
}

export const useMovieDetails = (movieId: number | null) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [movie, setMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const tmdbId = `tv-${movieId}`;

        const response = await fetch(
          `${API_URL}/title/${tmdbId}/details/?apiKey=${API_KEY}`,
          {
            headers: API_HEADERS
          }
        );

        if (!response.ok) {
          throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setMovie(data);
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
