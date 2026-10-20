import { jsx as e, jsxs as t } from "react/jsx-runtime";
import { useEffect as n, useRef as r, useState as i } from "react";
import { AnimatePresence as a, motion as o, useMotionValue as s, useMotionValueEvent as c, useReducedMotion as l, useScroll as u, useSpring as d, useTransform as f } from "framer-motion";
//#region src/utils/cx.js
function p(...e) {
	return e.filter(Boolean).join(" ");
}
var m = {
	container: "_container_1548j_1",
	s: "_s_1548j_7",
	m: "_m_1548j_10",
	l: "_l_1548j_13",
	full: "_full_1548j_16"
};
//#endregion
//#region src/layout/Container.jsx
function h({ as: t = "div", size: n = "l", className: r, children: i, ...a }) {
	return /* @__PURE__ */ e(t, {
		className: p(m.container, m[n], r),
		...a,
		children: i
	});
}
var g = {
	section: "_section_a9od4_1",
	s: "_s_a9od4_1",
	m: "_m_a9od4_9",
	l: "_l_a9od4_12",
	xl: "_xl_a9od4_15"
};
//#endregion
//#region src/layout/Section.jsx
function _({ as: t = "section", spacing: n = "m", className: r, children: i, ...a }) {
	return /* @__PURE__ */ e(t, {
		className: p(g.section, g[n], r),
		...a,
		children: i
	});
}
var v = { grid: "_grid_1lk7e_1" };
//#endregion
//#region src/layout/Grid.jsx
function y({ as: t = "div", columns: n = 12, gap: r = "1.5rem", className: i, style: a, children: o, ...s }) {
	let c = typeof n == "number" ? `repeat(${n}, 1fr)` : n;
	return /* @__PURE__ */ e(t, {
		className: p(v.grid, i),
		style: {
			gridTemplateColumns: c,
			gap: r,
			...a
		},
		...s,
		children: o
	});
}
var b = { stack: "_stack_elkfr_1" };
//#endregion
//#region src/layout/Stack.jsx
function x({ as: t = "div", gap: n = "1.5rem", align: r = "stretch", className: i, style: a, children: o, ...s }) {
	return /* @__PURE__ */ e(t, {
		className: p(b.stack, i),
		style: {
			gap: n,
			alignItems: r,
			...a
		},
		...s,
		children: o
	});
}
var S = {
	split: "_split_jmiwk_1",
	reverseOnMobile: "_reverseOnMobile_jmiwk_10"
}, C = {
	"1:1": "1fr 1fr",
	"2:1": "2fr 1fr",
	"1:2": "1fr 2fr",
	"3:2": "3fr 2fr",
	"2:3": "2fr 3fr"
};
function w({ left: n, right: r, ratio: i = "1:1", gap: a = "3rem", align: o = "stretch", reverseOnMobile: s = !1, className: c, style: l, ...u }) {
	return /* @__PURE__ */ t("div", {
		className: p(S.split, s && S.reverseOnMobile, c),
		style: {
			gridTemplateColumns: C[i] || i,
			gap: a,
			"--split-align": o,
			...l
		},
		...u,
		children: [/* @__PURE__ */ e("div", { children: n }), /* @__PURE__ */ e("div", { children: r })]
	});
}
var ee = { fullBleed: "_fullBleed_tij78_1" };
//#endregion
//#region src/layout/FullBleed.jsx
function te({ as: t = "div", className: n, children: r, ...i }) {
	return /* @__PURE__ */ e(t, {
		className: p(ee.fullBleed, n),
		...i,
		children: r
	});
}
var ne = { overlay: "_overlay_41fsj_1" };
//#endregion
//#region src/layout/Overlay.jsx
function re({ color: t, opacity: n = 1, blend: r, className: i, style: a, children: o, ...s }) {
	return /* @__PURE__ */ e("div", {
		className: p(ne.overlay, i),
		style: {
			background: t,
			opacity: n,
			mixBlendMode: r,
			...a
		},
		...s,
		children: o
	});
}
var T = {
	button: "_button_1iiqj_1",
	m: "_m_1iiqj_25",
	s: "_s_1iiqj_28",
	l: "_l_1iiqj_32",
	primary: "_primary_1iiqj_38",
	secondary: "_secondary_1iiqj_46",
	ghost: "_ghost_1iiqj_55",
	text: "_text_1iiqj_63"
};
//#endregion
//#region src/ui/Button.jsx
function ie({ as: t, href: n, variant: r = "primary", size: i = "m", className: a, children: o, ...s }) {
	let c = t || (n ? "a" : "button");
	return /* @__PURE__ */ e(c, {
		...c === "a" ? { href: n } : n === void 0 ? {} : { to: n },
		className: p(T.button, T[r], T[i], a),
		...s,
		children: o
	});
}
var E = {
	link: "_link_idfl4_1",
	underlined: "_underlined_idfl4_14"
};
//#endregion
//#region src/ui/Link.jsx
function ae({ as: t = "a", href: n, underline: r = !1, external: i = !1, className: a, children: o, ...s }) {
	return /* @__PURE__ */ e(t, {
		...t === "a" ? { href: n } : { to: n },
		className: p(E.link, r && E.underlined, a),
		target: i ? "_blank" : void 0,
		rel: i ? "noreferrer" : void 0,
		...s,
		children: o
	});
}
var D = {
	heading: "_heading_gow1x_1",
	hero: "_hero_gow1x_8",
	xl: "_xl_gow1x_11",
	l: "_l_gow1x_14",
	m: "_m_gow1x_17",
	s: "_s_gow1x_20"
};
//#endregion
//#region src/ui/Heading.jsx
function oe({ as: t = "h2", size: n = "l", className: r, children: i, ...a }) {
	return /* @__PURE__ */ e(t, {
		className: p(D.heading, D[n], r),
		...a,
		children: i
	});
}
var O = {
	eyebrow: "_eyebrow_1xd1g_1",
	noMark: "_noMark_1xd1g_21"
};
//#endregion
//#region src/ui/Eyebrow.jsx
function se({ as: t = "p", mark: n = !0, className: r, children: i, ...a }) {
	return /* @__PURE__ */ e(t, {
		className: p(O.eyebrow, !n && O.noMark, r),
		...a,
		children: i
	});
}
var k = {
	divider: "_divider_nxvil_1",
	horizontal: "_horizontal_nxvil_6",
	vertical: "_vertical_nxvil_11"
};
//#endregion
//#region src/ui/Divider.jsx
function ce({ orientation: t = "horizontal", className: n, style: r, ...i }) {
	return /* @__PURE__ */ e("hr", {
		className: p(k.divider, k[t], n),
		style: r,
		...i
	});
}
var A = {
	frame: "_frame_1jpqq_1",
	img: "_img_1jpqq_7",
	loaded: "_loaded_1jpqq_15"
};
//#endregion
//#region src/image/Image.jsx
function le({ src: t, alt: n = "", ratio: r, fit: a = "cover", priority: o = !1, className: s, style: c, ...l }) {
	let [u, d] = i(!1);
	return /* @__PURE__ */ e("div", {
		className: p(A.frame, s),
		style: {
			aspectRatio: r,
			...c
		},
		children: /* @__PURE__ */ e("img", {
			src: t,
			alt: n,
			loading: o ? "eager" : "lazy",
			onLoad: () => d(!0),
			className: p(A.img, u && A.loaded),
			style: { "--fit": a },
			...l
		})
	});
}
var j = {
	frame: "_frame_bkrf1_1",
	img: "_img_bkrf1_7"
}, M = {
	up: {
		hidden: "inset(100% 0% 0% 0%)",
		shown: "inset(0% 0% 0% 0%)"
	},
	down: {
		hidden: "inset(0% 0% 100% 0%)",
		shown: "inset(0% 0% 0% 0%)"
	},
	left: {
		hidden: "inset(0% 100% 0% 0%)",
		shown: "inset(0% 0% 0% 0%)"
	},
	right: {
		hidden: "inset(0% 0% 0% 100%)",
		shown: "inset(0% 0% 0% 0%)"
	}
};
function ue({ src: t, alt: n = "", direction: r = "up", ratio: i, duration: a = 1.1, delay: s = 0, amount: c = .3, once: u = !0, className: d, ...f }) {
	let m = l(), h = M[r] || M.up;
	return /* @__PURE__ */ e("div", {
		className: p(j.frame, d),
		style: { aspectRatio: i },
		children: /* @__PURE__ */ e(o.img, {
			src: t,
			alt: n,
			className: j.img,
			initial: m ? { opacity: 0 } : {
				clipPath: h.hidden,
				scale: 1.15
			},
			whileInView: m ? { opacity: 1 } : {
				clipPath: h.shown,
				scale: 1
			},
			viewport: {
				once: u,
				amount: c
			},
			transition: {
				duration: m ? .3 : a,
				delay: s,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			...f
		})
	});
}
var N = {
	frame: "_frame_1av4e_1",
	img: "_img_1av4e_7",
	overlay: "_overlay_1av4e_19"
};
//#endregion
//#region src/image/ImageHover.jsx
function de({ src: n, alt: r = "", scale: i = 1.08, overlay: a = !1, ratio: o, className: s, ...c }) {
	return /* @__PURE__ */ t("div", {
		className: p(N.frame, s),
		style: {
			aspectRatio: o,
			"--hover-scale": i
		},
		children: [/* @__PURE__ */ e("img", {
			src: n,
			alt: r,
			className: N.img,
			...c
		}), a && /* @__PURE__ */ e("div", { className: N.overlay })]
	});
}
var P = {
	frame: "_frame_xwrfy_1",
	img: "_img_xwrfy_7"
};
//#endregion
//#region src/image/ImageParallax.jsx
function fe({ src: t, alt: n = "", speed: i = .25, ratio: a, className: s, ...c }) {
	let d = r(null), m = l(), { scrollYProgress: h } = u({
		target: d,
		offset: ["start end", "end start"]
	}), g = f(h, [0, 1], [`-${i * 50}%`, `${i * 50}%`]);
	return /* @__PURE__ */ e("div", {
		ref: d,
		className: p(P.frame, s),
		style: { aspectRatio: a },
		children: /* @__PURE__ */ e(o.img, {
			src: t,
			alt: n,
			className: P.img,
			style: m ? void 0 : { y: g },
			...c
		})
	});
}
var F = {
	frame: "_frame_c8xd5_1",
	img: "_img_c8xd5_7",
	circle: "_circle_c8xd5_14",
	shown: "_shown_c8xd5_17",
	diamond: "_diamond_c8xd5_21"
};
//#endregion
//#region src/image/ImageMask.jsx
function I({ src: t, alt: a = "", shape: o = "circle", trigger: s = "scroll", ratio: c, className: l, ...u }) {
	let d = r(null), [f, m] = i(s === "hover");
	return n(() => {
		if (s !== "scroll" || !d.current) return;
		let e = d.current, t = new IntersectionObserver(([e]) => {
			e.isIntersecting && (m(!0), t.disconnect());
		}, { threshold: .3 });
		return t.observe(e), () => t.disconnect();
	}, [s]), /* @__PURE__ */ e("div", {
		ref: d,
		className: p(F.frame, l),
		style: { aspectRatio: c },
		onMouseEnter: s === "hover" ? () => m(!0) : void 0,
		onMouseLeave: s === "hover" ? () => m(!1) : void 0,
		children: /* @__PURE__ */ e("img", {
			src: t,
			alt: a,
			className: p(F.img, F[o], f && F.shown),
			style: { transition: "clip-path 0.8s cubic-bezier(0.22, 1, 0.36, 1)" },
			...u
		})
	});
}
var L = { wrap: "_wrap_pimd9_1" };
//#endregion
//#region src/text/TextReveal.jsx
function R({ as: n = "div", children: r, by: i = "line", delay: a = 0, stagger: s = .08, amount: c = .6, once: u = !0, className: d, ...f }) {
	let p = l(), m = String(r).split(i === "word" ? " " : "\n").filter((e) => e.length > 0);
	return /* @__PURE__ */ e(n, {
		className: d,
		...f,
		children: m.map((n, r) => /* @__PURE__ */ e("span", {
			className: L.wrap,
			children: /* @__PURE__ */ t(o.span, {
				style: { display: "inline-block" },
				initial: p ? { opacity: 0 } : { y: "110%" },
				whileInView: p ? { opacity: 1 } : { y: "0%" },
				viewport: {
					once: u,
					amount: c
				},
				transition: {
					duration: p ? .3 : .8,
					delay: a + r * s,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children: [n, i === "word" && r < m.length - 1 ? "\xA0" : ""]
			})
		}, r))
	});
}
//#endregion
//#region src/text/TextStagger.jsx
function z({ as: n = "div", children: r, by: i = "word", delay: a = 0, stagger: s = .04, amount: c = .6, once: u = !0, className: d, ...f }) {
	let p = l(), m = String(r).split(i === "char" ? "" : " ");
	return /* @__PURE__ */ e(n, {
		className: d,
		...f,
		children: m.map((e, n) => /* @__PURE__ */ t(o.span, {
			style: { display: "inline-block" },
			initial: p ? { opacity: 0 } : {
				opacity: 0,
				y: 10
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: u,
				amount: c
			},
			transition: {
				duration: p ? .2 : .5,
				delay: a + n * s,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			children: [e === " " || e === "" ? "\xA0" : e, i === "word" && n < m.length - 1 ? "\xA0" : ""]
		}, n))
	});
}
//#endregion
//#region src/text/TextClip.jsx
function B({ as: t = "div", children: n, delay: r = 0, duration: i = .9, amount: a = .5, once: s = !0, className: c, ...u }) {
	let d = l(), f = o[t] || o.div;
	return /* @__PURE__ */ e(f, {
		className: c,
		initial: d ? { opacity: 0 } : {
			clipPath: "inset(100% 0% 0% 0%)",
			opacity: 1
		},
		whileInView: d ? { opacity: 1 } : { clipPath: "inset(0% 0% 0% 0%)" },
		viewport: {
			once: s,
			amount: a
		},
		transition: {
			duration: d ? .3 : i,
			delay: r,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		...u,
		children: n
	});
}
//#endregion
//#region src/motion/Reveal.jsx
function V({ as: t = "div", children: n, delay: r = 0, y: i = 26, blur: a = !0, amount: s = .3, once: c = !0, className: u, style: d, ...f }) {
	let p = l(), m = o[t] || o.div;
	return /* @__PURE__ */ e(m, {
		className: u,
		style: d,
		initial: p ? { opacity: 0 } : {
			opacity: 0,
			y: i,
			filter: a ? "blur(6px)" : "blur(0px)"
		},
		whileInView: p ? { opacity: 1 } : {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		viewport: {
			once: c,
			amount: s
		},
		transition: {
			duration: p ? .3 : .9,
			delay: r,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		...f,
		children: n
	});
}
//#endregion
//#region src/motion/Fade.jsx
function pe({ as: t = "div", children: n, delay: r = 0, duration: i = .8, trigger: a = "scroll", amount: s = .3, once: c = !0, className: u, style: d, ...f }) {
	let p = l(), m = o[t] || o.div;
	return /* @__PURE__ */ e(m, {
		className: u,
		style: d,
		initial: { opacity: 0 },
		...a === "scroll" ? {
			whileInView: { opacity: 1 },
			viewport: {
				once: c,
				amount: s
			}
		} : { animate: { opacity: 1 } },
		transition: {
			duration: p ? .2 : i,
			delay: r
		},
		...f,
		children: n
	});
}
//#endregion
//#region src/motion/Scale.jsx
function H({ as: t = "div", children: n, from: r = .9, delay: i = 0, duration: a = .7, trigger: s = "scroll", amount: c = .3, once: u = !0, className: d, style: f, ...p }) {
	let m = l(), h = o[t] || o.div, g = m ? { opacity: 0 } : {
		opacity: 0,
		scale: r
	}, _ = {
		opacity: 1,
		scale: 1
	};
	return /* @__PURE__ */ e(h, {
		className: d,
		style: f,
		initial: g,
		...s === "scroll" ? {
			whileInView: _,
			viewport: {
				once: u,
				amount: c
			}
		} : { animate: _ },
		transition: {
			duration: m ? .2 : a,
			delay: i,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		...p,
		children: n
	});
}
//#endregion
//#region src/motion/Slide.jsx
var U = {
	up: ["y", 1],
	down: ["y", -1],
	left: ["x", 1],
	right: ["x", -1]
};
function me({ as: t = "div", children: n, direction: r = "up", distance: i = 40, delay: a = 0, duration: s = .8, trigger: c = "scroll", amount: u = .3, once: d = !0, className: f, style: p, ...m }) {
	let h = l(), g = o[t] || o.div, [_, v] = U[r] || U.up, y = h ? { opacity: 0 } : {
		opacity: 0,
		[_]: i * v
	}, b = {
		opacity: 1,
		[_]: 0
	};
	return /* @__PURE__ */ e(g, {
		className: f,
		style: p,
		initial: y,
		...c === "scroll" ? {
			whileInView: b,
			viewport: {
				once: d,
				amount: u
			}
		} : { animate: b },
		transition: {
			duration: h ? .2 : s,
			delay: a,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		...m,
		children: n
	});
}
//#endregion
//#region src/motion/Stagger.jsx
function he({ as: t = "div", children: n, stagger: r = .1, delayChildren: i = 0, amount: a = .25, once: s = !0, className: c, style: u, ...d }) {
	let f = l(), p = o[t] || o.div;
	return /* @__PURE__ */ e(p, {
		className: c,
		style: u,
		initial: "hidden",
		whileInView: "shown",
		viewport: {
			once: s,
			amount: a
		},
		variants: {
			hidden: {},
			shown: { transition: {
				staggerChildren: f ? 0 : r,
				delayChildren: i
			} }
		},
		...d,
		children: n
	});
}
function ge({ as: t = "div", children: n, y: r = 24, className: i, style: a, ...s }) {
	let c = l(), u = o[t] || o.div;
	return /* @__PURE__ */ e(u, {
		className: i,
		style: a,
		variants: {
			hidden: c ? { opacity: 0 } : {
				opacity: 0,
				y: r
			},
			shown: {
				opacity: 1,
				y: 0,
				transition: {
					duration: c ? .3 : .85,
					ease: [
						.22,
						1,
						.36,
						1
					]
				}
			}
		},
		...s,
		children: n
	});
}
//#endregion
//#region src/motion/Parallax.jsx
function _e({ children: t, speed: n = .3, direction: i = "y", className: a, style: s, ...c }) {
	let d = r(null), p = l(), { scrollYProgress: m } = u({
		target: d,
		offset: ["start end", "end start"]
	}), h = 100 * n, g = f(m, [0, 1], [-h, h]);
	return p ? /* @__PURE__ */ e("div", {
		ref: d,
		className: a,
		style: s,
		...c,
		children: t
	}) : /* @__PURE__ */ e(o.div, {
		ref: d,
		className: a,
		style: {
			...s,
			[i]: g
		},
		...c,
		children: t
	});
}
//#endregion
//#region src/motion/Magnetic.jsx
var W = {
	stiffness: 220,
	damping: 16,
	mass: .4
};
function ve({ as: t = "div", strength: n = .3, children: i, className: a, style: c, ...u }) {
	let f = r(null), p = l(), m = s(0), h = s(0), g = d(m, W), _ = d(h, W), v = o[t] || o.div, y = (e) => {
		if (p || e.pointerType !== "mouse" || !f.current) return;
		let t = f.current.getBoundingClientRect(), r = t.left + t.width / 2 - g.get(), i = t.top + t.height / 2 - _.get();
		m.set((e.clientX - r) * n), h.set((e.clientY - i) * n);
	}, b = () => {
		m.set(0), h.set(0);
	};
	return /* @__PURE__ */ e(v, {
		ref: f,
		className: a,
		style: {
			display: "inline-block",
			...c,
			x: g,
			y: _
		},
		onPointerMove: y,
		onPointerLeave: b,
		...u,
		children: i
	});
}
var ye = { noise: "_noise_wnwzu_1" };
//#endregion
//#region src/effects/Noise.jsx
function be({ opacity: n = .05, className: r, style: i, ...a }) {
	return /* @__PURE__ */ e("div", {
		className: p(ye.noise, r),
		style: {
			opacity: n,
			...i
		},
		...a,
		children: /* @__PURE__ */ t("svg", {
			width: "100%",
			height: "100%",
			children: [/* @__PURE__ */ e("filter", {
				id: "uikit-noise",
				children: /* @__PURE__ */ e("feTurbulence", {
					type: "fractalNoise",
					baseFrequency: "0.85",
					numOctaves: "2",
					stitchTiles: "stitch"
				})
			}), /* @__PURE__ */ e("rect", {
				width: "100%",
				height: "100%",
				filter: "url(#uikit-noise)"
			})]
		})
	});
}
var G = {
	gradient: "_gradient_1yrjd_1",
	animate: "_animate_1yrjd_6",
	"uikit-gradient-shift": "_uikit-gradient-shift_1yrjd_1"
};
//#endregion
//#region src/effects/Gradient.jsx
function xe({ colors: t = ["#1a1a1a", "#0b0b0c"], angle: n = 135, animate: r = !1, speed: i = 12, className: a, style: o, ...s }) {
	return /* @__PURE__ */ e("div", {
		className: p(G.gradient, r && G.animate, a),
		style: {
			backgroundImage: `linear-gradient(${n}deg, ${t.join(", ")})`,
			backgroundSize: r ? "200% 200%" : void 0,
			animationDuration: r ? `${i}s` : void 0,
			...o
		},
		...s
	});
}
var K = {
	grid: "_grid_1ai8v_1",
	fade: "_fade_1ai8v_7"
};
//#endregion
//#region src/effects/GridBackground.jsx
function Se({ size: t = 64, color: n = "rgba(255,255,255,0.08)", fade: r = !0, className: i, style: a, ...o }) {
	return /* @__PURE__ */ e("div", {
		className: p(K.grid, r && K.fade, i),
		style: {
			backgroundImage: `linear-gradient(${n} 1px, transparent 1px), linear-gradient(90deg, ${n} 1px, transparent 1px)`,
			backgroundSize: `${t}px ${t}px`,
			...a
		},
		...o
	});
}
var q = {
	marquee: "_marquee_7fzcw_1",
	track: "_track_7fzcw_6",
	"uikit-marquee": "_uikit-marquee_7fzcw_1",
	pauseOnHover: "_pauseOnHover_7fzcw_14",
	group: "_group_7fzcw_18"
};
//#endregion
//#region src/effects/Marquee.jsx
function Ce({ children: n, speed: r = 30, direction: i = "left", pauseOnHover: a = !0, gap: o = "3rem", className: s, ...c }) {
	return /* @__PURE__ */ e("div", {
		className: p(q.marquee, a && q.pauseOnHover, s),
		...c,
		children: /* @__PURE__ */ t("div", {
			className: q.track,
			style: {
				animationDuration: `${r}s`,
				animationDirection: i === "right" ? "reverse" : "normal",
				gap: o
			},
			children: [/* @__PURE__ */ e("div", {
				className: q.group,
				style: { gap: o },
				children: n
			}), /* @__PURE__ */ e("div", {
				className: q.group,
				style: { gap: o },
				"aria-hidden": "true",
				children: n
			})]
		})
	});
}
var J = {
	navbar: "_navbar_1jcli_1",
	solid: "_solid_1jcli_16",
	blur: "_blur_1jcli_21"
};
//#endregion
//#region src/navigation/Navbar.jsx
function we({ children: t, transparentUntilScroll: a = !0, solidAfter: s = 40, hideOnScroll: l = !1, blur: d = !0, className: f, ...m }) {
	let [h, g] = i(!a), [_, v] = i(!1), y = r(0), { scrollY: b } = u();
	return c(b, "change", (e) => {
		a && g(e > s), l && (v(e > y.current && e > s), y.current = e);
	}), n(() => {
		a || g(!0);
	}, [a]), /* @__PURE__ */ e(o.header, {
		className: p(J.navbar, h && J.solid, d && J.blur, f),
		animate: { y: _ ? "-100%" : "0%" },
		transition: {
			duration: .4,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		...m,
		children: t
	});
}
var Y = {
	menu: "_menu_1wb8t_1",
	close: "_close_1wb8t_13"
}, X = {
	slide: {
		initial: { x: "100%" },
		animate: { x: "0%" },
		exit: { x: "100%" }
	},
	clip: {
		initial: { clipPath: "circle(0% at 100% 0%)" },
		animate: { clipPath: "circle(150% at 100% 0%)" },
		exit: { clipPath: "circle(0% at 100% 0%)" }
	},
	fade: {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 }
	}
};
function Te({ open: n, onClose: r, children: i, transition: s = "clip", closeLabel: c = "Close menu", className: l, ...u }) {
	let d = X[s] || X.clip;
	return /* @__PURE__ */ e(a, { children: n && /* @__PURE__ */ t(o.div, {
		className: p(Y.menu, l),
		initial: d.initial,
		animate: d.animate,
		exit: d.exit,
		transition: {
			duration: .55,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		...u,
		children: [/* @__PURE__ */ e("button", {
			type: "button",
			className: Y.close,
			onClick: r,
			"aria-label": c,
			children: "×"
		}), i]
	}) });
}
var Ee = { panel: "_panel_1xb2u_1" }, Z = [
	.76,
	0,
	.24,
	1
], De = [
	.22,
	1,
	.36,
	1
];
function Oe({ routeKey: n, children: r, panel: i, duration: s = .8, className: c, panelClassName: u, onExitComplete: d }) {
	return l() ? /* @__PURE__ */ e(a, {
		mode: "wait",
		initial: !1,
		onExitComplete: d,
		children: /* @__PURE__ */ e(o.div, {
			className: c,
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			transition: { duration: .25 },
			children: r
		}, n)
	}) : /* @__PURE__ */ e(a, {
		mode: "wait",
		initial: !1,
		onExitComplete: d,
		children: /* @__PURE__ */ t(o.div, {
			className: c,
			children: [/* @__PURE__ */ e(o.div, {
				className: p(Ee.panel, u),
				"aria-hidden": "true",
				initial: { clipPath: "inset(0% 0% 0% 0%)" },
				animate: {
					clipPath: "inset(0% 0% 100% 0%)",
					transition: {
						duration: s,
						ease: Z,
						delay: .12
					}
				},
				exit: {
					clipPath: ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"],
					transition: {
						duration: s,
						ease: Z
					}
				},
				children: i
			}), /* @__PURE__ */ e(o.div, {
				initial: { y: 90 },
				animate: {
					y: 0,
					transition: {
						duration: 1.1,
						ease: De,
						delay: .2
					}
				},
				exit: {
					y: -50,
					transition: {
						duration: s,
						ease: Z
					}
				},
				children: r
			})]
		}, n)
	});
}
var Q = {
	cursor: "_cursor_glhnn_10",
	body: "_body_glhnn_20",
	visible: "_visible_glhnn_38",
	hover: "_hover_glhnn_42",
	label: "_label_glhnn_47",
	hidden: "_hidden_glhnn_54",
	pressed: "_pressed_glhnn_59",
	text: "_text_glhnn_63"
}, ke = "a, button, [role=\"button\"], label, summary, [data-cursor]", Ae = "input, textarea, select, [contenteditable=\"true\"]", je = "(hover: hover) and (pointer: fine)", $ = {
	stiffness: 650,
	damping: 42,
	mass: .35
};
function Me({ className: t, style: r }) {
	let a = l(), [c, u] = i(!1), [f, m] = i("default"), [h, g] = i(""), [_, v] = i(!1), [y, b] = i(!1), x = s(-100), S = s(-100), C = d(x, $), w = d(S, $);
	return n(() => {
		let e = window.matchMedia(je), t = () => u(e.matches);
		return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []), n(() => {
		if (!c) return;
		let e = document.documentElement;
		e.classList.add("uikit-has-cursor");
		let t = (e) => {
			e.pointerType === "mouse" && (x.set(e.clientX), S.set(e.clientY), v(!0));
		}, n = (e) => {
			let t = e.target instanceof Element ? e.target : null;
			if (!t) return;
			if (t.closest(Ae)) return m("hidden");
			let n = t.closest("[data-cursor-label]"), r = t.closest(ke);
			if (r?.getAttribute("data-cursor") === "hide") return m("hidden");
			if (n) return g(n.getAttribute("data-cursor-label")), m("label");
			m(r ? "hover" : "default");
		}, r = () => b(!0), i = () => b(!1), a = () => v(!1), o = (e) => {
			e.target instanceof Element && e.target.closest("a[href]") && m("default");
		};
		return window.addEventListener("pointermove", t, { passive: !0 }), document.addEventListener("pointerover", n, { passive: !0 }), window.addEventListener("pointerdown", r), window.addEventListener("pointerup", i), e.addEventListener("mouseleave", a), document.addEventListener("click", o), () => {
			e.classList.remove("uikit-has-cursor"), window.removeEventListener("pointermove", t), document.removeEventListener("pointerover", n), window.removeEventListener("pointerdown", r), window.removeEventListener("pointerup", i), e.removeEventListener("mouseleave", a), document.removeEventListener("click", o);
		};
	}, [
		c,
		x,
		S
	]), c ? /* @__PURE__ */ e(o.div, {
		className: p(Q.cursor, Q[f], _ && Q.visible, y && Q.pressed, t),
		style: {
			...r,
			x: a ? x : C,
			y: a ? S : w
		},
		"aria-hidden": "true",
		children: /* @__PURE__ */ e("div", {
			className: Q.body,
			children: /* @__PURE__ */ e("span", {
				className: Q.text,
				children: h
			})
		})
	}) : null;
}
//#endregion
export { ie as Button, h as Container, Me as CustomCursor, ce as Divider, se as Eyebrow, pe as Fade, te as FullBleed, xe as Gradient, y as Grid, Se as GridBackground, oe as Heading, le as Image, de as ImageHover, I as ImageMask, fe as ImageParallax, ue as ImageReveal, ae as Link, ve as Magnetic, Ce as Marquee, Te as MobileMenu, we as Navbar, be as Noise, re as Overlay, Oe as PageTransition, _e as Parallax, V as Reveal, H as Scale, _ as Section, me as Slide, w as Split, x as Stack, he as Stagger, ge as StaggerItem, B as TextClip, R as TextReveal, z as TextStagger };

//# sourceMappingURL=ui-kit.js.map