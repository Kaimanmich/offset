import { Link as RouterLink } from 'react-router';
import { Magnetic } from 'ui-kit';
import { Arrow } from './Arrow.jsx';
import styles from './MagneticButton.module.css';

/**
 * Square-cut call to action that leans toward the pointer. Renders a router
 * link for `to`, an anchor for `href`, otherwise a <button>. `cursor` sets
 * the custom cursor label shown while hovering.
 */
export function MagneticButton({
  to,
  href,
  children,
  variant = 'solid',
  size = 'm',
  cursor,
  arrow = 'right',
  strength = 0.22,
  className = '',
  ...rest
}) {
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;
  const inner = (
    <>
      <span className={styles.fill} aria-hidden="true" />
      <span className={styles.label}>{children}</span>
      {arrow && (
        <span className={styles.arrow} aria-hidden="true">
          <Arrow direction={arrow} className={styles.arrowA} />
          <Arrow direction={arrow} className={styles.arrowB} />
        </span>
      )}
    </>
  );

  let control;
  if (to) {
    control = (
      <RouterLink to={to} className={classes} data-cursor-label={cursor} {...rest}>
        {inner}
      </RouterLink>
    );
  } else if (href) {
    control = (
      <a href={href} className={classes} data-cursor-label={cursor} {...rest}>
        {inner}
      </a>
    );
  } else {
    control = (
      <button type="button" className={classes} data-cursor-label={cursor} {...rest}>
        {inner}
      </button>
    );
  }

  return (
    <Magnetic strength={strength} className={styles.wrap}>
      {control}
    </Magnetic>
  );
}
