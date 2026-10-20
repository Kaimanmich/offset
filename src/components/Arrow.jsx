const ROTATION = { right: 0, 'up-right': -45, down: 90, up: -90, left: 180 };

/** Thin-stroke arrow glyph that inherits text colour and scales with font size. */
export function Arrow({ direction = 'right', className }) {
  return (
    <svg
      className={className}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
      style={{ rotate: `${ROTATION[direction] ?? 0}deg`, flexShrink: 0 }}
    >
      <path d="M3 12h17M13 5l7 7-7 7" />
    </svg>
  );
}
