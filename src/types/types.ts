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
  language: string;
  actors: string;
  is_favorite: boolean;
};

export type FavoriteToggleProps = {
  isFavorite: boolean | undefined;
  movie?: MovieDetails;
  userName: string;
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

export type CompactMovieCardProps = {
  movieId: string;
  title: string;
  poster: string;
  year: number;
};
