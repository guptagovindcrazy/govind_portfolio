import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";
import { MagneticButton } from "./MagneticButton";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-5 font-mono text-sm text-muted"
        >
          <span className="text-amber">// </span>05 — Contact
        </motion.p>

        <AnimatedText
          as="h2"
          text="Building something? Let's talk."
          className="text-balance font-display text-4xl font-medium leading-[1.05] text-paper sm:text-6xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-6 max-w-md text-balance text-muted"
        >
          The fastest way to reach me is GitHub or LinkedIn — open to
          collaborations, freelance work, and interesting problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href={profile.githubUrl} external>
            GitHub ↗
          </MagneticButton>
          <MagneticButton href={profile.linkedinUrl} external variant="ghost">
            LinkedIn ↗
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
