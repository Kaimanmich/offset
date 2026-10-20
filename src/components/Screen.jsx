import { ImageReveal } from 'ui-kit';
import { CropMarks } from './CropMarks.jsx';
import styles from './Screen.module.css';

/** Screen capture of a concept: hairline frame, crop marks, browser-scrollbar edge cropped. */
export function Screen({ shot, eager = false }) {
  return (
    <div className={styles.screen}>
      <ImageReveal
        src={shot.src}
        alt={shot.alt}
        ratio="1980 / 852"
        direction="up"
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        width="2000"
        height="852"
        style={{ objectPosition: 'left center' }}
      />
      <CropMarks />
    </div>
  );
}
