import { FC } from "react";
import styles from "./LoadingState.module.scss";

type LoadingStateProps = {
  isLoading: boolean;
};

export const LoadingState: FC<LoadingStateProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className={styles.loadingState}>
      <div>Загрузка...</div>
    </div>
  );
};
