import React from "react";
import Projects from "@/components/shared/projects";
import dynamic from "next/dynamic";
import styles from "../../styles/section2.module.scss";

const Earth = dynamic(() => import("@/components/shared/earth"), {
  ssr: false,
  loading: () => <img src="/assets/earth/placeholder.png"></img>,
});

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
