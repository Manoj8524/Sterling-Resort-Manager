import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { n as RESORTS } from "./resorts-ClO0P_d2.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { t as Progress } from "./progress-DOIEKRJF.mjs";
import { B as MapPin, Lt as ArrowRight, O as Plus, b as Sparkles, bt as CircleCheck, c as Upload, ft as Download, h as Target, i as WandSparkles, it as Funnel, ut as Earth, w as Search } from "../_libs/lucide-react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/geo-manager-Bt80himp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CITIES = Array.from(new Set(RESORTS.map((r) => r.location)));
function buildIntents() {
	return [
		{
			id: "family",
			name: "Family Resort",
			category: "Audience",
			volume: 12400,
			trend: 12,
			covered: .86
		},
		{
			id: "luxury",
			name: "Luxury Resort",
			category: "Segment",
			volume: 9800,
			trend: 15,
			covered: .72
		},
		{
			id: "weekend",
			name: "Weekend Getaway",
			category: "Occasion",
			volume: 15600,
			trend: 18,
			covered: .64
		},
		{
			id: "honeymoon",
			name: "Honeymoon Stay",
			category: "Audience",
			volume: 7200,
			trend: 24,
			covered: .68
		},
		{
			id: "workation",
			name: "Workation",
			category: "Occasion",
			volume: 2100,
			trend: 56,
			covered: .23
		},
		{
			id: "pet",
			name: "Pet Friendly",
			category: "Amenity",
			volume: 3200,
			trend: 42,
			covered: .18
		},
		{
			id: "monsoon",
			name: "Monsoon Holiday",
			category: "Seasonal",
			volume: 5100,
			trend: 31,
			covered: .48
		},
		{
			id: "corporate",
			name: "Corporate Offsite",
			category: "Segment",
			volume: 4600,
			trend: 22,
			covered: .55
		},
		{
			id: "senior",
			name: "Senior Citizen Stay",
			category: "Audience",
			volume: 2900,
			trend: 14,
			covered: .32
		}
	].map((s) => {
		const total = CITIES.length;
		const coveredN = Math.round(total * s.covered);
		return {
			id: s.id,
			name: s.name,
			category: s.category,
			volume: s.volume,
			trend: s.trend,
			totalCities: total,
			coveredCities: CITIES.slice(0, coveredN),
			missingCities: CITIES.slice(coveredN),
			pagesGenerated: coveredN,
			questionsCovered: Math.round(coveredN * 6.5)
		};
	});
}
var INITIAL_SUGGESTIONS = [
	{
		id: "s-ev",
		name: "EV-Ready Resort",
		category: "Amenity",
		volume: 1800,
		trend: 220
	},
	{
		id: "s-access",
		name: "Wheelchair Accessible",
		category: "Audience",
		volume: 2400,
		trend: 88
	},
	{
		id: "s-adv",
		name: "Adventure Weekend",
		category: "Occasion",
		volume: 6400,
		trend: 41
	},
	{
		id: "s-spa",
		name: "Spa & Wellness Escape",
		category: "Segment",
		volume: 5800,
		trend: 34
	},
	{
		id: "s-ayur",
		name: "Ayurveda Retreat",
		category: "Segment",
		volume: 3900,
		trend: 62
	}
];
function coverageOf(i) {
	return Math.round(i.coveredCities.length / i.totalCities * 100);
}
function GeoManager() {
	const [intents, setIntents] = (0, import_react.useState)(() => buildIntents());
	const [suggestions, setSuggestions] = (0, import_react.useState)(INITIAL_SUGGESTIONS);
	const [selectedId, setSelectedId] = (0, import_react.useState)(intents[0].id);
	const [search, setSearch] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("all");
	const selected = intents.find((i) => i.id === selectedId) ?? intents[0];
	const categories = (0, import_react.useMemo)(() => ["all", ...Array.from(new Set(intents.map((i) => i.category)))], [intents]);
	const filtered = intents.filter((i) => {
		if (category !== "all" && i.category !== category) return false;
		if (search && !i.name.toLowerCase().includes(search.toLowerCase())) return false;
		return true;
	});
	const totalPages = intents.reduce((s, i) => s + i.pagesGenerated, 0);
	const totalMissing = intents.reduce((s, i) => s + i.missingCities.length, 0);
	const addSuggestion = (s) => {
		const newIntent = {
			id: s.id,
			name: s.name,
			category: s.category,
			volume: s.volume,
			trend: s.trend,
			totalCities: CITIES.length,
			coveredCities: [],
			missingCities: CITIES,
			pagesGenerated: 0,
			questionsCovered: 0
		};
		setIntents((prev) => [newIntent, ...prev]);
		setSuggestions((prev) => prev.filter((x) => x.id !== s.id));
		setSelectedId(s.id);
		toast.success(`Added "${s.name}" to your intent library`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col h-[calc(100vh-3.5rem)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b bg-card/40 px-6 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-3.5 w-3.5" }), " Intent Workspace · Approved intents drive page generation"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold mt-1",
					children: "GEO Manager"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => toast.success("Import from CSV / Search Console"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4 mr-1.5" }), " Import intents"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => toast.success("Export intent library"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4 mr-1.5" }), " Export"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: () => toast.success("Draft a new intent cluster"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 mr-1.5" }), " Add intent"]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center gap-2 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PipelineStep, {
						label: "Discovery Agent",
						muted: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PipelineStep, {
						label: "Review Queue",
						muted: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PipelineStep, {
						label: "GEO Manager",
						active: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PipelineStep, {
						label: "Content",
						muted: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PipelineStep, {
						label: "Publish",
						muted: true
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] min-h-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 border-r flex flex-col overflow-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b px-4 py-2 flex items-center gap-2 flex-wrap bg-background sticky top-0 z-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-3.5 w-3.5 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: search,
									onChange: (e) => setSearch(e.target.value),
									placeholder: "Search intents…",
									className: "h-8 pl-7 w-[240px] text-xs"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1 text-xs text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-3.5 w-3.5" })
							}),
							categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setCategory(c),
								className: `h-7 rounded-full border px-2.5 text-xs capitalize transition-colors ${category === c ? "bg-primary text-primary-foreground border-primary" : "bg-background hover:bg-muted"}`,
								children: c
							}, c)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ml-auto text-xs text-muted-foreground",
								children: [
									filtered.length,
									" intents · ",
									totalPages,
									" pages · ",
									totalMissing,
									" missing"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-card/95 border-b text-xs uppercase tracking-wider text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-left font-medium py-2.5 px-4",
									children: "Intent"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-right font-medium py-2.5 px-2",
									children: "Volume"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-left font-medium py-2.5 px-2 w-[240px]",
									children: "Coverage"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-right font-medium py-2.5 px-2",
									children: "Pages"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-right font-medium py-2.5 px-4",
									children: "Action"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: filtered.map((i) => {
							const cov = coverageOf(i);
							const isSel = i.id === selected.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								onClick: () => setSelectedId(i.id),
								className: `border-b cursor-pointer transition-colors ${isSel ? "bg-accent/50" : "hover:bg-muted/40"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [isSel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-medium",
												children: i.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-muted-foreground",
												children: i.category
											})] })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "py-3 px-2 text-right tabular-nums",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: i.volume.toLocaleString() }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-success",
											children: [
												"+",
												i.trend,
												"%"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "py-3 px-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
												value: cov,
												className: "h-1.5 flex-1"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs font-semibold w-9 text-right tabular-nums",
												children: [cov, "%"]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-muted-foreground mt-1",
											children: [
												i.coveredCities.length,
												"/",
												i.totalCities,
												" cities"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-2 text-right tabular-nums font-medium",
										children: i.pagesGenerated
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4 text-right",
										children: cov >= 100 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											variant: "outline",
											className: "text-success border-success/40",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3 mr-1" }), " Complete"]
										}) : cov >= 80 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "ghost",
											onClick: (e) => {
												e.stopPropagation();
												setSelectedId(i.id);
											},
											children: "View"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "outline",
											onClick: (e) => {
												e.stopPropagation();
												toast.success(`Queued ${i.missingCities.length} page briefs for "${i.name}"`);
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "h-3 w-3 mr-1" }), " Generate Missing Pages"]
										})
									})
								]
							}, i.id);
						}) })]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 border-t bg-muted/20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-sm font-semibold flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary" }),
										" AI-suggested intents",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "secondary",
											className: "ml-1",
											children: suggestions.length
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: "via Discovery Agent"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground mb-3",
								children: [
									"New intent clusters surfaced by the Discovery Agent. Click ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: "Add to library"
									}),
									" to add them as new rows above."
								]
							}),
							suggestions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground italic",
								children: "All suggestions reviewed. Fresh ones will appear here as Discovery Agent finds them."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2",
								children: suggestions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-md border bg-card p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm font-medium truncate",
												children: s.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-xs text-muted-foreground",
												children: [
													s.category,
													" · ",
													s.volume.toLocaleString(),
													" vol"
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											variant: "outline",
											className: "text-success border-success/40 shrink-0",
											children: [
												"+",
												s.trend,
												"%"
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 flex justify-end",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "outline",
											className: "h-7 text-xs",
											onClick: () => addSuggestion(s),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3 mr-1" }), " Add to library"]
										})
									})]
								}, s.id))
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "min-w-0 flex flex-col bg-muted/20 overflow-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "h-3.5 w-3.5" }),
									" ",
									selected.category
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3 mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-bold",
									children: selected.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									variant: "secondary",
									children: [
										"+",
										selected.trend,
										"%"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-3 mt-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
										label: "Coverage",
										value: `${coverageOf(selected)}%`,
										accent: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
										label: "Pages",
										value: selected.pagesGenerated.toString()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
										label: "Questions",
										value: selected.questionsCovered.toString()
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
								value: coverageOf(selected),
								className: "h-1.5 mt-4"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1.5 text-xs text-muted-foreground",
								children: [
									selected.coveredCities.length,
									" of ",
									selected.totalCities,
									" cities covered"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5 border-b",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-sm font-semibold flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-destructive" }),
									" Missing cities",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-muted-foreground font-normal",
										children: [
											"(",
											selected.missingCities.length,
											")"
										]
									})
								]
							}), selected.missingCities.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								onClick: () => toast.success(`Generating ${selected.missingCities.length} pages for ${selected.name}`),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "h-3 w-3 mr-1" }), " Generate"]
							})]
						}), selected.missingCities.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "All cities covered."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-1.5 max-h-[180px] overflow-auto",
							children: [selected.missingCities.slice(0, 24).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "text-xs font-normal",
								children: c
							}, c)), selected.missingCities.length > 24 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground self-center",
								children: [
									"+",
									selected.missingCities.length - 24,
									" more"
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold mb-3",
							children: "Covered cities"
						}), selected.coveredCities.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "No cities covered yet."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-1.5 max-h-[160px] overflow-auto",
							children: [selected.coveredCities.slice(0, 18).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "secondary",
								className: "text-xs font-normal",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-2.5 w-2.5 mr-1 text-success" }),
									" ",
									c
								]
							}, c)), selected.coveredCities.length > 18 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground self-center",
								children: [
									"+",
									selected.coveredCities.length - 18,
									" more"
								]
							})]
						})]
					})
				]
			})]
		})]
	});
}
function MiniStat({ label, value, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[10px] uppercase tracking-wider text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `text-xl font-bold mt-0.5 ${accent ? "text-primary" : ""}`,
		children: value
	})] });
}
function PipelineStep({ label, active, muted }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `px-2.5 py-1 rounded-full border text-xs ${active ? "bg-primary text-primary-foreground border-primary font-medium" : muted ? "bg-background text-muted-foreground" : "bg-background"}`,
		children: label
	});
}
//#endregion
export { GeoManager as component };
