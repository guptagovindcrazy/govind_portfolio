import { useState } from "react";
import { Loader } from "./components/Loader";
import { BackgroundFX } from "./components/BackgroundFX";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { GitHubSection } from "./components/GitHubSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { cn } from "./lib/utils";

export default function App() {
  const [ready, setReady] = useState(false);

  return (
    <div className="grain relative min-h-screen">
      <Loader onDone={() => setReady(true)} />
      <BackgroundFX />
      <CustomCursor />
      <ScrollProgress />
      <Nav />

      <main
        className={cn(
          "relative z-10",
          ready ? "opacity-100" : "opacity-0"
        )}
        style={{ transition: "opacity 0.6s ease" }}
      >
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <GitHubSection />
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
