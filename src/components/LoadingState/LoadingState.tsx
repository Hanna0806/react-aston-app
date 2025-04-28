import { FC } from "react";
import styles from "./LoadingState.module.scss";
import { LoadingStateProps } from "../../types/types";

export const LoadingState: FC<LoadingStateProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className={styles.loadingState}>
      <div>Загрузка...</div>
    </div>
  );
};
