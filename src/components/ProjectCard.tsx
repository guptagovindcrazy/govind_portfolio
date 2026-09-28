import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const rY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 });
  const glowX = useTransform(mx, (v) => `${v * 100}%`);
  const glowY = useTransform(my, (v) => `${v * 100}%`);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const accentText = project.accent === "amber" ? "text-amber-soft" : "text-cyan";
  const accentBorder = project.accent === "amber" ? "hover:border-amber/50" : "hover:border-cyan/50";
  const accentDot = project.accent === "amber" ? "bg-amber" : "bg-cyan";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX: reduceMotion ? 0 : rX, rotateY: reduceMotion ? 0 : rY }}
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-surface-border bg-surface/60 transition-colors duration-300",
          accentBorder
        )}
      >
        {/* cursor-follow glow */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([gx, gy]) =>
                `radial-gradient(360px circle at ${gx} ${gy}, ${
                  project.accent === "amber"
                    ? "rgba(255,159,74,0.14)"
                    : "rgba(74,229,209,0.13)"
                }, transparent 70%)`
            ),
          }}
        />

        {/* window chrome */}
        <div className="relative flex items-center gap-2 border-b border-surface-border px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-3 truncate font-mono text-xs text-muted">
            {project.slug}
          </span>
        </div>

        <div className="relative p-7">
          <div className="mb-3 flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl leading-snug text-paper">
              {project.name}
            </h3>
            <span className={cn("mt-1.5 h-2 w-2 flex-none rounded-full", accentDot)} />
          </div>

          <p className="mb-6 text-[15px] leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mb-7 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-surface-border px-3 py-1 font-mono text-[11px] text-muted"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5 font-mono text-[13px]">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className={cn(
                "inline-flex items-center gap-1.5 text-paper transition-colors",
                project.accent === "amber" ? "hover:text-amber-soft" : "hover:text-cyan"
              )}
            >
              <GithubMark className="h-4 w-4" />
              Repository
              <span className={accentText}>↗</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-paper"
              >
                Live demo
                <span>↗</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function GithubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.99 3.24 9.22 7.73 10.72.57.1.78-.25.78-.55v-2.15c-3.14.68-3.8-1.34-3.8-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.29-5.14-1.25-5.14-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.1 1.16a10.7 10.7 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.28-5.16 5.56.4.35.76 1.03.76 2.08v3.08c0 .3.2.66.79.55A10.53 10.53 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}
