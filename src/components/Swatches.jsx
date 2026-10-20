import styles from './Swatches.module.css';

/** Row of palette chips — a project's colours, shown the way a proof sheet would. */
export function Swatches({ colors, className = '' }) {
  return (
    <ul className={`${styles.swatches} ${className}`} aria-label="Palette">
      {colors.map((c) => (
        <li key={c} style={{ '--c': c }}>
          <span className="sr-only">{c}</span>
        </li>
      ))}
    </ul>
  );
}
