import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative border-t border-surface-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex items-center gap-6">
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" className="hover:text-amber-soft">
            GitHub
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-amber-soft">
            LinkedIn
          </a>
          <a href="#top" className="hover:text-amber-soft">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
