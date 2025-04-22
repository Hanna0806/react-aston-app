import { FC, useState } from "react";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";

export type FavoriteToggleProps = {
  isFavorite: boolean | undefined;
  onToggle: (newIsFavorite: boolean) => void;
};

export const FavoriteToggle: FC<FavoriteToggleProps> = ({
  isFavorite,
  onToggle,
}) => {
  const [isFavoriteState, setIsFavoriteState] = useState<boolean>(
    isFavorite ?? false
  );

  const handleFavoriteToggle = () => {
    const newFavoriteState = !isFavoriteState;
    setIsFavoriteState(newFavoriteState);
    onToggle(newFavoriteState);
  };

  return (
    <FavoriteButton
      isFavorite={isFavoriteState}
      onClick={handleFavoriteToggle}
    />
  );
};
