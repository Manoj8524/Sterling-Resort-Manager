import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Card } from "./card-BfBj_YIE.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { B as MapPin, Ct as ChevronRight, Ft as Award, Ot as Car, Rt as ArrowLeft, S as Share2, V as Mail, _ as Sun, b as Sparkles, dt as Dumbbell, f as TreePine, ht as Cloud, j as Phone, jt as CalendarDays, k as Play, kt as Camera, lt as ExternalLink, mt as Coffee, n as Wifi, o as UtensilsCrossed, r as Waves, s as Users, tt as Heart, v as Star } from "../_libs/lucide-react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./microsite._slug-BRNJ6h3X.mjs";
import { i as TabsTrigger, n as TabsContent, r as TabsList, t as Tabs } from "./tabs-CCJRliUM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/microsite._slug-BhY458Qi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Microsite() {
	const { resort } = Route.useLoaderData();
	const [saved, setSaved] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b bg-card/95 backdrop-blur sticky top-0 z-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-6xl mx-auto flex items-center gap-3 px-4 h-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							variant: "ghost",
							className: "gap-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/resorts",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to dashboard"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs text-muted-foreground min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								className: "text-[10px]",
								children: "Live microsite preview"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "truncate font-mono",
								children: ["/microsite/", resort.slug]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ml-auto flex items-center gap-2 text-xs",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: resort.url,
								target: "_blank",
								rel: "noreferrer",
								className: "text-primary hover:underline flex items-center gap-1",
								children: ["View source on sterlingholidays.com ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-[520px] w-full overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: resort.image,
							alt: resort.name,
							className: "absolute inset-0 h-full w-full object-cover",
							onError: (e) => {
								e.currentTarget.src = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600";
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-x-0 bottom-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-6xl mx-auto px-6 pb-10 text-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs opacity-90 mb-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												resort.location,
												", ",
												resort.state
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "opacity-50",
												children: "•"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												className: "bg-white/15 backdrop-blur border-white/20 text-white hover:bg-white/25",
												children: resort.category
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "text-4xl md:text-5xl font-bold tracking-tight max-w-3xl leading-tight",
										children: resort.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-white/85 max-w-2xl",
										children: resort.blurb
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex flex-wrap items-center gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1 text-sm",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex text-yellow-400",
														children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, i))
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold",
														children: "4.6"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-white/70",
														children: "· 1,284 reviews"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-white/50",
												children: "|"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1 text-sm text-white/85",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-4 w-4" }), " TripAdvisor Travellers' Choice"]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 flex flex-wrap gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "lg",
												className: "bg-white text-slate-900 hover:bg-white/90",
												onClick: () => toast.success("Booking flow opened — connect to Sterling reservations API to complete"),
												children: "Book direct & save 10%"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "lg",
												variant: "outline",
												className: "bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white",
												onClick: () => toast("Virtual tour coming soon", { icon: "🎥" }),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4 mr-1" }), " Virtual tour"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "lg",
												variant: "ghost",
												className: "text-white hover:bg-white/10 hover:text-white",
												onClick: () => {
													setSaved((v) => !v);
													toast.success(saved ? "Removed from wishlist" : "Saved to wishlist");
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-4 w-4 mr-1 ${saved ? "fill-current text-red-400" : ""}` }), saved ? "Saved" : "Wishlist"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "lg",
												variant: "ghost",
												className: "text-white hover:bg-white/10 hover:text-white",
												onClick: () => {
													navigator.clipboard?.writeText(window.location.href);
													toast.success("Link copied");
												},
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4 mr-1" }), " Share"]
											})
										]
									})
								]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b bg-card sticky top-12 z-30 shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-[180px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[10px] uppercase text-muted-foreground tracking-wide",
								children: "Check in"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								className: "h-9",
								defaultValue: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-[180px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[10px] uppercase text-muted-foreground tracking-wide",
								children: "Check out"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "date",
								className: "h-9",
								defaultValue: new Date(Date.now() + 2 * 864e5).toISOString().slice(0, 10)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-[140px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[10px] uppercase text-muted-foreground tracking-wide",
								children: "Guests"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "h-9 w-full rounded-md border bg-background px-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "2 adults" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "2 adults, 1 child" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "2 adults, 2 children" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "1 adult" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "3 adults" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "4 adults" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								onClick: () => toast.success("Checking availability & best rates…"),
								children: "Check availability"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "max-w-6xl mx-auto px-6 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
					defaultValue: "overview",
					className: "w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
							className: "w-full flex flex-wrap justify-start h-auto bg-transparent border-b rounded-none p-0 gap-1",
							children: [
								["overview", "Overview"],
								["rooms", "Rooms & suites"],
								["dining", "Dining"],
								["experiences", "Experiences"],
								["gallery", "Gallery"],
								["location", "Location"],
								["faqs", "FAQs"]
							].map(([k, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
								value: k,
								className: "rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2.5",
								children: l
							}, k))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
							value: "overview",
							className: "mt-8 grid lg:grid-cols-3 gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-2 space-y-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											className: "text-2xl font-bold mb-3",
											children: ["About ", resort.shortName]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-muted-foreground leading-relaxed",
											children: [
												resort.blurb,
												" Set in the heart of ",
												resort.location,
												", ",
												resort.state,
												", this ",
												resort.category.toLowerCase(),
												"property has been thoughtfully designed to blend contemporary comforts with the natural beauty of its surroundings. Whether you're planning a family holiday, a romantic escape or a work-from-anywhere break, ",
												resort.shortName,
												"offers spacious rooms, warm hospitality and curated experiences that celebrate the region."
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground leading-relaxed mt-3",
											children: "Guests can unwind by the pool, explore nearby landmarks with our resident experience curators, or simply enjoy hyperlocal cuisine crafted from the freshest ingredients. Every stay includes complimentary Wi-Fi, on-site activities and access to our Signature Sterling experiences."
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold mb-4",
										children: "What this resort offers"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 md:grid-cols-3 gap-3",
										children: AMENITIES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-sm p-3 rounded-lg border bg-card",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.icon, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a.label })]
										}, a.label))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold mb-4",
										children: "Signature experiences"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid md:grid-cols-2 gap-4",
										children: experiencesFor(resort).slice(0, 4).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
											className: "p-0 overflow-hidden group",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "aspect-[16/10] bg-muted overflow-hidden",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: e.img,
													alt: e.title,
													className: "h-full w-full object-cover group-hover:scale-105 transition"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs text-muted-foreground uppercase tracking-wide",
														children: e.tag
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "font-semibold mt-0.5",
														children: e.title
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-sm text-muted-foreground mt-1",
														children: e.desc
													})
												]
											})]
										}, e.title))
									})] })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
										className: "p-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs uppercase text-muted-foreground tracking-wide",
												children: "Starting from"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-1 flex items-baseline gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-3xl font-bold",
													children: ["₹", 6500 + resort.aeoScore * 40]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-sm text-muted-foreground line-through",
													children: ["₹", 8e3 + resort.aeoScore * 45]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-success mt-0.5",
												children: "Save up to 22% · Book direct"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												className: "w-full mt-4",
												onClick: () => toast.success("Reserving your stay…"),
												children: "Reserve now"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] text-muted-foreground mt-2 text-center",
												children: "Free cancellation until 24h before check-in"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
										className: "p-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 font-semibold mb-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "h-4 w-4 text-primary" }),
													" This week in ",
													resort.location
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid grid-cols-4 gap-2 text-center text-xs",
												children: [
													"Mon",
													"Tue",
													"Wed",
													"Thu"
												].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-md border p-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "text-muted-foreground",
															children: d
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4 mx-auto my-1 text-amber-500" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "font-semibold",
															children: [22 + i, "°"]
														})
													]
												}, d))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] text-muted-foreground mt-3",
												children: "Ideal weather for outdoor experiences and sightseeing."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
										className: "p-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold mb-3",
											children: "Need help?"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2 text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "tel:+911800000000",
												className: "flex items-center gap-2 hover:text-primary",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " +91 1800 000 000"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "mailto:reservations@sterlingholidays.com",
												className: "flex items-center gap-2 hover:text-primary",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " reservations@sterlingholidays.com"]
											})]
										})]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
							value: "rooms",
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold mb-6",
								children: "Rooms & suites"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
								children: roomsFor(resort).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "p-0 overflow-hidden group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-[4/3] bg-muted overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: r.img,
											alt: r.name,
											className: "h-full w-full object-cover group-hover:scale-105 transition"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start justify-between gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-semibold",
													children: r.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													variant: "secondary",
													children: r.size
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm text-muted-foreground line-clamp-2",
												children: r.desc
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex flex-wrap gap-1 pt-1",
												children: r.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] px-2 py-0.5 rounded-full bg-muted",
													children: t
												}, t))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-end justify-between pt-3 border-t",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs text-muted-foreground",
													children: "from"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-lg font-bold",
													children: [
														"₹",
														r.price.toLocaleString(),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs font-normal text-muted-foreground",
															children: "/night"
														})
													]
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
													size: "sm",
													onClick: () => toast.success(`${r.name} added to booking`),
													children: "Select"
												})]
											})
										]
									})]
								}, r.name))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
							value: "dining",
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-2xl font-bold mb-6",
								children: ["Dining at ", resort.shortName]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid md:grid-cols-2 gap-5",
								children: DINING.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "p-0 overflow-hidden flex flex-col md:flex-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "md:w-2/5 aspect-[4/3] md:aspect-auto bg-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: d.img,
											alt: d.name,
											className: "h-full w-full object-cover"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-5 flex-1 space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-muted-foreground uppercase tracking-wide",
												children: d.cuisine
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold text-lg",
												children: d.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted-foreground",
												children: d.desc
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex items-center gap-3 text-xs text-muted-foreground pt-2",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-3 w-3" }),
														" ",
														d.hours
													]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "outline",
												className: "mt-2",
												onClick: () => toast.success(`Table request sent for ${d.name}`),
												children: "Reserve a table"
											})
										]
									})]
								}, d.name))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
							value: "experiences",
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold mb-6",
								children: "Experiences & things to do"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
								children: experiencesFor(resort).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
									className: "p-0 overflow-hidden group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-[16/10] bg-muted overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: e.img,
											alt: e.title,
											className: "h-full w-full object-cover group-hover:scale-105 transition"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-muted-foreground uppercase tracking-wide",
												children: e.tag
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-semibold mt-0.5",
												children: e.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm text-muted-foreground mt-1",
												children: e.desc
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "sm",
												variant: "ghost",
												className: "mt-2 px-0 h-auto text-primary",
												onClick: () => toast(`Details for: ${e.title}`),
												children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3 ml-0.5" })]
											})
										]
									})]
								}, e.title))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
							value: "gallery",
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-2xl font-bold mb-6 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "h-5 w-5" }), " Photo gallery"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 md:grid-cols-4 gap-2",
								children: galleryFor(resort).map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `bg-muted overflow-hidden rounded-lg ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src,
										alt: `${resort.shortName} ${i + 1}`,
										className: "h-full w-full object-cover hover:scale-105 transition"
									})
								}, i))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
							value: "location",
							className: "mt-8 grid lg:grid-cols-3 gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-2xl font-bold mb-3",
										children: "Location & nearby attractions"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-muted-foreground",
										children: [
											resort.shortName,
											" is located in ",
											resort.location,
											", ",
											resort.state,
											". Perfectly positioned to explore the region's most iconic sights and hidden gems."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-[16/9] mt-4 rounded-lg overflow-hidden border bg-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
											title: "Map",
											className: "w-full h-full",
											loading: "lazy",
											src: `https://www.google.com/maps?q=${encodeURIComponent(resort.name + " " + resort.location)}&output=embed`
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold mb-3",
								children: "Nearby"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: nearbyFor(resort).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between p-3 rounded-lg border bg-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-medium",
										children: n.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: n.type
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										variant: "secondary",
										children: [n.km, " km"]
									})]
								}, n.name))
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
							value: "faqs",
							className: "mt-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-bold mb-6",
								children: "Frequently asked questions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3 max-w-3xl",
								children: faqsFor(resort).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
									className: "rounded-lg border bg-card p-4 group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
										className: "cursor-pointer font-medium flex items-center justify-between",
										children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 group-open:rotate-90 transition" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground mt-3",
										children: f.a
									})]
								}, f.q))
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t bg-gradient-to-br from-primary/10 via-background to-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-4xl mx-auto text-center px-6 py-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-8 w-8 text-primary mx-auto mb-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl font-bold",
							children: [
								"Ready for your ",
								resort.category.toLowerCase(),
								" escape?"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted-foreground mt-2 max-w-xl mx-auto",
							children: [
								"Book direct on the ",
								resort.shortName,
								" microsite and unlock exclusive rates, complimentary upgrades and flexible cancellation."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								onClick: () => toast.success("Starting reservation flow…"),
								children: "Book your stay"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "outline",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/resorts/$slug",
									params: { slug: resort.slug },
									children: "Back to admin view"
								})
							})]
						})
					]
				})
			})
		]
	});
}
var AMENITIES = [
	{
		label: "Swimming pool",
		icon: Waves
	},
	{
		label: "Multi-cuisine restaurant",
		icon: UtensilsCrossed
	},
	{
		label: "Complimentary Wi-Fi",
		icon: Wifi
	},
	{
		label: "Fitness centre",
		icon: Dumbbell
	},
	{
		label: "Complimentary parking",
		icon: Car
	},
	{
		label: "Spa & wellness",
		icon: Sparkles
	},
	{
		label: "Coffee shop",
		icon: Coffee
	},
	{
		label: "Nature trails",
		icon: TreePine
	},
	{
		label: "Kids' activities",
		icon: Users
	}
];
var DINING = [
	{
		name: "The Terrace",
		cuisine: "All-day multi-cuisine",
		hours: "7:00 AM – 11:00 PM",
		desc: "A vibrant all-day restaurant with breakfast buffets, à la carte Indian and continental favourites.",
		img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
	},
	{
		name: "Kadal",
		cuisine: "Regional specialties",
		hours: "12:30 – 3:30 PM & 7:00 – 11:00 PM",
		desc: "Hyperlocal, chef-curated tasting menus celebrating the flavours of the region.",
		img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800"
	},
	{
		name: "Verandah Bar",
		cuisine: "Bar & lounge",
		hours: "4:00 PM – 12:00 AM",
		desc: "Craft cocktails, single malts and small plates in a warm sundowner setting.",
		img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800"
	},
	{
		name: "Room service",
		cuisine: "24×7 in-room",
		hours: "24 hours",
		desc: "Curated in-room menus with quick service across breakfast, snacks and dinner.",
		img: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?w=800"
	}
];
function roomsFor(r) {
	return [
		{
			name: "Premium Room",
			size: "32 sq m",
			price: 6500 + r.aeoScore * 40,
			desc: `Comfortable premium rooms with garden views, king bed, work desk and modern amenities.`,
			tags: [
				"King bed",
				"Garden view",
				"Free Wi-Fi"
			],
			img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800"
		},
		{
			name: "Deluxe Suite",
			size: "48 sq m",
			price: 9500 + r.aeoScore * 55,
			desc: `Spacious suites featuring a lounge area, premium bath amenities and ${r.category.toLowerCase()} views.`,
			tags: [
				"Lounge",
				"Bathtub",
				"Balcony"
			],
			img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800"
		},
		{
			name: "Family Cottage",
			size: "62 sq m",
			price: 12500 + r.aeoScore * 60,
			desc: `Two-bedroom cottages designed for families with kids, complete with a private sit-out.`,
			tags: [
				"Sleeps 4",
				"Private sit-out",
				"Extra bed"
			],
			img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800"
		}
	];
}
function experiencesFor(r) {
	return [
		{
			tag: "Nature",
			title: `${r.location} nature walk`,
			desc: "Guided morning walks through the region's most scenic trails.",
			img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800"
		},
		{
			tag: "Culture",
			title: `Local heritage tour`,
			desc: "Explore ancient temples, colonial landmarks and hidden lanes.",
			img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800"
		},
		{
			tag: "Wellness",
			title: "Ayurvedic spa ritual",
			desc: "Signature therapies using traditional oils and techniques.",
			img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800"
		},
		{
			tag: "Adventure",
			title: "Sunrise trek",
			desc: "An early-morning trek to the region's finest viewpoint.",
			img: "https://images.unsplash.com/photo-1533692328991-08159ff19fca?w=800"
		},
		{
			tag: "Family",
			title: "Kids' discovery club",
			desc: "Curated activities, craft sessions and nature games for young guests.",
			img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800"
		},
		{
			tag: "Culinary",
			title: "Chef's regional table",
			desc: "A hands-on tasting menu with local ingredients & stories.",
			img: "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=800"
		}
	];
}
function galleryFor(r) {
	return [
		r.image,
		"https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
		"https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
		"https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
		"https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800",
		"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
		"https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
		"https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800"
	];
}
function nearbyFor(r) {
	return [
		{
			name: `${r.location} main viewpoint`,
			type: "Viewpoint",
			km: 2.3
		},
		{
			name: `${r.location} heritage market`,
			type: "Shopping & culture",
			km: 4.1
		},
		{
			name: `${r.location} lake / reservoir`,
			type: "Nature",
			km: 6.8
		},
		{
			name: `${r.state} state museum`,
			type: "Museum",
			km: 12.5
		},
		{
			name: `${r.location} temple complex`,
			type: "Spiritual",
			km: 3.2
		}
	];
}
function faqsFor(r) {
	return [
		{
			q: `What are the check-in and check-out timings at ${r.shortName}?`,
			a: "Check-in from 2:00 PM and check-out by 11:00 AM. Early check-in and late check-out available subject to room availability."
		},
		{
			q: `Is ${r.shortName} family and kid friendly?`,
			a: `Yes — ${r.shortName} offers family cottages, a kids' club, child-safe pools and a specially curated activity calendar for children of all ages.`
		},
		{
			q: `What's the best time to visit ${r.location}?`,
			a: `${r.location} is a wonderful destination through most of the year. October to March offers the most pleasant weather, while the monsoon months bring lush landscapes and cooler temperatures.`
		},
		{
			q: `Do you offer airport / railway station transfers?`,
			a: "Yes, complimentary and paid transfer options are available on request. Please share your travel details at the time of booking or with our concierge team."
		},
		{
			q: `Are pets allowed at the property?`,
			a: "Small pets are allowed at select rooms with prior approval. Additional cleaning fees apply. Please contact the resort at the time of booking to confirm availability."
		},
		{
			q: `What safety and hygiene measures are in place?`,
			a: "The property follows Sterling's SafeStay protocol — enhanced cleaning, contactless check-in, sanitised rooms and rigorous kitchen hygiene standards."
		},
		{
			q: `What experiences and activities are included?`,
			a: `Signature Sterling experiences, guided nature walks, cultural performances and on-site recreational activities are complimentary for in-house guests.`
		}
	];
}
//#endregion
export { Microsite as component };
