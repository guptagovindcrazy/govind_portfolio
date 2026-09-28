import { useEffect, useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Fixed backdrop shared by the whole page: a faint technical grid,
 * two slow-drifting glow fields, and a cursor-follow spotlight.
 * Everything here is decorative and non-interactive (pointer-events: none).
 */
export function BackgroundFX() {
  const reduceMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  const mvX = useMotionValue(0.5);
  const mvY = useMotionValue(0.4);
  const spotX = useSpring(mvX, { stiffness: 40, damping: 20 });
  const spotY = useSpring(mvY, { stiffness: 40, damping: 20 });
  const spotLeft = useTransform(spotX, (v) => `${v * 100}%`);
  const spotTop = useTransform(spotY, (v) => `${v * 100}%`);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;
    const handle = (e: MouseEvent) => {
      mvX.set(e.clientX / window.innerWidth);
      mvY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mvX, mvY, reduceMotion]);

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink-900">
      {/* technical grid */}
      <motion.div
        style={{ y: reduceMotion ? 0 : gridY }}
        className="absolute inset-0 opacity-[0.14]"
        aria-hidden
      >
        <div
          className="h-[140%] w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(237,239,242,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(237,239,242,0.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </motion.div>

      {/* drifting glow fields */}
      <motion.div
        style={{ y: reduceMotion ? 0 : orb1Y }}
        className="absolute -left-40 top-[-10%] h-[560px] w-[560px] rounded-full bg-amber/20 blur-[140px]"
      />
      <motion.div
        style={{ y: reduceMotion ? 0 : orb2Y }}
        className="absolute -right-32 top-[38%] h-[480px] w-[480px] rounded-full bg-cyan/10 blur-[140px]"
      />

      {/* cursor spotlight */}
      {!reduceMotion && (
        <motion.div
          className="absolute h-[520px] w-[520px] rounded-full opacity-[0.06]"
          style={{
            left: spotLeft,
            top: spotTop,
            translateX: "-50%",
            translateY: "-50%",
            background:
              "radial-gradient(circle, rgba(255,159,74,0.9) 0%, transparent 70%)",
          }}
        />
      )}

      <div className="absolute inset-0 bg-grid-fade" />
    </div>
  );
}
