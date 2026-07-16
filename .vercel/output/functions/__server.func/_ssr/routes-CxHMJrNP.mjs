import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { r as require_jsx_runtime, t as Root } from "../_libs/@radix-ui/react-label+[...].mjs";
import { i as AnimatePresence, n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { t as useInView } from "../_libs/react-intersection-observer.mjs";
import { a as Linkedin, c as Facebook, i as Mail, l as CircleCheckBig, n as Phone, o as Instagram, r as Music2, s as Globe, t as Send } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CxHMJrNP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_default = "/assets/logo-IPdv1eDQ.png";
var links = [
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Programs",
		href: "#programs"
	},
	{
		label: "Impact",
		href: "#impact"
	},
	{
		label: "Stories",
		href: "#stories"
	},
	{
		label: "Support",
		href: "#support"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -30,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: { duration: .6 },
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-ink/95 backdrop-blur-md shadow-ink" : "bg-transparent"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10 md:py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2 md:gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "Revamp Initiatives",
						className: "h-8 w-8 rounded-full md:h-10 md:w-10"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-display text-base font-semibold text-gold md:text-xl",
						children: ["Revamp ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-cream",
							children: "Initiatives"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "hidden items-center gap-6 md:flex md:gap-8",
					children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm font-medium text-cream/80 transition-colors hover:text-gold",
						children: l.label
					}) }, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#support",
						className: "inline-flex items-center rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-95 md:px-5 md:py-2.5",
						children: "Get Involved"
					}) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					"aria-label": "Toggle menu",
					onClick: () => setOpen((v) => !v),
					className: "flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-gold/40 md:hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-0.5 w-5 bg-gold transition-transform ${open ? "translate-y-1 rotate-45" : ""}` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-0.5 w-5 bg-gold transition-opacity ${open ? "opacity-0" : ""}` }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-0.5 w-5 bg-gold transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}` })
					]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { x: "100%" },
		animate: { x: 0 },
		exit: { x: "100%" },
		transition: {
			type: "tween",
			duration: .35,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "fixed inset-y-0 right-0 z-40 flex w-4/5 max-w-sm flex-col bg-ink px-6 pt-20 md:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-5",
			children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: l.href,
				onClick: () => setOpen(false),
				className: "text-display text-2xl font-semibold text-cream hover:text-gold",
				children: l.label
			}) }, l.href))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#support",
			onClick: () => setOpen(false),
			className: "mt-8 inline-flex w-fit items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink",
			children: "Get Involved →"
		})]
	}) })] });
}
var hero_default = "/assets/hero-DvMjDv7L.mp4";
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
	const opacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		ref,
		className: "relative min-h-[100svh] overflow-hidden bg-ink text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y: y2,
					opacity
				},
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src: hero_default,
					autoPlay: true,
					loop: true,
					muted: true,
					playsInline: true,
					className: "h-full w-full object-cover opacity-40 animate-hero-kb"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[10%] top-[30%] h-64 w-64 rounded-full bg-gold/10 blur-3xl md:h-96 md:w-96" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { y: y1 },
				className: "relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 pb-16 pt-28 md:px-10 md:pt-40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .1
						},
						className: "mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-ink/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gold backdrop-blur-sm md:mb-6 md:px-4 md:py-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-gold animate-pulse-gold" }), "Nigerian Creative Social Impact Hub"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .15
						},
						className: "mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gold/80 md:mb-4",
						children: "Encouraging Creativity for Social Impact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 40
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							delay: .2,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "text-display font-bold leading-[0.95] text-cream",
						style: { fontSize: "clamp(2rem, 6vw, 5rem)" },
						children: [
							"Encourage Creativity",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "for Social Impact"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .4
						},
						className: "mt-5 max-w-2xl text-sm leading-relaxed text-cream/75 md:mt-8 md:text-lg",
						children: "Empowering vulnerable communities through creative expression, vocational training, and sustainable development since 2022."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .6
						},
						className: "mt-7 flex flex-wrap gap-3 md:mt-10 md:gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#support",
							className: "group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-ink shadow-gold transition-transform hover:scale-[1.04] active:scale-95 md:px-7 md:py-4 md:text-base",
							children: ["Support Our Mission", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "transition-transform group-hover:translate-x-1",
								children: "→"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#programs",
							className: "inline-flex items-center gap-2 rounded-full border-2 border-gold px-5 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-ink md:px-7 md:py-4 md:text-base",
							children: "See Our Work"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							delay: 1.2,
							duration: 1
						},
						className: "absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-cream/50 md:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scroll" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-10 w-px bg-gradient-to-b from-gold to-transparent" })]
					})
				]
			})
		]
	});
}
var goals = [
	{
		n: "01",
		label: "No Poverty"
	},
	{
		n: "05",
		label: "Gender Equality"
	},
	{
		n: "08",
		label: "Decent Work"
	},
	{
		n: "10",
		label: "Reduced Inequalities"
	}
];
function SDGStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-gold/20 bg-ink py-4 md:py-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col gap-3 px-5 md:flex-row md:items-center md:gap-6 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-gold md:tracking-[0.25em]",
				children: "Aligned with UN SDGs"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:px-0 md:pb-0 md:gap-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
				children: goals.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center gap-1.5 rounded-full border border-gold/30 bg-gold/5 px-3 py-1.5 text-xs text-cream md:gap-2 md:px-4 md:py-2 md:text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-display text-xs font-bold text-gold",
						children: ["GOAL ", g.n]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-cream/80",
						children: g.label
					})]
				}, g.n))
			})]
		})
	});
}
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 30
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
var staggerParent = {
	hidden: {},
	show: { transition: {
		staggerChildren: .12,
		delayChildren: .05
	} }
};
var tiltIn = {
	hidden: {
		opacity: 0,
		rotateX: -12,
		y: 40
	},
	show: {
		opacity: 1,
		rotateX: 0,
		y: 0,
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
var viewportOnce = {
	once: true,
	margin: "-80px"
};
var leaders_default = "/assets/leaders-719pShuy.jpg";
var pillars = [
	{
		title: "Mission",
		body: "Empower communities through creative expression, vocational training, and sustainable development."
	},
	{
		title: "Vision",
		body: "A world where creativity and opportunity are accessible to all, regardless of background."
	},
	{
		title: "Goal",
		body: "To build a Creative Social Impact Hub that creates lasting positive social change for vulnerable, underprivileged, and underserved communities through creativity in Nigeria."
	},
	{
		title: "Established",
		body: "Founded in 2022. What started as a small idea has grown into structured programs reaching hundreds."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative overflow-hidden bg-cream py-12 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: staggerParent,
				initial: "hidden",
				whileInView: "show",
				viewport: viewportOnce,
				className: "grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					variants: fadeUp,
					className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep md:mb-6",
					children: "Who We Are"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					variants: fadeUp,
					className: "text-display font-bold leading-[1.02] text-ink",
					style: { fontSize: "clamp(1.5rem, 4vw, 3rem)" },
					children: [
						"A creative social impact hub creating",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gold-deep",
							children: "lasting positive change"
						}),
						" for vulnerable and underserved communities in Nigeria."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: fadeUp,
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-3xl shadow-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: leaders_default,
							alt: "Revamp leadership",
							className: "h-full w-full object-cover",
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-ink/40 via-transparent to-transparent" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-4 -left-4 hidden h-16 w-16 rounded-full bg-gradient-gold shadow-gold animate-floaty md:-bottom-6 md:-left-6 md:h-24 md:w-24" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: staggerParent,
				initial: "hidden",
				whileInView: "show",
				viewport: viewportOnce,
				className: "mt-12 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-4 md:gap-6",
				children: pillars.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: fadeUp,
					className: "group relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 transition-transform hover:-translate-y-1 hover:shadow-gold md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mb-3 h-1 w-10 bg-gradient-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-display mb-2 text-xl font-bold text-ink md:text-2xl",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ink/70 leading-relaxed",
							children: p.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/5 transition-transform group-hover:scale-150" })
					]
				}, p.title))
			})]
		})
	});
}
var milestones = [
	{
		year: "2022",
		title: "Revamp Initiatives is founded",
		body: "A small idea to use creativity as a tool for change amongst Nigerian youth becomes an organization."
	},
	{
		year: "2022",
		title: "First impact program",
		body: "Early outreach and empowerment activities in underserved communities across Abuja."
	},
	{
		year: "2024",
		title: "Seed for Change launches",
		body: "Our flagship women-focused empowerment and art therapy program, plus a fashion label built on training and job creation."
	},
	{
		year: "2024",
		title: "Walk for Impact",
		body: "Intergenerational storytelling event honoring elders aged 60+ with interviews and cash support."
	},
	{
		year: "2025",
		title: "16 women fully empowered",
		body: "The Art Residency cohort completes training with tools, seed capital, and job placement pathways."
	},
	{
		year: "2026+",
		title: "Scaling across Africa",
		body: "Expanding Seed for Change to new communities and continents, becoming a leading creative social impact hub."
	}
];
function Journey() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "journey",
		className: "relative overflow-hidden bg-cream py-12 md:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-blue/10 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-0 bottom-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: staggerParent,
					initial: "hidden",
					whileInView: "show",
					viewport: viewportOnce,
					className: "max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						variants: fadeUp,
						className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue md:mb-4",
						children: "The Journey"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
						variants: fadeUp,
						className: "text-display font-bold leading-[1.02] text-ink",
						style: { fontSize: "clamp(1.5rem, 4vw, 3rem)" },
						children: [
							"From a single idea to a ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-blue italic",
								children: "movement"
							}),
							" across communities."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-12 md:mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue via-gold to-transparent md:left-1/2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ol, {
						variants: staggerParent,
						initial: "hidden",
						whileInView: "show",
						viewport: viewportOnce,
						className: "space-y-10 md:space-y-16",
						children: milestones.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
							variants: fadeUp,
							className: `relative grid gap-4 pl-14 md:grid gap-6 md:grid-cols-2 md:gap-12 md:pl-0 ${i % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-2 top-2 z-10 grid h-5 w-5 -translate-x-1/2 place-items-center rounded-full bg-gradient-blue shadow-[0_0_0_4px_var(--cream)] md:left-1/2 md:h-6 md:w-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-gold md:h-2 md:w-2" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: i % 2 === 0 ? "md:text-right" : "md:col-start-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-display text-3xl font-bold text-blue md:text-4xl",
										children: m.year
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-display mt-1 text-lg font-bold text-ink md:text-xl",
										children: m.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-ink/70 leading-relaxed md:mt-3",
										children: m.body
									})
								]
							})]
						}, m.title))
					})]
				})]
			})
		]
	});
}
function useCountUp(target, duration = 1800) {
	const [value, setValue] = (0, import_react.useState)(0);
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: .35
	});
	const startRef = (0, import_react.useRef)(null);
	const rafRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const step = (t) => {
			if (startRef.current === null) startRef.current = t;
			const p = Math.min(1, (t - startRef.current) / duration);
			const eased = 1 - Math.pow(1 - p, 3);
			setValue(Math.round(target * eased));
			if (p < 1) rafRef.current = requestAnimationFrame(step);
		};
		rafRef.current = requestAnimationFrame(step);
		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, [
		inView,
		target,
		duration
	]);
	return {
		ref,
		value
	};
}
var stats = [
	{
		value: 300,
		suffix: "+",
		label: "Children reached"
	},
	{
		value: 1e3,
		suffix: "+",
		label: "Youth in facilitation programs"
	},
	{
		value: 16,
		suffix: "",
		label: "Women trained in Art Residency"
	},
	{
		value: 10,
		suffix: "+",
		label: "Impact stories documented"
	},
	{
		value: 150,
		suffix: "+",
		label: "Slum beneficiaries fed"
	},
	{
		value: 100,
		suffix: "+",
		label: "Families supported with cash aid"
	},
	{
		value: 6,
		suffix: "+",
		label: "Vocational skill areas"
	},
	{
		value: 4,
		suffix: "",
		label: "Institutional partners"
	}
];
function Stat({ value, suffix, label }) {
	const { ref, value: n } = useCountUp(value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		ref,
		variants: fadeUp,
		whileHover: {
			rotateX: -6,
			rotateY: 6,
			scale: 1.02
		},
		transition: {
			type: "spring",
			stiffness: 200,
			damping: 20
		},
		style: { transformStyle: "preserve-3d" },
		className: "group relative rounded-3xl border border-gold/20 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-sm md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-display text-4xl font-bold text-gold gold-glow md:text-5xl",
				children: [n.toLocaleString(), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: suffix })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs uppercase tracking-wider text-cream/70 md:text-sm",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-3xl border border-transparent transition-colors group-hover:border-gold/40" })
		]
	});
}
function ImpactNumbers() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "impact",
		className: "relative overflow-hidden bg-ink py-12 text-cream md:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-blue/25 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 max-w-3xl md:mb-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold md:mb-4",
							children: "Our Impact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-display font-bold leading-[1.02]",
							style: { fontSize: "clamp(1.5rem, 4vw, 3rem)" },
							children: ["Numbers that carry ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "names, stories, and futures."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-sm text-cream/70 md:mt-6 md:text-base",
							children: "Over ₦50,000 distributed in direct cash assistance to displaced persons and vulnerable families, alongside sustained empowerment programs from Abuja to Borno."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: staggerParent,
					initial: "hidden",
					whileInView: "show",
					viewport: viewportOnce,
					className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6",
					style: { perspective: "1200px" },
					children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, { ...s }, s.label))
				})]
			})
		]
	});
}
var milestoneCards = [
	{
		year: "2024",
		title: "Seed for Change Inaugural Cohort",
		body: "The first SFC cohort completed training with graduation celebrations, empowering participants with practical skills and entrepreneurial confidence."
	},
	{
		year: "2025",
		title: "University of Maiduguri Partnership",
		body: "A landmark academic partnership with the University of Maiduguri, extending our reach into Borno State and enabling research-backed community development."
	},
	{
		year: "2025",
		title: "CWS Collaboration",
		body: "Joined forces with the Centre for Women's Studies to deepen gender-focused impact, research, and advocacy across our programs."
	},
	{
		year: "2026",
		title: "Ministry of Women Affairs",
		body: "A major institutional collaboration with the Federal Ministry of Women Affairs — a milestone that validates Revamp's grassroots model at the national policy level.",
		featured: true
	}
];
function BigStat({ value }) {
	const { ref, value: n } = useCountUp(value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "text-display text-5xl font-bold text-gold gold-glow md:text-6xl",
		children: [n.toLocaleString(), "+"]
	});
}
function Achievements() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "achievements",
		className: "relative overflow-hidden bg-ink py-12 text-cream md:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-blue/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: staggerParent,
						initial: "hidden",
						whileInView: "show",
						viewport: viewportOnce,
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								variants: fadeUp,
								className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold md:mb-4",
								children: "Our Achievements"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
								variants: fadeUp,
								className: "text-display font-bold leading-[1.02]",
								style: { fontSize: "clamp(1.5rem, 4vw, 3rem)" },
								children: [
									"Milestones that ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: "move the needle"
									}),
									" — and move people."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								variants: fadeUp,
								className: "mt-4 max-w-2xl text-sm text-cream/70 md:mt-6 md:text-base",
								children: "From empowering thousands of individuals to securing national-level partnerships, every achievement is a step toward lasting change."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 40
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: viewportOnce,
						transition: { duration: .7 },
						className: "mt-10 rounded-3xl border border-gold/20 bg-gradient-to-br from-white/5 to-transparent p-8 backdrop-blur-sm md:mt-14 md:p-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigStat, { value: 3e3 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm uppercase tracking-wider text-cream/60",
									children: "People Empowered"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-cream/80 md:text-base",
								children: "Over three thousand individuals across communities have been directly empowered through Revamp programs — from vocational training and creative workshops to cash assistance and mentorship. Each number represents a name, a story, and a future reshaped."
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						variants: staggerParent,
						initial: "hidden",
						whileInView: "show",
						viewport: viewportOnce,
						className: "mt-10 overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent p-8 md:mt-14 md:p-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeUp,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-3 inline-block w-fit rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink",
									children: "Flagship Program"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-display text-2xl font-bold text-gold md:text-3xl",
									children: "Seed for Change"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 leading-relaxed text-cream/80 md:text-lg",
									children: "SFC is different — it's not just a program, it's a transformational experience. Graduates leave with real skills, real confidence, and real futures. Every cohort is celebrated with graduation ceremonies that mark a new beginning."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-3",
									children: [
										"2024 — Inaugural cohort trained & graduated",
										"16 women fully empowered with tools & seed capital",
										"Graduation ceremonies celebrating each cohort's journey"
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 text-sm text-cream/85",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" }), item]
									}, item))
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 md:mt-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h3, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: viewportOnce,
							transition: { duration: .5 },
							className: "text-display mb-8 text-2xl font-bold text-cream md:text-3xl",
							children: "Key Milestones & Partnerships"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: staggerParent,
							initial: "hidden",
							whileInView: "show",
							viewport: viewportOnce,
							className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6",
							style: { perspective: "1200px" },
							children: milestoneCards.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								variants: fadeUp,
								whileHover: {
									rotateX: -4,
									rotateY: 4,
									scale: 1.02
								},
								transition: {
									type: "spring",
									stiffness: 200,
									damping: 20
								},
								style: { transformStyle: "preserve-3d" },
								className: `group relative flex flex-col rounded-3xl border p-6 backdrop-blur-sm md:p-8 ${m.featured ? "border-gold/40 bg-gradient-to-br from-gold/15 to-transparent" : "border-gold/20 bg-gradient-to-br from-white/5 to-transparent"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-display text-3xl font-bold text-gold gold-glow md:text-4xl",
										children: m.year
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "mt-2 text-display text-base font-bold text-cream md:text-lg",
										children: m.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 flex-1 text-xs leading-relaxed text-cream/70 md:text-sm",
										children: m.body
									}),
									m.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-4 inline-block w-fit rounded-full bg-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold",
										children: "Major Collaborator"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-3xl border border-transparent transition-colors group-hover:border-gold/40" })
								]
							}, m.title))
						})]
					})
				]
			})
		]
	});
}
var kitchen_default = "/assets/kitchen-Bymp3yR7.jpg";
var cameras_default = "/assets/cameras-DP0eMIH0.jpg";
var whiteboard_default = "/assets/whiteboard-CEefMvhg.jpg";
var photography_default = "/assets/photography-v_P6y4XR.jpg";
var seedObjectives = [
	"Train women in tailoring & entrepreneurship",
	"Create sustainable jobs and income",
	"Build a socially responsible fashion brand",
	"Reinvest proceeds back into communities"
];
var subPrograms = [
	{
		name: "Walk for Impact",
		img: whiteboard_default,
		blurb: "Preserving stories of Nigeria's elders."
	},
	{
		name: "Slum Outreach",
		img: cameras_default,
		blurb: "Direct intervention in underserved communities."
	},
	{
		name: "IDP Camp Durumi",
		img: photography_default,
		blurb: "Food, medical & cash assistance."
	},
	{
		name: "Kreative Campus",
		img: kitchen_default,
		blurb: "Skill-building creative training."
	}
];
function Programs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "programs",
		className: "relative overflow-hidden bg-cream py-12 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: staggerParent,
					initial: "hidden",
					whileInView: "show",
					viewport: viewportOnce,
					className: "max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						variants: fadeUp,
						className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep md:mb-4",
						children: "What We Do"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
						variants: fadeUp,
						className: "text-display font-bold leading-[1.02] text-ink",
						style: { fontSize: "clamp(1.5rem, 4vw, 3rem)" },
						children: [
							"Programs that turn creativity into ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold-deep italic",
								children: "livelihoods"
							}),
							"."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: staggerParent,
					initial: "hidden",
					whileInView: "show",
					viewport: viewportOnce,
					className: "mt-10 grid gap-8 overflow-hidden rounded-3xl bg-ink text-cream shadow-ink lg:grid-cols-2 md:mt-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: fadeUp,
						className: "relative min-h-[280px] lg:min-h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: kitchen_default,
								alt: "Seed for Change training",
								className: "absolute inset-0 h-full w-full object-cover",
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-ink/70 via-transparent to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-5 top-5 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink md:left-6 md:top-6 md:px-4 md:py-1.5",
								children: "Flagship"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: fadeUp,
						className: "flex flex-col justify-center p-6 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-display text-2xl font-bold text-gold md:text-4xl",
								children: "Seed for Change"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-cream/80 md:text-lg",
								children: "A women-focused empowerment and art therapy program, also a fashion brand built on training, empowerment, and job creation. Every piece produced carries a story of resilience, linking style with social change."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-wider text-cream/60 md:mt-6 md:gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-gold/30 px-3 py-1",
										children: "16 women trained"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-gold/30 px-3 py-1",
										children: "6+ skill areas"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-gold/30 px-3 py-1",
										children: "Launched 2024"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-2 md:mt-8 md:space-y-3",
								children: seedObjectives.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-sm text-cream/85",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" }), o]
								}, o))
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 md:mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-6 flex items-end justify-between gap-6 md:mb-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-display text-2xl font-bold text-ink md:text-4xl",
							children: "Community Outreach"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-2xl text-sm text-ink/70 md:mt-3 md:text-base",
							children: "Direct intervention in underserved communities, IDP camps, and slum areas. Food support, cash assistance, and preserving cultural narratives."
						})] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:snap-none md:grid-cols-4 md:gap-5 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
						children: subPrograms.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
							initial: {
								opacity: 0,
								y: 40
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: viewportOnce,
							transition: {
								duration: .6,
								delay: i * .08
							},
							whileHover: { y: -6 },
							className: "group relative w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl bg-ink text-cream md:w-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[3/4] overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.img,
									alt: p.name,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110",
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-5 md:p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-display text-lg font-bold text-gold",
									children: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm text-cream/80",
									children: p.blurb
								})]
							})]
						}, p.name))
					})]
				})
			]
		})
	});
}
var stories = [
	{
		date: "July 2024",
		name: "Abubakar Sadiq",
		body: "A young boy suffering from severe malnutrition was admitted to hospital after Revamp's intervention. He received essential medical care on the path toward restoring his health.",
		img: "https://i.imgur.com/bhu0XIq.jpg"
	},
	{
		date: "2024",
		name: "Sa'adatu Adamu",
		body: "A displaced woman from Gwoza, Borno State. Through medical assistance and cash support, she received the treatment she needed, along with a renewed sense of agency.",
		img: "https://i.imgur.com/evGlEHV.jpg"
	},
	{
		date: "1 Oct 2024",
		name: "Walk for Impact",
		body: "Five elderly men aged 60+ were interviewed to preserve their lived experiences. Each received cash support honoring the contributions of a lifetime.",
		img: "https://i.imgur.com/nIfszce.jpg"
	}
];
function ImpactStories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stories",
		className: "relative overflow-hidden bg-cream py-12 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: staggerParent,
				initial: "hidden",
				whileInView: "show",
				viewport: viewportOnce,
				className: "max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					variants: fadeUp,
					className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep md:mb-4",
					children: "Impact Stories"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					variants: fadeUp,
					className: "text-display font-bold leading-[1.02] text-ink",
					style: { fontSize: "clamp(1.5rem, 4vw, 3rem)" },
					children: [
						"Every number is a ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gold-deep",
							children: "person"
						}),
						"."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 flex flex-col gap-16 md:mt-16 md:gap-20",
				children: stories.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					initial: {
						opacity: 0,
						y: 60
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: viewportOnce,
					transition: {
						duration: .8,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: `grid items-center gap-8 md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-3xl shadow-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.img,
								alt: s.name,
								className: "aspect-[4/5] w-full object-cover",
								loading: "lazy"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-3 -right-3 hidden h-16 w-16 rounded-full bg-gradient-gold shadow-gold md:-bottom-4 md:-right-4 md:h-20 md:w-20" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep",
							children: s.date
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-display mt-3 font-bold leading-tight text-ink md:mt-4",
							style: { fontSize: "clamp(1.5rem, 3vw, 2.5rem)" },
							children: s.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base leading-relaxed text-ink/75 md:mt-6",
							children: s.body
						})
					] })]
				}, s.name))
			})]
		})
	});
}
var testimonials = [{
	quote: "Participating in the Seed for Change Creative Women Residency was a truly enriching experience for me. During the program, I learned new skills in culinary art that have expanded my creativity and confidence in the kitchen. It exposed me to new techniques, ideas, and ways of presenting food that I hadn't explored before. I'm grateful for the opportunity, and it has inspired me to keep growing and improving in my culinary journey.",
	name: "Garuba Aliyah Azumi",
	role: "Culinary Art",
	program: "Creative Women Residency",
	img: "/assets/garuba-testimonial-Bgx0AVjo.jpg"
}];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "testimonials",
		className: "relative overflow-hidden bg-ink py-12 text-cream md:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: staggerParent,
					initial: "hidden",
					whileInView: "show",
					viewport: viewportOnce,
					className: "mb-10 max-w-3xl md:mb-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						variants: fadeUp,
						className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold md:mb-4",
						children: "Resident Testimonials"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
						variants: fadeUp,
						className: "text-display font-bold leading-[1.02]",
						style: { fontSize: "clamp(1.5rem, 4vw, 3rem)" },
						children: [
							"In their ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gold",
								children: "own words"
							}),
							"."
						]
					})]
				}), testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					initial: {
						opacity: 0,
						y: 60
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: viewportOnce,
					transition: {
						duration: .8,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "grid items-center gap-8 md:grid-cols-[1fr_1.2fr] md:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 rounded-[2rem] bg-gradient-gold opacity-30 blur-2xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative overflow-hidden rounded-3xl border border-gold/30 shadow-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: t.img,
									alt: t.name,
									className: "aspect-[4/5] w-full object-cover",
									loading: "lazy"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-4 -right-4 hidden h-20 w-20 rounded-full bg-gradient-gold shadow-gold md:-bottom-5 md:-right-5 md:h-24 md:w-24" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "text-display absolute -left-2 -top-12 select-none text-[8rem] leading-none text-gold/20 md:-top-16 md:text-[12rem]",
								children: "“"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "relative text-base leading-relaxed text-cream/90 md:text-lg",
								children: t.quote
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex items-center gap-4 md:mt-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-10 bg-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-display text-xl font-bold text-gold md:text-2xl",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-xs uppercase tracking-widest text-cream/60 md:text-sm",
									children: [
										t.role,
										" · Seed for Change ",
										t.program
									]
								})] })]
							})
						]
					})]
				}, t.name))]
			})
		]
	});
}
var values = [
	{
		n: "01",
		title: "Inclusivity",
		body: "Women and youth valued regardless of background."
	},
	{
		n: "02",
		title: "Collaboration",
		body: "Working with volunteers, partners, and communities."
	},
	{
		n: "03",
		title: "Integrity",
		body: "Honesty, transparency, and accountability at every step."
	},
	{
		n: "04",
		title: "Compassion",
		body: "Empathy and a genuine desire to make impact."
	}
];
function CoreValues() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-ink py-12 text-cream md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-gold/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 max-w-3xl md:mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold md:mb-4",
					children: "Core Values"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-display font-bold leading-[1.02]",
					style: { fontSize: "clamp(1.5rem, 4vw, 3rem)" },
					children: [
						"The principles that ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: "shape every project"
						}),
						"."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: staggerParent,
				initial: "hidden",
				whileInView: "show",
				viewport: viewportOnce,
				className: "grid gap-4 md:grid-cols-2 md:gap-6",
				style: { perspective: "1200px" },
				children: values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: tiltIn,
					whileHover: {
						rotateY: 4,
						rotateX: -2
					},
					style: { transformStyle: "preserve-3d" },
					className: "group flex gap-5 rounded-3xl border border-cream/10 bg-gradient-to-br from-white/[0.03] to-transparent p-6 transition-colors hover:border-gold/40 md:gap-6 md:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-display shrink-0 text-4xl font-bold text-gold gold-glow md:text-5xl",
						children: v.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-display text-xl font-bold text-cream md:text-2xl",
						children: v.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-cream/70 leading-relaxed md:mt-3",
						children: v.body
					})] })]
				}, v.n))
			})]
		})]
	});
}
var partners = [
	"Federal Ministry of Women Affairs",
	"Office of the Special Assistant to the President on Art & Culture",
	"Revamp Art Media Agency"
];
function Partners() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-ink/10 bg-cream py-10 md:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep md:mb-8",
				children: "Partners & Supporters"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-6",
				children: partners.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: viewportOnce,
					transition: {
						duration: .5,
						delay: i * .08
					},
					className: "flex items-center justify-center rounded-xl border border-ink/10 bg-white p-5 text-center text-sm font-medium text-ink/80 transition-colors hover:border-gold/50 hover:text-ink md:p-6",
					children: p
				}, p))
			})]
		})
	});
}
function LookingAhead() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-ink py-12 text-cream md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0",
			style: { perspective: "1000px" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[10%] top-[15%] h-16 w-16 rounded-full bg-gradient-gold opacity-70 blur-md animate-floaty md:h-20 md:w-20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[15%] top-[25%] h-24 w-24 rounded-full border-2 border-gold/40 animate-drift md:h-32 md:w-32" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute left-[20%] bottom-[15%] h-12 w-12 rotate-45 bg-gold/70 animate-floaty md:h-16 md:w-16",
					style: { animationDelay: "2s" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[10%] bottom-[10%] h-20 w-20 rounded-full bg-gold/20 blur-xl animate-pulse-gold md:h-28 md:w-28" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-4xl px-6 text-center md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: viewportOnce,
					transition: { duration: .5 },
					className: "mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold md:mb-6",
					children: "Looking Ahead"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					initial: {
						opacity: 0,
						y: 40
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: viewportOnce,
					transition: {
						duration: .8,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "text-display font-bold leading-[1.02]",
					style: { fontSize: "clamp(1.5rem, 5vw, 4rem)" },
					children: [
						"Committed to expanding ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold gold-glow",
							children: "Seed for Change"
						}),
						" across Africa."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: { opacity: 0 },
					whileInView: { opacity: 1 },
					viewport: viewportOnce,
					transition: {
						duration: .8,
						delay: .2
					},
					className: "mt-5 text-base leading-relaxed text-cream/70 md:mt-8 md:text-lg",
					children: "We aim to become a leading creative social impact hub on the continent. One community, one story, one skill at a time."
				})
			]
		})]
	});
}
var options = [
	"Partnership",
	"Sponsorship",
	"Volunteering",
	"Mentorship",
	"Donate Resources"
];
function Support() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "support",
		className: "relative overflow-hidden bg-gradient-gold py-12 md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-10 top-5 h-48 w-48 rounded-full border-2 border-ink/10 animate-drift md:-left-20 md:top-10 md:h-64 md:w-64" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-5 bottom-5 h-36 w-36 rounded-full bg-ink/5 blur-2xl animate-floaty md:right-10 md:bottom-10 md:h-48 md:w-48" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-5xl px-6 text-center md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					initial: {
						opacity: 0,
						y: 40
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: viewportOnce,
					transition: { duration: .8 },
					className: "text-display font-bold leading-[0.95] text-ink",
					style: { fontSize: "clamp(2rem, 6vw, 5rem)" },
					children: [
						"Be Part of the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic",
							children: "Change"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: { opacity: 0 },
					whileInView: { opacity: 1 },
					viewport: viewportOnce,
					transition: {
						duration: .7,
						delay: .2
					},
					className: "mx-auto mt-4 max-w-2xl text-ink/80 md:mt-6 md:text-lg",
					children: "There's a role for everyone. Choose how you'd like to move creativity forward with us."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: staggerParent,
					initial: "hidden",
					whileInView: "show",
					viewport: viewportOnce,
					className: "mt-8 flex flex-wrap justify-center gap-2 md:mt-10 md:gap-3",
					children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						variants: fadeUp,
						whileHover: {
							scale: 1.05,
							y: -3
						},
						whileTap: { scale: .97 },
						className: "cursor-pointer rounded-full border-2 border-ink/80 bg-ink/5 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-gold md:px-5 md:py-2.5",
						children: o
					}, o))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
					href: "mailto:revampinitiatives@gmail.com",
					initial: {
						opacity: 0,
						scale: .9
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: viewportOnce,
					transition: {
						duration: .6,
						delay: .3
					},
					whileHover: { scale: 1.04 },
					whileTap: { scale: .96 },
					className: "mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-base font-semibold text-gold shadow-ink transition-transform md:mt-12 md:gap-3 md:px-9 md:py-5 md:text-lg",
					children: ["Get In Touch", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						children: "→"
					})]
				})
			]
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var inquiryTypes = [
	"General Inquiry",
	"Partnership",
	"Volunteering",
	"Sponsorship",
	"Media & Press",
	"Other"
];
function ContactForm() {
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		inquiryType: "",
		message: ""
	});
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [isSubmitted, setIsSubmitted] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const validate = () => {
		const newErrors = {};
		if (!formData.name.trim()) newErrors.name = "Name is required";
		if (!formData.email.trim()) newErrors.email = "Email is required";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address";
		if (!formData.inquiryType) newErrors.inquiryType = "Please select an inquiry type";
		if (!formData.message.trim()) newErrors.message = "Message is required";
		else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
		return newErrors;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const newErrors = validate();
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}
		setErrors({});
		setIsSubmitting(true);
		try {
			if (!(await fetch("https://formspree.io/f/meeyevoa", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					inquiryType: formData.inquiryType,
					message: formData.message
				})
			})).ok) throw new Error("Failed to submit form");
			setIsSubmitted(true);
			setTimeout(() => {
				setIsSubmitted(false);
				setFormData({
					name: "",
					email: "",
					inquiryType: "",
					message: ""
				});
			}, 5e3);
		} catch {
			setErrors({ submit: "Something went wrong. Please try again." });
		} finally {
			setIsSubmitting(false);
		}
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value
		}));
		if (errors[name]) setErrors((prev) => ({
			...prev,
			[name]: ""
		}));
	};
	const handleSelectChange = (value) => {
		setFormData((prev) => ({
			...prev,
			inquiryType: value
		}));
		if (errors.inquiryType) setErrors((prev) => ({
			...prev,
			inquiryType: ""
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative overflow-hidden bg-cream py-12 md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 top-10 h-32 w-32 rounded-full border-2 border-gold/20 animate-drift" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-10 bottom-10 h-24 w-24 rounded-full bg-gold/10 blur-2xl animate-floaty" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-4xl px-6 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: viewportOnce,
				transition: { duration: .6 },
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scale: .8
						},
						whileInView: {
							opacity: 1,
							scale: 1
						},
						viewport: viewportOnce,
						transition: { duration: .4 },
						className: "mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gold/15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 text-gold" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-display font-bold leading-[1.05] text-ink",
						style: { fontSize: "clamp(1.5rem, 5vw, 2.5rem)" },
						children: ["Get in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: "Touch"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-xl text-sm text-ink/70 md:text-base",
						children: "Have questions or ideas? We'd love to hear from you."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: staggerParent,
				initial: "hidden",
				whileInView: "show",
				viewport: viewportOnce,
				className: "mt-8 rounded-2xl bg-white p-5 shadow-lg md:mt-10 md:p-8",
				style: { boxShadow: "0 20px 60px -20px rgba(232, 168, 56, 0.15)" },
				children: isSubmitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .9
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					className: "flex flex-col items-center py-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { scale: 0 },
							animate: { scale: 1 },
							transition: {
								type: "spring",
								stiffness: 200,
								damping: 15
							},
							className: "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-7 w-7 text-green-600" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-display text-xl font-bold text-ink",
							children: "Message Sent!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-ink/70",
							children: "Thank you for reaching out. We'll get back to you shortly."
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-4 md:space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeUp,
							className: "grid gap-4 md:grid-cols-2 md:gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "name",
										className: "text-xs font-semibold text-ink md:text-sm",
										children: "Full Name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "name",
										name: "name",
										type: "text",
										placeholder: "Adaobi Nwosu",
										value: formData.name,
										onChange: handleChange,
										className: `h-10 border-ink/20 bg-cream/50 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:ring-gold ${errors.name ? "border-red-500" : ""}`
									}),
									errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-red-500",
										children: errors.name
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "email",
										className: "text-xs font-semibold text-ink md:text-sm",
										children: "Email Address"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "email",
										name: "email",
										type: "email",
										placeholder: "adaobi@example.com",
										value: formData.email,
										onChange: handleChange,
										className: `h-10 border-ink/20 bg-cream/50 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:ring-gold ${errors.email ? "border-red-500" : ""}`
									}),
									errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-red-500",
										children: errors.email
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeUp,
							className: "space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "inquiryType",
									className: "text-xs font-semibold text-ink md:text-sm",
									children: "Inquiry Type"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "inquiryType",
										name: "inquiryType",
										value: formData.inquiryType,
										onChange: (e) => handleSelectChange(e.target.value),
										className: `flex h-10 w-full appearance-none rounded-md border border-ink/20 bg-cream/50 px-3 py-2 pr-10 text-sm text-ink transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold ${errors.inquiryType ? "border-red-500" : ""}`,
										style: {
											backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%230d0d0d' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
											backgroundPosition: "right 0.75rem center",
											backgroundRepeat: "no-repeat",
											backgroundSize: "1.25rem"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											children: "Select inquiry type"
										}), inquiryTypes.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: type,
											children: type
										}, type))]
									})
								}),
								errors.inquiryType && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-red-500",
									children: errors.inquiryType
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeUp,
							className: "space-y-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "message",
									className: "text-xs font-semibold text-ink md:text-sm",
									children: "Your Message"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "message",
									name: "message",
									placeholder: "Tell us how we can help...",
									rows: 4,
									value: formData.message,
									onChange: handleChange,
									className: `min-h-[80px] resize-none border-ink/20 bg-cream/50 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:ring-gold ${errors.message ? "border-red-500" : ""}`
								}),
								errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-red-500",
									children: errors.message
								}),
								errors.submit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-red-500",
									children: errors.submit
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeUp,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: isSubmitting,
								className: "group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-gold transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 md:w-auto md:px-8 md:py-3.5",
								style: { boxShadow: "0 8px 30px -10px rgba(13, 13, 13, 0.4)" },
								children: isSubmitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-gold/30 border-t-gold" }), "Sending..."] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Send Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
									size: 16,
									className: "transition-transform group-hover:translate-x-1"
								})] })
							})
						})
					]
				})
			})]
		})]
	});
}
var contacts = [{
	icon: Mail,
	label: "revampinitiatives@gmail.com",
	href: "mailto:revampinitiatives@gmail.com"
}, {
	icon: Phone,
	label: "0909 000 9999",
	href: "tel:09090009999"
}];
var socials = [
	{
		icon: Instagram,
		label: "@therevamp_initiatives",
		href: "https://instagram.com/therevamp_initiatives"
	},
	{
		icon: Facebook,
		label: "The Revamp Initiatives",
		href: "https://facebook.com/TheRevampInitiatives"
	},
	{
		icon: Music2,
		label: "@therevampinitiatives",
		href: "https://tiktok.com/@therevampinitiatives"
	},
	{
		icon: Linkedin,
		label: "Revamp Initiatives",
		href: "https://linkedin.com/company/revamp-initiatives"
	},
	{
		icon: Globe,
		label: "therevampinitiatives.org",
		href: "https://www.therevampinitiatives.org"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-ink text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-16 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "Revamp Initiatives",
							className: "h-12 w-12 rounded-full"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-display text-2xl font-bold text-gold",
							children: "Revamp Initiatives"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md text-cream/70",
						children: "A Nigerian creative social impact hub empowering vulnerable communities through creativity, skills, and sustainable development."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-display text-sm font-semibold uppercase tracking-[0.25em] text-gold",
						children: "Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3 text-sm text-cream/80",
						children: contacts.map(({ icon: Icon, label, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href,
							className: "group inline-flex items-center gap-3 hover:text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-8 w-8 items-center justify-center rounded-full border border-cream/15 bg-cream/5 transition-colors group-hover:border-gold/60 group-hover:bg-gold/10 group-hover:text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 15,
									strokeWidth: 2
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
						}) }, label))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-display text-sm font-semibold uppercase tracking-[0.25em] text-gold",
							children: "Follow"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3 text-sm text-cream/80",
							children: socials.map(({ icon: Icon, label, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": label,
								className: "group inline-flex items-center gap-3 hover:text-gold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-8 w-8 items-center justify-center rounded-full border border-cream/15 bg-cream/5 transition-colors group-hover:border-gold/60 group-hover:bg-gold/10 group-hover:text-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										size: 15,
										strokeWidth: 2
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
							}) }, label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex gap-2",
							children: socials.map(({ icon: Icon, label, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": label,
								className: "flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-ink",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									size: 16,
									strokeWidth: 2
								})
							}, `chip-${label}`))
						})
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 flex flex-col justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50 md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Revamp Initiatives. Encourage creativity for social impact."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Made with intention in Nigeria." })]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative bg-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SDGStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Journey, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactNumbers, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Achievements, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Programs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactStories, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreValues, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Partners, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LookingAhead, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Support, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
