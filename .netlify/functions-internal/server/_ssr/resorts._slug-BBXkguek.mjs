import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { a as signalsFor, i as pagesFor, t as PAGE_TYPES } from "./resorts-ClO0P_d2.mjs";
import { t as Card } from "./card-BfBj_YIE.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { t as Progress } from "./progress-DOIEKRJF.mjs";
import { A as Plane, B as MapPin, Ct as ChevronRight, D as Radar, Ot as Car, Rt as ArrowLeft, at as Flame, b as Sparkles, bt as CircleCheck, d as Trees, dt as Dumbbell, gt as Clock, i as WandSparkles, j as Phone, lt as ExternalLink, mt as Coffee, n as Wifi, o as UtensilsCrossed, ot as FileText, p as TramFront, r as Waves, s as Users, t as X, v as Star, wt as ChevronLeft } from "../_libs/lucide-react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-CCJRliUM.mjs";
import { t as Route } from "./resorts._slug-41F51mfQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resorts._slug-BBXkguek.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function ImageCarouselModal({ images, open, onClose, initialIndex = 0 }) {
	const [index, setIndex] = (0, import_react.useState)(initialIndex);
	(0, import_react.useEffect)(() => {
		if (open) setIndex(initialIndex);
	}, [open, initialIndex]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const handler = (e) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
			if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
		};
		window.addEventListener("keydown", handler);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", handler);
			document.body.style.overflow = "";
		};
	}, [
		open,
		images.length,
		onClose
	]);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm animate-in fade-in",
		onClick: onClose,
		role: "dialog",
		"aria-modal": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				onClick: onClose,
				className: "absolute top-4 right-4 z-10 h-11 w-11 rounded-full bg-white/10 text-white hover:bg-white/20",
				"aria-label": "Close (Esc)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				onClick: (e) => {
					e.stopPropagation();
					setIndex((i) => (i - 1 + images.length) % images.length);
				},
				className: "absolute left-4 md:left-8 z-10 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20",
				"aria-label": "Previous",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				onClick: (e) => {
					e.stopPropagation();
					setIndex((i) => (i + 1) % images.length);
				},
				className: "absolute right-4 md:right-8 z-10 h-12 w-12 rounded-full bg-white/10 text-white hover:bg-white/20",
				"aria-label": "Next",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-col items-center justify-center gap-4 max-w-6xl w-full px-16 md:px-24",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images[index],
						alt: `Image ${index + 1} of ${images.length}`,
						className: "max-h-[80vh] w-auto rounded-lg object-contain shadow-2xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-white/80 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								index + 1,
								" / ",
								images.length
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/40",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/60",
								children: "Esc to close · ← → to navigate"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 overflow-x-auto max-w-full pb-1",
						children: images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIndex(i),
							className: cn("h-14 w-20 flex-shrink-0 rounded overflow-hidden ring-2 transition", i === index ? "ring-primary-glow" : "ring-transparent opacity-50 hover:opacity-100"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: "",
								className: "h-full w-full object-cover"
							})
						}, i))
					})
				]
			})
		]
	});
}
var STOCK = [
	"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80",
	"https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80",
	"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=80",
	"https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=80",
	"https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=1600&q=80",
	"https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80",
	"https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=1600&q=80",
	"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1600&q=80",
	"https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1600&q=80",
	"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1600&q=80",
	"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=1600&q=80",
	"https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=1600&q=80"
];
function ResortDetail() {
	const { resort } = Route.useLoaderData();
	const pages = (0, import_react.useMemo)(() => pagesFor(resort), [resort]);
	const signals = (0, import_react.useMemo)(() => signalsFor(resort), [resort]);
	const [galleryOpen, setGalleryOpen] = (0, import_react.useState)(false);
	const [galleryIndex, setGalleryIndex] = (0, import_react.useState)(0);
	const images = (0, import_react.useMemo)(() => [resort.image, ...STOCK], [resort.image]);
	const openGallery = (i) => {
		setGalleryIndex(i);
		setGalleryOpen(true);
	};
	const quickFacts = [
		{
			label: "Check-in",
			value: "2:00 PM"
		},
		{
			label: "Check-out",
			value: "11:00 AM"
		},
		{
			label: "Rooms",
			value: "68 keys"
		},
		{
			label: "Dining",
			value: "Multi-cuisine"
		}
	];
	const experiences = [
		{
			title: "Backwater Cruise",
			desc: "Sunset kettuvallam ride on Vembanad",
			img: STOCK[2]
		},
		{
			title: "Ayurveda Spa",
			desc: "Traditional Kerala wellness therapies",
			img: STOCK[5]
		},
		{
			title: "Cultural Evenings",
			desc: "Kathakali & folk performances",
			img: STOCK[6]
		},
		{
			title: "Nature Walks",
			desc: "Guided walks through coconut groves",
			img: STOCK[9]
		}
	];
	const rooms = [
		{
			name: "Deluxe Room",
			size: "320 sq ft",
			occupancy: "2 adults",
			img: STOCK[4],
			price: 8500
		},
		{
			name: "Premium Suite",
			size: "480 sq ft",
			occupancy: "2 adults + 1 child",
			img: STOCK[3],
			price: 12500
		},
		{
			name: "Family Villa",
			size: "720 sq ft",
			occupancy: "4 adults",
			img: STOCK[7],
			price: 18500
		}
	];
	const amenities = [
		{
			icon: Waves,
			label: "Swimming Pool"
		},
		{
			icon: UtensilsCrossed,
			label: "Multi-cuisine Restaurant"
		},
		{
			icon: Coffee,
			label: "24hr Coffee Shop"
		},
		{
			icon: Wifi,
			label: "Complimentary Wi-Fi"
		},
		{
			icon: Dumbbell,
			label: "Fitness Centre"
		},
		{
			icon: Car,
			label: "Valet Parking"
		},
		{
			icon: Flame,
			label: "Bonfire & BBQ"
		},
		{
			icon: Users,
			label: "Kids Club"
		},
		{
			icon: Trees,
			label: "Landscaped Gardens"
		}
	];
	const nearby = [
		{
			name: "Vembanad Lake",
			dist: "0.1 km",
			type: "Nature",
			icon: Waves
		},
		{
			name: "Alleppey Beach",
			dist: "12 km",
			type: "Beach",
			icon: Waves
		},
		{
			name: "Krishnapuram Palace",
			dist: "18 km",
			type: "Heritage",
			icon: Trees
		},
		{
			name: "Marari Beach",
			dist: "24 km",
			type: "Beach",
			icon: Waves
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-[1600px] mx-auto pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-0 z-30 backdrop-blur bg-background/85 border-b",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-6 lg:px-8 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/resorts",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4 mr-1" }), " All resorts"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: resort.url,
								target: "_blank",
								rel: "noreferrer",
								children: ["Live microsite ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5 ml-1" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/ai-mode",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 mr-1" }), " Manage AI"]
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-[65vh] min-h-[420px] max-h-[720px] overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: resort.image,
						alt: resort.name,
						className: "w-full h-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-x-0 bottom-0 px-6 lg:px-12 pb-10 lg:pb-14 text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-4xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm text-white/90 mb-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }),
									" ",
									resort.location,
									", ",
									resort.state,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "opacity-50",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [resort.region, " India"] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-4xl lg:text-6xl font-bold tracking-tight leading-[1.05]",
								children: resort.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed font-light",
								children: resort.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									className: "bg-white/15 border-white/25 text-white backdrop-blur px-3 py-1",
									children: resort.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 text-sm",
									children: [Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `h-4 w-4 ${i < 4 ? "fill-white text-white" : "text-white/40"}` }, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-1 text-white/80",
										children: "4.6 · 1,240 reviews"
									})]
								})]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-4 px-6 lg:px-12",
					children: quickFacts.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-5 border-r last:border-r-0 md:pr-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wider text-muted-foreground",
							children: f.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-lg font-semibold mt-1",
							children: f.value
						})]
					}, f.label))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-6 lg:px-12 py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-4 grid-rows-2 gap-2 h-[420px] rounded-2xl overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => openGallery(0),
						className: "col-span-2 row-span-2 relative group overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: images[0],
							alt: "",
							className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						})
					}), [
						1,
						2,
						3,
						4
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => openGallery(i),
						className: "relative group overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: images[i],
							alt: "",
							className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						}), i === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-0 bg-black/50 flex items-center justify-center text-white font-medium",
							children: [
								"+",
								images.length - 5,
								" photos"
							]
						})]
					}, i))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageCarouselModal, {
					open: galleryOpen,
					onClose: () => setGalleryOpen(false),
					images,
					initialIndex: galleryIndex
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-6 lg:px-12 pb-12 grid lg:grid-cols-3 gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-[0.2em] text-primary font-medium",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold mt-2",
							children: "A retreat where nature writes the story"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-4 text-muted-foreground leading-relaxed",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: resort.blurb }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Wake to birdsong and the gentle lap of water. Spend unhurried mornings watching mist lift off the horizon, afternoons drifting through curated experiences, and evenings under a canopy of stars. Every detail — from the architecture to the plate — is designed to slow the world down." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
									"Sterling ",
									resort.shortName.replace(/^Sterling\s*/, ""),
									" pairs the character of ",
									resort.location,
									" with the effortless comforts you expect from a modern retreat. It's a place to reconnect — with family, with nature, and with yourself."
								] })
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-4 pt-6 border-t",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlight, {
								n: resort.pagesGenerated,
								label: "Curated experiences"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlight, {
								n: 68,
								label: "Elegant keys"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlight, {
								n: 4.6,
								label: "Guest rating",
								decimals: 1
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "lg:sticky lg:top-20 lg:self-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6 space-y-4 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: "Starting from"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline gap-2 mt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-3xl font-bold",
										children: "₹8,500"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm text-muted-foreground",
										children: "/ night"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground mt-1",
									children: "Taxes extra · Free cancellation"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "w-full",
								size: "lg",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: resort.url,
									target: "_blank",
									rel: "noreferrer",
									children: ["Book on live microsite ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4 ml-1" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4 border-t space-y-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " +91 44 3357 3300"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, { className: "h-4 w-4" }), " Nearest airport · 90 km"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TramFront, { className: "h-4 w-4" }), " Nearest railway · 24 km"]
									})
								]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-6 lg:px-12 py-12 bg-muted/30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-end justify-between mb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.2em] text-primary font-medium",
						children: "Experiences"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold mt-2",
						children: "Things to remember, long after"
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4",
					children: experiences.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group cursor-pointer",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/5] rounded-xl overflow-hidden mb-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: e.img,
									alt: "",
									className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold",
								children: e.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-muted-foreground mt-0.5",
								children: e.desc
							})
						]
					}, e.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-6 lg:px-12 py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-end justify-between mb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.2em] text-primary font-medium",
						children: "Rooms & Suites"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold mt-2",
						children: "Where every stay feels considered"
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-3 gap-6",
					children: rooms.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "overflow-hidden p-0 group hover:shadow-violet transition-all duration-300",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: r.img,
								alt: r.name,
								className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold",
									children: r.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm text-muted-foreground mt-1",
									children: [
										r.size,
										" · ",
										r.occupancy
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-end justify-between mt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: "from"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xl font-bold",
										children: ["₹", r.price.toLocaleString()]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										variant: "ghost",
										size: "sm",
										children: ["Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 ml-1" })]
									})]
								})
							]
						})]
					}, r.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-6 lg:px-12 py-12 bg-muted/30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.2em] text-primary font-medium",
						children: "Amenities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold mt-2",
						children: "Everything, taken care of"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3",
					children: amenities.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-xl border bg-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-2 rounded-lg bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.icon, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: a.label
						})]
					}, a.label))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 lg:px-12 py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2 gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-[0.2em] text-primary font-medium",
							children: "Location"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl font-bold mt-2",
							children: ["In the heart of ", resort.location]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-muted-foreground leading-relaxed",
							children: [
								"A gateway to ",
								resort.location,
								"'s finest experiences — from natural wonders to cultural gems, everything you'd travel here for is a short drive away."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 space-y-2",
							children: nearby.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 rounded-xl border bg-card p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "p-2 rounded-lg bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.icon, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-medium text-sm",
											children: n.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: n.type
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-semibold text-primary",
										children: n.dist
									})
								]
							}, n.name))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-primary/5 to-accent border relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 flex items-center justify-center text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-10 w-10 mx-auto mb-2 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-sm font-medium",
										children: [
											resort.location,
											", ",
											resort.state
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs",
										children: "Interactive map placeholder"
									})
								]
							})
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-6 lg:px-12 py-12 border-t bg-muted/20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs uppercase tracking-[0.2em] text-primary font-medium flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " AEO / GEO Admin"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold mt-2",
							children: "Manage this microsite"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => toast.success("Agent run queued", { description: `${PAGE_TYPES.length} agents scheduled for ${resort.shortName}.` }),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "h-4 w-4 mr-1" }), " Launch agents"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 md:grid-cols-5 gap-3 mb-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniMetric, {
								icon: FileText,
								label: "Pages",
								value: resort.pagesGenerated,
								accent: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniMetric, {
								icon: CircleCheck,
								label: "Approved",
								value: resort.pagesApproved
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniMetric, {
								icon: Clock,
								label: "Pending",
								value: resort.pagesPending,
								warn: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniMetric, {
								icon: Radar,
								label: "Signals",
								value: resort.signals
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniMetric, {
								icon: Sparkles,
								label: "AEO / GEO",
								value: `${resort.aeoScore}/${resort.geoScore}`
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
						defaultValue: "pages",
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
								className: "flex-wrap h-auto",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
										value: "pages",
										children: [
											"Pages (",
											pages.length,
											")"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
										value: "signals",
										children: [
											"Signals (",
											signals.length,
											")"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										value: "metadata",
										children: "Metadata"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
										value: "seo",
										children: "SEO / Schema"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "pages",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PagesList, {
									pages,
									resortShort: resort.shortName
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "signals",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignalsList, { signals })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "metadata",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetadataForm, { resortName: resort.name })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "seo",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "p-6 space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Meta title",
											defaultValue: `${resort.name} — Book Now`,
											wide: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Meta description",
											defaultValue: resort.blurb,
											wide: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Canonical URL",
											defaultValue: resort.url,
											wide: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Structured data (LodgingBusiness)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											rows: 6,
											defaultValue: `{ "@context": "https://schema.org", "@type": "Resort", "name": "${resort.name}", "address": { "@type": "PostalAddress", "addressLocality": "${resort.location}", "addressRegion": "${resort.state}" } }`,
											className: "font-mono text-xs"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-sm text-muted-foreground w-24",
													children: "AEO score"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex-1",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: resort.aeoScore })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-sm font-semibold",
													children: [resort.aeoScore, "/100"]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-sm text-muted-foreground w-24",
													children: "GEO score"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex-1",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: resort.geoScore })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-sm font-semibold",
													children: [resort.geoScore, "/100"]
												})
											]
										})
									]
								})
							})
						]
					})
				]
			})
		]
	});
}
function Highlight({ n, label, decimals }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-3xl font-bold text-primary",
		children: decimals ? n.toFixed(decimals) : n
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-xs text-muted-foreground mt-0.5",
		children: label
	})] });
}
function MetadataForm({ resortName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-6 space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-2 gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Display name",
					defaultValue: resortName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Property code",
					placeholder: "e.g. STR-MUN-01"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Tagline",
					placeholder: "One-line hook shown on cards",
					wide: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Long description",
					placeholder: "Full narrative used across AEO answers",
					wide: true,
					multiline: true
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-end gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				children: "Cancel"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => toast.success("Metadata saved"),
				children: "Save changes"
			})]
		})]
	});
}
function Field({ label, placeholder, defaultValue, wide, multiline }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: wide ? "md:col-span-2 space-y-1" : "space-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			className: "text-xs uppercase text-muted-foreground",
			children: label
		}), multiline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
			rows: 4,
			placeholder,
			defaultValue
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			placeholder,
			defaultValue
		})]
	});
}
function MiniMetric({ icon: Icon, label, value, accent, warn }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-3 flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `p-2 rounded-md ${accent ? "bg-primary/10 text-primary" : warn ? "bg-warning/20 text-warning-foreground" : "bg-muted text-muted-foreground"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-semibold text-sm",
				children: value
			})]
		})]
	});
}
function PagesList({ pages, resortShort }) {
	const grouped = pages.reduce((acc, p) => {
		(acc[p.type] ||= []).push(p);
		return acc;
	}, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "p-4 gradient-soft flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-sm font-semibold",
				children: [pages.length, " hyperlocal pages generated"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-muted-foreground",
				children: "Grouped by page-type. Approve, edit or regenerate."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => toast.success(`Agent run queued for ${resortShort}`),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 mr-1" }), " Generate more"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
			defaultValue: Object.keys(grouped)[0],
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
				className: "flex-wrap h-auto",
				children: PAGE_TYPES.filter((t) => grouped[t.key]).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsTrigger, {
					value: t.key,
					children: [
						t.label,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "ml-2",
							children: grouped[t.key].length
						})
					]
				}, t.key))
			}), PAGE_TYPES.map((t) => grouped[t.key] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
				value: t.key,
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground mb-1",
					children: t.desc
				}), grouped[t.key].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageRow, { page: p }, p.id))]
			}, t.key) : null)]
		})]
	});
}
function PageRow({ page }) {
	const statusColor = page.status === "approved" ? "bg-success/15 text-success border-success/30" : page.status === "pending" ? "bg-warning/20 text-warning-foreground border-warning/40" : "bg-muted text-muted-foreground border-border";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "p-3 flex flex-wrap items-center gap-3 hover:shadow-card transition",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4 text-primary shrink-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-medium text-sm truncate",
					children: page.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs text-muted-foreground truncate",
					children: [
						"/",
						page.slug,
						" · ",
						page.wordCount,
						" words · by ",
						page.agent
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1",
				children: page.keywords.slice(0, 3).map((k, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "secondary",
					className: "text-[10px]",
					children: k
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs font-semibold text-primary w-12 text-right",
				children: page.score
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "outline",
				className: statusColor,
				children: page.status
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: "ghost",
				children: "Preview"
			})
		]
	});
}
function SignalsList({ signals }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "divide-y",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-12 gap-2 px-4 py-2 bg-muted/50 text-xs font-medium text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-4",
						children: "Query"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-2",
						children: "Source"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-1",
						children: "Intent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-1 text-right",
						children: "Volume"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-1 text-right",
						children: "Diff."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-2",
						children: "Suggested page"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-1 text-right",
						children: "Opp."
					})
				]
			}), signals.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-12 gap-2 px-4 py-3 items-center text-sm hover:bg-accent transition",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-4 font-medium truncate",
						children: s.query
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							children: s.source
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-1 text-xs",
						children: s.intent
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-1 text-right tabular-nums",
						children: s.volume.toLocaleString()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-1 text-right tabular-nums",
						children: s.difficulty
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-2 text-xs text-muted-foreground truncate",
						children: PAGE_TYPES.find((p) => p.key === s.suggestedType)?.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "col-span-1 text-right font-semibold text-primary",
						children: s.opportunity
					})
				]
			}, s.id))]
		})
	});
}
//#endregion
export { ResortDetail as component };
