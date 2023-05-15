import React from "react";

import styles from "./Meat.module.css";

interface Props {
  style: React.CSSProperties;
  tomatoStyle: React.CSSProperties;
}

const Meat = (props: Props) => (
  <div className={styles.meatWrapper} style={props.style}>
    <div className={styles.meat} style={props.tomatoStyle}>
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className={styles.slice}
          style={{
            top: `${Math.random() * (95 - 5) + 5}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random()}rem`,
            height: `${Math.random()}rem`,
            transform: `rotate(${(Math.random() - 0.5) * 45}deg)`,
          }}
        ></div>
      ))}
    </div>
  </div>
);

export default Meat;
