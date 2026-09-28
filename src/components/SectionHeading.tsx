import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  index,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-14", align === "center" && "text-center")}>
      <motion.p
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 font-mono text-sm text-muted"
      >
        <span className="text-amber">// </span>
        {index}
      </motion.p>
      <AnimatedText
        as="h2"
        text={title}
        className="text-balance font-display text-4xl font-medium leading-[1.05] text-paper sm:text-5xl"
      />
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            "mt-5 max-w-xl text-balance text-base text-muted",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
