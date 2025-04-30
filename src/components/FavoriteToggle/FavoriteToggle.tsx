import { FC, useEffect, useState } from "react";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { useDispatch } from "react-redux";
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from "../../redux/slices/favoritesSlice";
import { FavoriteToggleProps } from "./../../types/types";

export const FavoriteToggle: FC<FavoriteToggleProps> = ({
  isFavorite,
  movie,
  userName,
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
      dispatch(addFavoriteMovie({ userName, movie }));
    } else if (movie) {
      dispatch(removeFavoriteMovie({ id: movie.id, userName }));
    }
  };

  return (
    <FavoriteButton
      isFavorite={isFavoriteState}
      onClick={handleFavoriteToggle}
    />
  );
};
