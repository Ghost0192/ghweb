"use client";

import { useEffect, useRef } from "react";
import styles from "../../styles/section1.module.css";

export default function Section1() {
  const container = useRef<HTMLDivElement>(null);
  const stickyMask = useRef<HTMLDivElement>(null);

  const initialMaskSize = 80;
  const targetMaskSize = 30;
  const easing = 0.15;
  const easedScrollProgressRef = useRef(0);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();

    if (stickyMask.current) {
      const newMaskSize = Math.max(initialMaskSize - maskSizeProgress, 50); // Prevent the mask from becoming too small
      stickyMask.current.style.maskSize = `${newMaskSize}%`;
      stickyMask.current.style.webkitMaskSize = `${newMaskSize}%`;
    }

    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    if (container.current) {
      const rect = container.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const offsetTop = rect.top + scrollTop;
      const scrollProgress =
        (scrollTop - offsetTop) / (rect.height - window.innerHeight);

      const delta = scrollProgress - easedScrollProgressRef.current;
      easedScrollProgressRef.current += delta * easing;

      return Math.min(Math.max(easedScrollProgressRef.current, 0), 1); // Clamp between 0 and 1
    }
    return 0;
  };

  useEffect(() => {
    const animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={styles.main}>
      <div ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop playsInline>
            <source src="/assets/medias/nature.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
