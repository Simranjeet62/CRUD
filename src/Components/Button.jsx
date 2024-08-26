import styles from "./Button.module.css";

export default function Button({ content, fontSize, background, onClick, id }) {
  return (
    <button
      onClick={() => onClick(id)}
      className={styles.btn}
      style={{ fontSize: fontSize, backgroundColor: background }}
    >
      {content}
    </button>
  );
}
