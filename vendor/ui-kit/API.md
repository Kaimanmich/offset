# ui-kit API reference

Compact prop reference — no prose, no examples. For philosophy and a
composition example, see README.md. For implementation, read the file
directly (only when you need to).

```js
import { ... } from 'ui-kit';
import 'ui-kit/style.css'; // once, before your own CSS
```

All components accept `className` and forward unknown props (`...rest`)
unless noted. Scroll-triggered ones (`amount`, `once`) use Framer Motion's
`whileInView` and respect `prefers-reduced-motion` automatically.

## Layout

- `Container({ as='div', size='l', className, children })` — max-width wrapper + gutter padding. `size`: s/m/l/full.
- `Section({ as='section', spacing='m', className, children })` — vertical rhythm block. `spacing`: s/m/l/xl.
- `Grid({ as='div', columns=12, gap='1.5rem', className, style, children })` — CSS grid. `columns`: number (equal cols) or raw template string.
- `Stack({ as='div', gap='1.5rem', align='stretch', className, style, children })` — vertical flex stack.
- `Split({ left, right, ratio='1:1', gap='3rem', align='stretch', reverseOnMobile=false, className, style })` — two-pane layout, collapses to one column <860px. `ratio`: `1:1`/`2:1`/`1:2`/`3:2`/`2:3` or custom `grid-template-columns` string.
- `FullBleed({ as='div', className, children })` — breaks children out to 100vw.
- `Overlay({ color, opacity=1, blend, className, style, children })` — absolute layer over a `position: relative` parent.

## UI

- `Button({ as, href, variant='primary', size='m', className, children, ...rest })` — `variant`: primary/secondary/ghost/text. `size`: s/m/l. Renders `<a>` when `href` is given, else `<button>`. Pass `as={RouterLink}` (react-router) for client-side nav — `href` is then forwarded as `to`.
- `Link({ as='a', href, underline=false, external=false, className, children })` — animated underline on hover. `underline=true` starts underlined and clears on hover (inverted). `external=true` adds target=_blank/rel=noreferrer. Pass `as={RouterLink}` (react-router) for client-side nav — `href` is then forwarded as `to`.
- `Heading({ as='h2', size='l', className, children })` — fluid type scale, `size` decoupled from HTML level (`as`). `size`: hero/xl/l/m/s.
- `Eyebrow({ as='p', mark=true, className, children })` — uppercase kicker label. `mark=false` removes the leading dash.
- `Divider({ orientation='horizontal', className, style })` — renders `<hr>`. `orientation`: horizontal/vertical (vertical needs an explicit height from parent or style).

## Image

- `Image({ src, alt='', ratio, fit='cover', priority=false, className, style, ...rest })` — aspect-ratio box, fades in on load. `priority=true` → `loading="eager"`, else lazy.
- `ImageReveal({ src, alt='', direction='up', ratio, duration=1.1, delay=0, amount=0.3, once=true, className, ...rest })` — clip-path wipe + slight scale-down, on scroll into view. `direction`: up/down/left/right.
- `ImageHover({ src, alt='', scale=1.08, overlay=false, ratio, className, ...rest })` — CSS hover zoom; `overlay=true` adds a darkening layer on hover.
- `ImageParallax({ src, alt='', speed=0.25, ratio, className, ...rest })` — vertical drift tied to scroll position (`useScroll`+`useTransform`).
- `ImageMask({ src, alt='', shape='circle', trigger='scroll', ratio, className, ...rest })` — clip-path shape reveal. `shape`: circle/diamond. `trigger`: scroll (IntersectionObserver, once) / hover.

## Text — **string children only** (they split text into spans)

- `TextReveal({ as='div', children, by='line', delay=0, stagger=0.08, amount=0.6, once=true, className, ...rest })` — each line/word clipped in its own overflow mask, reveals in sequence. `by`: line (splits on `\n`) / word.
- `TextStagger({ as='div', children, by='word', delay=0, stagger=0.04, amount=0.6, once=true, className, ...rest })` — fade+rise per word/char. `by`: word/char.
- `TextClip({ as='div', children, delay=0, duration=0.9, amount=0.5, once=true, className, ...rest })` — single bottom-to-top clip wipe over the whole block. **Any children** (not string-only, unlike the two above).

