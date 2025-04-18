import { FC } from "react";
import styles from "./ErrorState.module.scss";

type ErrorStateProps = {
  error: string;
};

export const ErrorState: FC<ErrorStateProps> = ({ error }) => {
  return (
    <div className={styles.errorState}>
      <div>Ошибка: {error}</div>
    </div>
  );
};
