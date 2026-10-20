import { useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { Arrow } from '../../components/Arrow.jsx';
import { MagneticButton } from '../../components/MagneticButton.jsx';
import { MoireField } from '../../components/MoireField.jsx';
import { RevealText } from '../../components/RevealText.jsx';
import { STUDIO } from '../../data/content.js';
import styles from './Hero.module.css';

const EASE = [0.22, 1, 0.36, 1];
const GHOST = { stiffness: 50, damping: 16, mass: 0.8 };

function Letters({ text, from = 0, animateIn }) {
  return text.split('').map((ch, i) => (
    <span key={i} className={styles.mask}>
      <motion.span
        className={styles.letter}
        initial={animateIn ? { y: '104%' } : false}
        animate={{ y: '0%' }}
        transition={{ duration: 1.25, delay: 0.15 + (from + i) * 0.065, ease: EASE }}
      >
        {ch}
      </motion.span>
    </span>
  ));
}

export function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const wordX = useTransform(scrollYProgress, [0, 1], ['0vw', '-16vw']);
  const fieldY = useTransform(scrollYProgress, [0, 1], ['0%', '32%']);
  const fade = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  // The outlined "plate" drifts off-register with the pointer.
  const gx = useMotionValue(0);
  const gy = useMotionValue(0);
  const ghostX = useSpring(gx, GHOST);
  const ghostY = useSpring(gy, GHOST);

  useEffect(() => {
    if (reduce) return undefined;
    const onMove = (e) => {
      gx.set(((e.clientX / window.innerWidth) * 2 - 1) * 22);
      gy.set(((e.clientY / window.innerHeight) * 2 - 1) * 14);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [gx, gy, reduce]);

  const animateIn = !reduce;

  return (
    <section ref={ref} className={styles.hero} aria-labelledby="hero-title">
      <motion.div
        className={styles.field}
        style={reduce ? undefined : { y: fieldY }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.35, ease: EASE }}
      >
        <MoireField />
      </motion.div>

      <motion.div
        className={`shell grid ${styles.meta}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <span className="t-mono">Kaimanmich webdesign</span>
        <span className={`t-mono t-dim ${styles.coords}`}>{STUDIO.coordinates}</span>
        <span className={`t-mono t-dim ${styles.disc}`}>Websites &amp; digitale ervaringen</span>
        <span className={`t-mono ${styles.scroll}`}>
          Scroll <span className={styles.scrollLine} aria-hidden="true" />
        </span>
      </motion.div>

      <motion.div className={`shell grid ${styles.middle}`} style={reduce ? undefined : { opacity: fade }}>
        <RevealText
          as="p"
          trigger="mount"
          delay={0.75}
          className={styles.headline}
          lines={['Websites die', { node: 'niet in de massa', className: styles.indent }, 'verdwijnen.']}
        />
        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.25, ease: EASE }}
        >
          <MagneticButton to="/contact" variant="line" cursor="Contact">
            Start een project
          </MagneticButton>
          <RouterLink to="/diensten" className={`t-mono ${styles.textLink}`}>
            <span className="u-link">Diensten &amp; prijzen</span> <Arrow />
          </RouterLink>
        </motion.div>
      </motion.div>

      <motion.div className={styles.wordWrap} style={reduce ? undefined : { x: wordX }}>
        <h1 id="hero-title" className={styles.word}>
          <span className="sr-only">Kaimanmich webdesign — uw expert voor online zichtbaarheid</span>
          <motion.span
            className={styles.ghost}
            aria-hidden="true"
            style={{ x: ghostX, y: ghostY }}
            initial={animateIn ? { opacity: 0 } : false}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.1 }}
          >
            <span className={styles.half}>KAIMAN</span>
            <span className={`${styles.half} ${styles.second}`}>MICH</span>
          </motion.span>
          <span className={styles.solid} aria-hidden="true">
            <span className={styles.half}>
              <Letters text="KAIMAN" animateIn={animateIn} />
            </span>
            <span className={`${styles.half} ${styles.second}`}>
              <Letters text="MICH" from={6} animateIn={animateIn} />
            </span>
          </span>
        </h1>
      </motion.div>

      <div className={`shell grid ${styles.sub}`} aria-hidden="true">
        {['Webdesign', 'Uw expert voor', 'online zichtbaarheid'].map((w, i) => (
          <span key={w} className={styles.subWord}>
            <motion.span
              initial={animateIn ? { y: '110%' } : false}
              animate={{ y: '0%' }}
              transition={{ duration: 1, delay: 0.7 + i * 0.1, ease: EASE }}
            >
              {w}
            </motion.span>
          </span>
        ))}
      </div>
    </section>
  );
}
