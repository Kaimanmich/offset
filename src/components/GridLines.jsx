import { motion, useReducedMotion } from 'framer-motion';
import styles from './GridLines.module.css';

/** The 12-column grid made visible: hairlines that draw down when the section enters. */
export function GridLines({ className = '' }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`shell grid ${styles.lines} ${className}`}
      aria-hidden="true"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, shown: { transition: { staggerChildren: reduce ? 0 : 0.05 } } }}
    >
      {Array.from({ length: 12 }, (_, i) => (
        <motion.span
          key={i}
          className={styles.col}
          variants={{
            hidden: reduce ? { opacity: 0 } : { scaleY: 0 },
            shown: { scaleY: 1, opacity: 1, transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] } },
          }}
        />
      ))}
    </motion.div>
  );
}