## Motion — composable, wrap anything

- `Reveal({ as='div', children, delay=0, y=26, blur=true, amount=0.3, once=true, className, style, ...rest })` — fade + rise + blur-out entrance.
- `Fade({ as='div', children, delay=0, duration=0.8, trigger='scroll', amount=0.3, once=true, className, style, ...rest })` — opacity only. `trigger`: scroll/mount.
- `Scale({ as='div', children, from=0.9, delay=0, duration=0.7, trigger='scroll', amount=0.3, once=true, className, style, ...rest })` — scale+fade.
- `Slide({ as='div', children, direction='up', distance=40, delay=0, duration=0.8, trigger='scroll', amount=0.3, once=true, className, style, ...rest })` — directional translate+fade.
- `Stagger({ as='div', children, stagger=0.1, delayChildren=0, amount=0.25, once=true, className, style, ...rest })` + `StaggerItem({ as='div', children, y=24, className, style, ...rest })` — container/item pair; every direct child of `Stagger` should be a `StaggerItem`.
- `Parallax({ children, speed=0.3, direction='y', className, style, ...rest })` — generic scroll-linked translate, works on any children (not image-specific).
- `Magnetic({ as='div', strength=0.3, children, className, style, ...rest })` — pulls children toward the pointer while hovered, springs back on leave. `strength` = fraction of pointer offset it travels. Mouse only; inert under reduced motion.

## Effects

- `Noise({ opacity=0.05, className, style, ...rest })` — tileable SVG film-grain, `position: absolute; inset: 0`, `pointer-events: none`.
- `Gradient({ colors=['#1a1a1a','#0b0b0c'], angle=135, animate=false, speed=12, className, style, ...rest })` — absolute gradient layer; `animate=true` slowly shifts position over `speed` seconds.
- `GridBackground({ size=64, color='rgba(255,255,255,0.08)', fade=true, className, style, ...rest })` — repeating grid-line background; `fade=true` masks it toward the edges.
- `Marquee({ children, speed=30, direction='left', pauseOnHover=true, gap='3rem', className, ...rest })` — infinite horizontal ticker; `children` is duplicated internally for a seamless loop.

## Navigation

- `Navbar({ children, transparentUntilScroll=true, solidAfter=40, hideOnScroll=false, blur=true, className, ...rest })` — sticky header (`position: fixed`); goes solid past `solidAfter`px scrolled; `hideOnScroll=true` hides it on scroll-down, reveals on scroll-up.
- `MobileMenu({ open, onClose, children, transition='clip', closeLabel='Close menu', className, ...rest })` — fullscreen overlay, mount-controlled via `open` (AnimatePresence). `transition`: slide/clip/fade. Includes its own close (×) button calling `onClose`; `closeLabel` is its accessible name (localise it).
- `PageTransition({ routeKey, children, panel, duration=0.8, className, panelClassName, onExitComplete })` — route-change wipe: key it on the route id. A full-screen panel (renders `panel` inside, e.g. a wordmark) rises over the outgoing page then uncovers the incoming one as its content settles. Skips the animation on first mount; cross-fades under reduced motion.

## Cursor

- `CustomCursor({ className, style })` — replaces the native pointer with a small spring-trailing dot. No behavior props; control it via DOM attributes instead: `data-cursor-label="VIEW"` on an element (or ancestor) shows that label and grows the dot; `data-cursor="hide"` hides the dot over that element; native form fields (`input`/`textarea`/`select`/`[contenteditable]`) always keep the system caret. Renders `null` on touch/coarse pointers. Mount once near the app root.

## Tokens (`src/styles/tokens.css`) — override at your own `:root`

- Color: `--uikit-color-bg` `-surface` `-text` `-text-dim` `-accent` `-border`
- Type: `--uikit-font-display` `-font-body` `-font-mono`
- Space: `--uikit-gutter` `-container-max` `-radius`
- Motion: `--uikit-ease` `-duration-fast` `-duration-base` `-duration-slow`
- Cursor (`CustomCursor` only): `--uikit-cursor-size` `-hover-size` `-label-size` `-label-bg` `-label-color`
