"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import styles from "../../styles/section1.module.scss";

export default function Section1() {
  const container = useRef<HTMLDivElement | null>(null);
  const stickyMask = useRef<HTMLDivElement | null>(null);
  const initialMaskSize = useRef(0.8);
  const targetMaskSize = useRef(30);
  const easing = 0.15;

  const [easedScrollProgress, setEasedScrollProgress] = useState(0);

  const getScrollProgress = useCallback(() => {
    if (stickyMask.current && container.current) {
      const scrollProgress =
        stickyMask.current.offsetTop /
        (container.current.getBoundingClientRect().height - window.innerHeight);
      const delta = scrollProgress - easedScrollProgress;
      return easedScrollProgress + delta * easing;
    }
    return 0;
  }, [easedScrollProgress]);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      if (stickyMask.current) {
        const maskSizeProgress = targetMaskSize.current * getScrollProgress();
        const newMaskSize = (initialMaskSize.current + maskSizeProgress) * 100;
        stickyMask.current.style.maskSize = `${newMaskSize}%`;
        stickyMask.current.style.maskSize = `${newMaskSize}%`;
      }
      setEasedScrollProgress(getScrollProgress());
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [getScrollProgress]);

  return (
    <main>
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
