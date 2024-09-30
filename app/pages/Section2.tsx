import React from "react";
import Projects from "@/components/shared/projects";

import styles from "../../styles/section2.module.scss";
import Earth from "@/components/shared/earth";

const Section2 = () => {
  return (
    <div>
      <main className={styles.main}>
        <Earth />
        <Projects />
      </main>
    </div>
  );
};

export default Section2;
