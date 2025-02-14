import styles from "./page.module.css";
export const Task = ({
  body,
  del,
}: {
  body: string;
  del: (task: string) => void;
}) => {
  return (
    <div className={styles.task}>
      <p className={styles.text}>{body}</p>
      <button
        className={styles.button_delete}
        onClick={() => {
          del(body);
        }}
      >
        delete
      </button>
    </div>
  );
};
