import { API_KEY } from "../api/config";
import { useState, useEffect } from "react";

export interface MovieDetails {
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
        console.log("Пытаемся получить данные для фильма:", movieId);

        const response = await fetch(
          `https://api.watchmode.com/v1/title/${tmdbId}/details/?apiKey=${API_KEY}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        console.log("Статус ответа:", response.status);

        if (!response.ok) {
          throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Полученные данные:", data);
        setMovie(data);
      } catch (err) {
        console.error("Ошибка при получении данных:", err);
        setError(err instanceof Error ? err.message : "Произошла ошибка");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return { loading, error, movie };
};
