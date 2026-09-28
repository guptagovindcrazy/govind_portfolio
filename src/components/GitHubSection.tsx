import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { MagneticButton } from "./MagneticButton";
import { profile } from "@/data/profile";

export function GitHubSection() {
  return (
    <section id="github" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04 — GitHub"
          title="The real, live activity."
          description="These panels pull live from the GitHub API — not a snapshot."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-surface-border bg-surface/60 p-6"
          >
            <p className="mb-4 font-mono text-xs text-muted">contribution graph</p>
            <div className="overflow-x-auto">
              <img
                src={`https://ghchart.rshah.org/FF9F4A/${profile.username}`}
                alt={`${profile.name}'s GitHub contribution graph`}
                className="min-w-[640px]"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center gap-5 rounded-2xl border border-surface-border bg-surface/60 p-8 text-center"
          >
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="h-20 w-20 rounded-full border border-surface-border"
            />
            <div>
              <p className="font-display text-xl text-paper">{profile.name}</p>
              <p className="font-mono text-sm text-muted">@{profile.username}</p>
            </div>
            <MagneticButton href={profile.githubUrl} external className="w-full justify-center">
              Follow on GitHub
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          <div className="overflow-hidden rounded-2xl border border-surface-border bg-surface/60 p-6">
            <p className="mb-4 font-mono text-xs text-muted">stats</p>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${profile.username}&show_icons=true&hide_title=true&bg_color=00000000&title_color=FF9F4A&icon_color=4AE5D1&text_color=EDEFF2&border_color=1F2733&hide_border=false`}
              alt="GitHub stats"
              loading="lazy"
              className="w-full"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-surface-border bg-surface/60 p-6">
            <p className="mb-4 font-mono text-xs text-muted">top languages</p>
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.username}&layout=compact&bg_color=00000000&title_color=FF9F4A&text_color=EDEFF2&border_color=1F2733&hide_border=false`}
              alt="Top languages"
              loading="lazy"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
