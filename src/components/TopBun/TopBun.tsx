import React from "react";

import Seeds from "./Seeds";
import styles from "./TopBun.module.css";

const TopBun = () => {
  return (
    <div className={styles.topBun}>
      {[...Array(50)].map((_, index) => (
        <Seeds
          key={index}
          style={{
            top: `${Math.random() * (95 - 5) + 5}%`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${(Math.random() - 0.5) * 45}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default React.memo(TopBun);
