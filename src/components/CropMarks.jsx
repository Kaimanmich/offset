import styles from './CropMarks.module.css';

/** Printer's crop marks at the four corners of the nearest positioned parent. */
export function CropMarks({ inset = 0, className = '' }) {
  return (
    <span className={`${styles.marks} ${className}`} style={{ '--inset': typeof inset === 'number' ? `${inset}px` : inset }} aria-hidden="true">
      <span className={styles.tl} />
      <span className={styles.tr} />
      <span className={styles.bl} />
      <span className={styles.br} />
    </span>
  );
}
