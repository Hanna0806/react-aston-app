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
