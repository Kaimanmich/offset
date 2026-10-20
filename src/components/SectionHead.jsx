import { motion, useReducedMotion } from 'framer-motion';
import styles from './SectionHead.module.css';

/**
 * Editorial section header: index + label on the left, a hairline that
 * draws across, and optional aside on the right.
 *   (02)  SERVICES ───────────────────────── Starting prices
 */
export function SectionHead({ index, label, aside, as: Tag = 'h2', id, className = '' }) {
  const reduce = useReducedMotion();
  return (
    <div className={`${styles.head} ${className}`}>
      <span className={`t-mono ${styles.index}`} aria-hidden="true">
        ({index})
      </span>
      <Tag id={id} className={`t-mono ${styles.label}`}>
        {label}
      </Tag>
      <motion.span
        className={styles.rule}
        aria-hidden="true"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      {aside && <span className={`t-mono t-dim ${styles.aside}`}>{aside}</span>}
    </div>
  );
}
