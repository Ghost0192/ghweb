import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";

export default function AnimatedLogo() {
  return (
    <div className={styles.logoContainer}>
      <Image
        src="/assets/images/logo.gif"
        alt="Grupo Hijuelas Logo"
        height={150}
        width={150}
        className={styles.logo}
      />
    </div>
  );
}
