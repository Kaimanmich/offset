import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import styles from './MoireField.module.css';

const INK = 'rgba(244, 243, 239, 0.62)';
const ACCENT = '#c8ff3d';

/**
 * Two sets of concentric rings, the second one's centre offset from the
 * first. Where they cross, interference fringes appear; moving the pointer
 * moves the offset and the fringes sweep across the disc. A light falloff
 * gives it the read of a sphere. Static under reduced motion; paused when
 * off-screen.
 */
export function MoireField({ className = '' }) {
  const canvasRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    let dpr = 1;
    let size = 0;
    let raf = 0;
    let running = false;
    const start = performance.now();
    const pointer = { x: 0, y: 0 }; // target, -1..1
    const eased = { x: 0, y: 0 };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = canvas.clientWidth;
      canvas.width = Math.round(size * dpr);
      canvas.height = Math.round(size * dpr);
    };

    const rings = (cx, cy, radius, step) => {
      ctx.beginPath();
      for (let r = step; r < radius * 1.5; r += step) {
        ctx.moveTo(cx + r, cy);
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
      }
      ctx.stroke();
    };

    const cross = (x, y, len, color) => {
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(x - len, y);
      ctx.lineTo(x + len, y);
      ctx.moveTo(x, y - len);
      ctx.lineTo(x, y + len);
      ctx.stroke();
    };

    const draw = (now) => {
      const w = canvas.width;
      if (w < 8) return; // not laid out yet
      const t = (now - start) / 1000;
      const R = w / 2;
      const c = R;
      const step = Math.max(4.2 * dpr, w / 150);

      eased.x += (pointer.x - eased.x) * 0.06;
      eased.y += (pointer.y - eased.y) * 0.06;

      const drift = reduce ? 0 : 1;
      const ox = (Math.sin(t * 0.35) * 0.035 * drift + eased.x * 0.075) * R;
      const oy = (Math.cos(t * 0.27) * 0.03 * drift + eased.y * 0.075) * R;
      const breathe = 1 + Math.sin(t * 0.22) * 0.012 * drift;

      ctx.clearRect(0, 0, w, w);
      ctx.save();
      ctx.beginPath();
      ctx.arc(c, c, R - dpr, 0, Math.PI * 2);
      ctx.clip();

      ctx.lineWidth = 0.8 * dpr;
      ctx.strokeStyle = INK;
      rings(c, c, R, step);
      rings(c + ox, c + oy, R, step * breathe);

      // Falloff: keep a lit upper-left, let the far edge sink into the page.
      ctx.globalCompositeOperation = 'destination-in';
      const g = ctx.createRadialGradient(c - R * 0.35, c - R * 0.4, R * 0.05, c, c, R * 1.05);
      g.addColorStop(0, 'rgba(0,0,0,1)');
      g.addColorStop(0.55, 'rgba(0,0,0,0.75)');
      g.addColorStop(1, 'rgba(0,0,0,0.08)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, w);
      ctx.restore();

      // Registration: the two centres, marked. The gap between them is the offset.
      ctx.lineWidth = 1 * dpr;
      cross(c, c, 9 * dpr, 'rgba(244, 243, 239, 0.8)');
      cross(c + ox, c + oy, 9 * dpr, ACCENT);
    };

    const loop = (now) => {
      draw(now);
      raf = requestAnimationFrame(loop);
    };

    const play = () => {
      if (running || reduce) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const pause = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onPointer = (e) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    resize();
    draw(performance.now());

    const ro = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? play() : pause()), {
      rootMargin: '100px',
    });
    io.observe(canvas);

    if (!reduce) window.addEventListener('pointermove', onPointer, { passive: true });

    return () => {
      pause();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onPointer);
    };
  }, [reduce]);

  return (
    <div className={`${styles.field} ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
