import styles from "./Bacon.module.css";

interface Props {
  style: React.CSSProperties;
}

const Bacon = (props: Props) => (
  <div className={styles.baconWrapper} style={props.style}>
    <div className={styles.bacon}>
      <div className={styles.baconStrip}></div>
      <div className={styles.baconStrip}></div>
    </div>
  </div>
);

export default Bacon;
