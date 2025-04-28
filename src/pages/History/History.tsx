import { HistoryList } from "../../components/HistoryList/HistoryList";
import styles from "./History.module.scss";

export default function History() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <HistoryList />
      </div>
    </div>
  );
};