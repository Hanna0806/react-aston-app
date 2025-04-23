export type TNewUser = {
  username: string;
  password: string;
};

export interface UsersState {
  activeUser: string;
  users: TNewUser[];
  error: string;
}

export type MovieDetails = {
  id: string;
  title: string;
  user_rating: number;
  poster: string;
  plot: string;
  year: number;
  is_favorite: boolean;
};

export type FavoriteToggleProps = {
  isFavorite: boolean | undefined;
  movie?: MovieDetails;
};

export type MovieCardProps = {
  movieId?: string;
};

export type FavoriteButtonProps = {
  isFavorite: boolean;
  onClick: () => void;
  className?: string;
};

export type LoadingStateProps = {
  isLoading: boolean;
};

export type NotFoundMovieProps = {
  movie?: MovieDetails | null;
};

export type FavoritesState = {
    favorites: MovieDetails[];
  };
  