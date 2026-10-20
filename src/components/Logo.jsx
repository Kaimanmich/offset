import styles from './Logo.module.css';

/** Wordmark: KAIMAN / MICH, the second half sitting slightly off its baseline. */
export function Logo({ className = '' }) {
  return (
    <span className={`${styles.logo} ${className}`}>
      <span>KAIMAN</span>
      <span className={styles.set}>MICH</span>
    </span>
  );
}
