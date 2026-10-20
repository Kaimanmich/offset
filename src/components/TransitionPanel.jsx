import { CropMarks } from './CropMarks.jsx';
import { RegMark } from './RegMark.jsx';
import styles from './TransitionPanel.module.css';

/** Content of the page-transition panel: a proof sheet with the wordmark set off-register. */
export function TransitionPanel() {
  return (
    <div className={styles.sheet}>
      <span className={styles.word}>
        <span>KAIMAN</span>
        <span className={styles.set}>MICH</span>
      </span>
      <span className={`t-mono ${styles.bl}`}>Webdesign — online zichtbaarheid</span>
      <span className={`t-mono ${styles.br}`}>
        <RegMark size={12} /> BE / WW
      </span>
      <CropMarks inset="clamp(28px, 4vw, 64px)" />
    </div>
  );
}
