import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { techStack } from "@/data/profile";

export function TechStack() {
  return (
    <section id="stack" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02 — Stack"
          title="Tools that show up across my repos."
          description="Pulled from the languages and platforms actually used in my projects — not a wishlist."
        />

        <div className="flex flex-wrap gap-3">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group relative flex items-center gap-2.5 rounded-full border border-surface-border bg-surface/60 px-5 py-2.5 transition-colors duration-300 hover:border-amber/50"
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-cyan transition-colors duration-300 group-hover:bg-amber"
              />
              <span className="font-mono text-[13px] text-paper">
                {tech.name}
              </span>
              <span className="font-mono text-[11px] text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
