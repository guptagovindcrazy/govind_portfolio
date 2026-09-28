import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { profile } from "@/data/profile";
import { usePrefersReducedMotion } from "@/hooks/useReducedMotion";

const bootLines = [
  `> whoami`,
  `${profile.name.toLowerCase().replace(" ", "_")}`,
  `> cat status.txt`,
  `"${profile.bio}"`,
];

export function Hero() {
  const reduceMotion = usePrefersReducedMotion();
  const [bootDone, setBootDone] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion) return;
    const t = setTimeout(() => setBootDone(true), 1500);
    return () => clearTimeout(t);
  }, [reduceMotion]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-28"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.35fr_1fr]">
        <div>
          {/* boot sequence */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: bootDone ? 0 : 1, height: bootDone ? 0 : "auto" }}
            transition={{ duration: 0.5, delay: bootDone ? 0 : 0 }}
            className="mb-6 overflow-hidden font-mono text-sm text-cyan/80"
          >
            {bootLines.map((line, i) => (
              <motion.p
                key={line}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.28 }}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: bootDone ? 1 : 0, y: bootDone ? 0 : 10 }}
            transition={{ duration: 0.5 }}
            className="mb-5 font-mono text-sm text-amber"
          >
            {profile.location} · open to building things
          </motion.p>

          <h1 className="font-display text-[13vw] font-medium leading-[0.92] tracking-tight text-paper sm:text-7xl lg:text-[5.5rem]">
            <RevealLine text="Govind" delay={bootDone ? 0.05 : 1.55} active={bootDone} />
            <RevealLine text="Gupta" delay={bootDone ? 0.16 : 1.66} active={bootDone} accent />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: bootDone ? 1 : 0, y: bootDone ? 0 : 16 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-7 max-w-md text-balance text-lg text-muted"
          >
            I build backend systems and full-stack products — from
            containerized microservices to cloud infrastructure — and ship
            them end to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: bootDone ? 1 : 0, y: bootDone ? 0 : 16 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#work">View projects</MagneticButton>
            <MagneticButton href={profile.githubUrl} external variant="ghost">
              GitHub profile ↗
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: bootDone ? 1 : 0, x: bootDone ? 0 : 24 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="hidden lg:block"
        >
          <TerminalPanel />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: bootDone ? 1 : 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
      >
        <span className="font-mono text-[11px] tracking-widest">SCROLL</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-muted to-transparent"
        />
      </motion.div>
    </section>
  );
}

function RevealLine({
  text,
  delay,
  active,
  accent,
}: {
  text: string;
  delay: number;
  active: boolean;
  accent?: boolean;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: active ? "0%" : "100%" }}
        transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
        className={accent ? "block bg-gradient-to-r from-amber via-amber-soft to-cyan bg-clip-text text-transparent" : "block"}
      >
        {text}
      </motion.span>
    </span>
  );
}

function TerminalPanel() {
  return (
    <div className="rounded-2xl border border-surface-border bg-surface/70 shadow-glow backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-surface-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-xs text-muted">profile.sh</span>
      </div>
      <div className="space-y-2.5 px-5 py-6 font-mono text-[13px] leading-relaxed">
        <p className="text-muted">
          <span className="text-cyan">$</span> gh api users/{profile.username}
        </p>
        <TerminalRow label="name" value={profile.name} />
        <TerminalRow label="login" value={profile.username} />
        <TerminalRow label="location" value={profile.location} />
        <TerminalRow label="public_repos" value={String(profile.repoCount)} />
        <TerminalRow label="bio" value={profile.bio} />
        <p className="pt-2 text-muted">
          <span className="text-cyan">$</span>{" "}
          <span className="text-paper">status</span>{" "}
          <span className="inline-block h-3.5 w-2 translate-y-0.5 animate-caret-blink bg-amber" />
        </p>
      </div>
    </div>
  );
}

function TerminalRow({ label, value }: { label: string; value: string }) {
  return (
    <p>
      <span className="text-amber-soft">{label}</span>
      <span className="text-muted">: </span>
      <span className="text-paper">"{value}"</span>
    </p>
  );
}
