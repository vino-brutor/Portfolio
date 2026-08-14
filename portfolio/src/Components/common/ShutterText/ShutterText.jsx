import { AnimatePresence, motion as Motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

import styles from "./ShutterText.module.css";

function ShutterText({ text, variant = "default", className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();
  const characters = text.split("");

  const rootClassName = `${styles.root} ${styles[variant]} ${className}`.trim();

  return (
    <span ref={ref} className={rootClassName} aria-label={text}>
      <AnimatePresence mode="wait" initial={false}>
        <Motion.span
          key={isInView ? "animated" : "static"}
          className={styles.line}
          aria-hidden="true"
        >
          {characters.map((character, index) => (
            <span className={styles.character} key={`${character}-${index}`}>
              <Motion.span
                className={styles.mainCharacter}
                initial={
                  isInView && !shouldReduceMotion
                    ? { opacity: 0, filter: "blur(10px)" }
                    : false
                }
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: index * 0.04 + 0.3, duration: 0.8 }}
              >
                {character === " " ? "\u00A0" : character}
              </Motion.span>

              {isInView && !shouldReduceMotion && (
                <span className={styles.sliceMask} aria-hidden="true">
                  <Motion.span
                    className={`${styles.slice} ${styles.topSlice}`}
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: "100%", opacity: [0, 1, 0] }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.04,
                      ease: "easeInOut",
                    }}
                  >
                    {character === " " ? "\u00A0" : character}
                  </Motion.span>

                  <Motion.span
                    className={`${styles.slice} ${styles.middleSlice}`}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "-100%", opacity: [0, 1, 0] }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.04 + 0.1,
                      ease: "easeInOut",
                    }}
                  >
                    {character === " " ? "\u00A0" : character}
                  </Motion.span>

                  <Motion.span
                    className={`${styles.slice} ${styles.bottomSlice}`}
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: "100%", opacity: [0, 1, 0] }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.04 + 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    {character === " " ? "\u00A0" : character}
                  </Motion.span>
                </span>
              )}
            </span>
          ))}
        </Motion.span>
      </AnimatePresence>
    </span>
  );
}

export default ShutterText;
