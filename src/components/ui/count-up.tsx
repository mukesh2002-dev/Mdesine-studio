"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  loopInterval?: number;
};

export default function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
  loopInterval = 4000,
}: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * value));
        if (progress < 1) {
          raf = requestAnimationFrame(tick);
        }
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          setRunning(true);
          run();
          interval = setInterval(() => {
            setDisplay(0);
            run();
          }, loopInterval);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      if (interval) clearInterval(interval);
    };
  }, [value, duration, loopInterval, running]);

  return (
    <div ref={ref}>
      {prefix}
      {display}
      {suffix}
    </div>
  );
}
