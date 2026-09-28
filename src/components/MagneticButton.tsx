import { useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

type MagneticButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  external?: boolean;
};

/** A button/link that leans gently toward the cursor and springs back on leave. */
export function MagneticButton({
  href,
  onClick,
  children,
  variant = "solid",
  className,
  external,
}: MagneticButtonProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduceMotion = usePrefersReducedMotion();

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: relX * 0.35, y: relY * 0.45 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const styles = cn(
    "group relative inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-[13px] tracking-tight transition-colors duration-300",
    variant === "solid"
      ? "bg-amber text-ink-900 hover:bg-amber-soft"
      : "border border-surface-border text-paper hover:border-amber/60 hover:text-amber-soft",
    className
  );

  const content = (
    <motion.span
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={styles}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={styles}
    >
      {content}
    </button>
  );
}
