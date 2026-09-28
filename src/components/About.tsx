import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { profile } from "@/data/profile";

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Repositories", value: `${profile.repoCount} public` },
  { label: "Focus", value: "Backend & cloud" },
  { label: "Currently", value: "Focusing" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01 — About"
          title="Systems-minded, product-curious."
        />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 text-lg leading-relaxed text-muted"
          >
            <p>
              I'm a developer based in {profile.location} who works across
              the stack but leans toward the backend and infrastructure —
              services, databases, containers, and the cloud they run on.
            </p>
            <p>
              Recent work spans a JWT-secured Java microservices platform
              with Stripe payments, hands-on Azure and Linux systems
              administration from Cloud & DevOps training, and smaller
              front-end builds shipped end to end.
            </p>
            <p>
              My GitHub bio says{" "}
              <span className="font-mono text-amber-soft">"{profile.bio}"</span>{" "}
              — a half-joke that's also fairly accurate: there's usually
              something mid-build.
            </p>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-6 self-start rounded-2xl border border-surface-border bg-surface/50 p-8"
          >
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="font-mono text-xs text-muted">{f.label}</dt>
                <dd className="mt-2 font-display text-xl text-paper">
                  {f.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
