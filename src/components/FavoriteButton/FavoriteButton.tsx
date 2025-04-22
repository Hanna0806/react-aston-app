import { StarIcon } from '../../assets/icons/StarIcon';
import { StarIconActive } from '../../assets/icons/StarIconActive';
import styles from './FavoriteButton.module.scss';

 type FavoriteButtonProps = {
    isFavorite: boolean;
    onClick: () => void;
    className?: string; 
  }

export const FavoriteButton = ({ isFavorite, onClick }: FavoriteButtonProps) => {
  return  (
    <button className={styles.starIcon} onClick={onClick}>
       { isFavorite  ? <StarIconActive /> : <StarIcon /> }
    </button>
  )
};
