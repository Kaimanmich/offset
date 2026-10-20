import { motion } from 'framer-motion';
import { RevealText } from './RevealText.jsx';
import styles from './PageHero.module.css';

/**
 * Inner-page opening: a mono meta strip, an oversized headline set line by
 * line, and an intro that sits off to the right of the grid.
 */
export function PageHero({ label, meta = [], lines, intro, size = 'l', children }) {
  return (
    <header className={`shell ${styles.hero} ${styles[size]}`}>
      <motion.div
        className={styles.meta}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <span className="t-mono">
          <span className={styles.bracket}>(</span>
          {label}
          <span className={styles.bracket}>)</span>
        </span>
        {meta.map((m) => (
          <span key={m} className="t-mono t-dim">
            {m}
          </span>
        ))}
      </motion.div>

      <RevealText
        as="h1"
        trigger="mount"
        delay={0.35}
        stagger={0.1}
        className={`t-display t-narrow ${styles.title}`}
        lines={lines}
      />

      {(intro || children) && (
        <motion.div
          className={`grid ${styles.below}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {intro && <p className={`t-lead t-pretty ${styles.intro}`}>{intro}</p>}
          {children}
        </motion.div>
      )}
    </header>
  );
}
