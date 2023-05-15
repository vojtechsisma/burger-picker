import React from "react";

import styles from "./Tomato.module.css";

interface Props {
  style: React.CSSProperties;
  tomatoStyle: React.CSSProperties;
}

const Tomato = (props: Props) => (
  <div className={styles.tomatoWrapper} style={props.style}>
    <div className={styles.tomato} style={props.tomatoStyle}>
      <div className={styles.innerTomato}>
        <div className={styles.slicesContainer}>
          <div className={styles.slice1}></div>
          <div className={styles.slice2}></div>
          <div className={styles.slice3}></div>
          <div className={styles.slice4}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Tomato;
