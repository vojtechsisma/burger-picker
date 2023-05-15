import styles from "./Seeds.module.css";

interface Props {
  style: React.CSSProperties;
}

const Seeds = (props: Props) => (
  <div className={styles.seed} style={props.style}></div>
);

export default Seeds;
