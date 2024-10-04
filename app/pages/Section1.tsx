"use client";
import { useRef, useEffect } from "react";
import styles from "../../styles/section1.module.scss";

export default function Section1() {
  const container = useRef<HTMLDivElement | null>(null);
  const stickyMask = useRef<HTMLDivElement | null>(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 30;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (stickyMask.current) {
      const maskSizeProgress = targetMaskSize * getScrollProgress();
      stickyMask.current.style.maskSize =
        (initialMaskSize + maskSizeProgress) * 100 + "%";
      stickyMask.current.style.maskSize =
        (initialMaskSize + maskSizeProgress) * 100 + "%";
    }
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    if (stickyMask.current && container.current) {
      const scrollProgress =
        stickyMask.current.offsetTop /
        (container.current.getBoundingClientRect().height - window.innerHeight);
      const delta = scrollProgress - easedScrollProgress;
      easedScrollProgress += delta * easing;
      return easedScrollProgress;
    }
    return 0;
  };

  return (
    <main className={styles.main}>
      <div ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop>
            <source src="/assets/medias/nature.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  );
}
