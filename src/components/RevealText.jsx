import { motion, useReducedMotion } from 'framer-motion';
import styles from './RevealText.module.css';

const EASE = [0.22, 1, 0.36, 1];

/**
 * Line-by-line masked reveal for display type. Unlike ui-kit's string-only
 * TextReveal, each line can be any node, or `{ node, className }` so single
 * lines can be offset / restyled within one heading.
 */
export function RevealText({
  as = 'div',
  lines,
  className,
  delay = 0,
  stagger = 0.09,
  duration = 1.05,
  trigger = 'scroll',
  amount = 0.4,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  const play =
    trigger === 'mount' ? { animate: 'shown' } : { whileInView: 'shown', viewport: { once: true, amount } };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      {...play}
      variants={{ hidden: {}, shown: { transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: delay } } }}
      {...rest}
    >
      {lines.map((line, i) => {
        const isObj = line && typeof line === 'object' && 'node' in line;
        const node = isObj ? line.node : line;
        return (
          <span key={i} className={`${styles.mask} ${isObj && line.className ? line.className : ''}`}>
            <motion.span
              className={styles.line}
              variants={{
                hidden: reduce ? { opacity: 0 } : { y: '108%' },
                shown: { y: '0%', opacity: 1, transition: { duration: reduce ? 0.3 : duration, ease: EASE } },
              }}
            >
              {node}
            </motion.span>
          </span>
        );
      })}
    </MotionTag>
  );
}
