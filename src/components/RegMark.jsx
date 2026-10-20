/** Printer's registration target — circle with crosshair. */
export function RegMark({ size = 18, className, style }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="6.5" />
      <path d="M12 0v24M0 12h24" />
    </svg>
  );
}
