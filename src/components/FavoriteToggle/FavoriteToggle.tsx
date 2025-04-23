import { FC, useEffect, useState } from "react";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { useDispatch } from "react-redux";
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from "../../redux/slices/favoritesSlice";
import { MovieDetails } from "../../types/types";

export type FavoriteToggleProps = {
  isFavorite: boolean | undefined;
  movie?: MovieDetails;
};

export const FavoriteToggle: FC<FavoriteToggleProps> = ({
  isFavorite,
  movie,
}) => {
  const dispatch = useDispatch();
  const [isFavoriteState, setIsFavoriteState] = useState<boolean>(
    isFavorite ?? false
  );

  useEffect(() => {
    setIsFavoriteState(isFavorite ?? false);
  }, [isFavorite]);

  const handleFavoriteToggle = () => {
    const newFavoriteState = !isFavoriteState;
    setIsFavoriteState(newFavoriteState);

    if (newFavoriteState && movie) {
      dispatch(addFavoriteMovie(movie));
    } else if (movie) {
      dispatch(removeFavoriteMovie({ id: movie.id }));
    }
  };

  return (
    <FavoriteButton
      isFavorite={isFavoriteState}
      onClick={handleFavoriteToggle}
    />
  );
};
