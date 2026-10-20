import { useEffect, useState } from 'react';
import { STUDIO } from '../data/content.js';

const format = new Intl.DateTimeFormat('en-GB', {
  timeZone: STUDIO.timeZone,
  hour: '2-digit',
  minute: '2-digit',
});

/** Studio local time (Belgium), refreshed on the minute. */
export function LocalTime({ prefix = 'BE', className }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 15_000);
    return () => clearInterval(id);
  }, []);

  const time = format.format(now);
  return (
    <span className={className}>
      {prefix} <time dateTime={now.toISOString()}>{time}</time>
    </span>
  );
}
