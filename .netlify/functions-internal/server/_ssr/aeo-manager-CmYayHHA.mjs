import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { n as RESORTS } from "./resorts-ClO0P_d2.mjs";
import { t as Card } from "./card-CtX3ithx.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { t as Progress } from "./progress-DOIEKRJF.mjs";
import { B as MapPin, Dt as ChartColumn, E as Radio, Lt as ArrowRight, Nt as Bot, O as Plus, P as PenTool, b as Sparkles, bt as CircleCheck, c as Upload, ft as Download, i as WandSparkles, it as Funnel, nt as Headphones, s as Users, w as Search, yt as CircleQuestionMark, z as MessageCircleQuestionMark } from "../_libs/lucide-react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/aeo-manager-CmYayHHA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CITIES = Array.from(new Set(RESORTS.map((r) => r.location)));
function buildClusters() {
	return [
		{
			id: "where-to-stay",
			name: "Where to stay in {city}?",
			category: "Discovery",
			volume: 18400,
			trend: 12,
			covered: .95,
			source: "Search Console"
		},
		{
			id: "family-best",
			name: "Best family resort in {city}?",
			category: "Recommendation",
			volume: 12300,
			trend: 15,
			covered: .92,
			source: "AI Discovery"
		},
		{
			id: "things-to-do",
			name: "What are the best things to do in {city}?",
			category: "Discovery",
			volume: 15600,
			trend: 18,
			covered: .88,
			source: "Search Console"
		},
		{
			id: "pet-friendly",
			name: "Is Sterling pet friendly?",
			category: "Amenity",
			volume: 4300,
			trend: 42,
			covered: .25,
			source: "Support"
		},
		{
			id: "pool",
			name: "Which resort has a swimming pool?",
			category: "Amenity",
			volume: 3200,
			trend: 22,
			covered: .52,
			source: "Chatbot"
		},
		{
			id: "airport",
			name: "Resorts near airport",
			category: "Logistics",
			volume: 6100,
			trend: 19,
			covered: .6,
			source: "Search Console"
		},
		{
			id: "spa",
			name: "Resorts with spa",
			category: "Amenity",
			volume: 5800,
			trend: 26,
			covered: .74,
			source: "AI Discovery"
		},
		{
			id: "seniors",
			name: "Resorts for senior citizens",
			category: "Audience",
			volume: 2900,
			trend: 14,
			covered: .18,
			source: "Voice"
		},
		{
			id: "ev-charging",
			name: "Does Sterling have EV charging?",
			category: "Amenity",
			volume: 1800,
			trend: 220,
			covered: .1,
			source: "AI Discovery"
		},
		{
			id: "breakfast",
			name: "Is breakfast complimentary?",
			category: "Policy",
			volume: 4200,
			trend: 8,
			covered: .82,
			source: "Chatbot"
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
			source: s.source,
			totalCities: total,
			coveredCities: CITIES.slice(0, coveredN),
			missingCities: CITIES.slice(coveredN),
			pagesGenerated: coveredN,
			questionsCovered: Math.round(coveredN * 4.5)
		};
	});
}
var INITIAL_QUESTION_SUGGESTIONS = [
	{
		id: "sq-ev",
		q: "Does Sterling have EV charging?",
		category: "Amenity",
		source: "AI Discovery",
		volume: 1800,
		trend: 220
	},
	{
		id: "sq-mon",
		q: "Which resort is best during monsoon?",
		category: "Seasonal",
		source: "Search Console",
		volume: 3400,
		trend: 82
	},
	{
		id: "sq-brk",
		q: "Is breakfast complimentary?",
		category: "Policy",
		source: "Chatbot",
		volume: 2200,
		trend: 34
	},
	{
		id: "sq-ind",
		q: "Which resort has indoor games?",
		category: "Amenity",
		source: "Support",
		volume: 1400,
		trend: 41
	},
	{
		id: "sq-wch",
		q: "Which resort is wheelchair accessible?",
		category: "Audience",
		source: "Voice",
		volume: 1100,
		trend: 66
	}
];
var SOURCE_META = {
	"AI Discovery": {
		icon: Bot,
		tone: "text-primary",
		description: "Generated from AI trend analysis"
	},
	"Search Console": {
		icon: ChartColumn,
		tone: "text-success",
		description: "High impression query"
	},
	"Support": {
		icon: Headphones,
		tone: "text-warning-foreground",
		description: "Frequently asked by guests"
	},
	"Chatbot": {
		icon: MessageCircleQuestionMark,
		tone: "text-primary",
		description: "Common chat question"
	},
	"Voice": {
		icon: Radio,
		tone: "text-primary",
		description: "Voice search & call analytics"
	},
	"Manual": {
		icon: PenTool,
		tone: "text-muted-foreground",
		description: "Manually added"
	}
};
function coverageOf(c) {
	return Math.round(c.coveredCities.length / c.totalCities * 100);
}
function AeoManager() {
	const [clusters, setClusters] = (0, import_react.useState)(() => buildClusters());
	const [suggestions, setSuggestions] = (0, import_react.useState)(INITIAL_QUESTION_SUGGESTIONS);
	const [selectedId, setSelectedId] = (0, import_react.useState)(clusters[0].id);
	const [search, setSearch] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("all");
	const selected = clusters.find((c) => c.id === selectedId) ?? clusters[0];
	const categories = (0, import_react.useMemo)(() => ["all", ...Array.from(new Set(clusters.map((c) => c.category)))], [clusters]);
	const filtered = clusters.filter((c) => {
		if (category !== "all" && c.category !== category) return false;
		if (search && !c.name.toLowerCase().includes(search.toLowerCase())) return false;
		return true;
	});
	const totalPages = clusters.reduce((s, c) => s + c.pagesGenerated, 0);
	const totalMissing = clusters.reduce((s, c) => s + c.missingCities.length, 0);
	const SelectedSourceIcon = SOURCE_META[selected.source].icon;
	const addSuggestion = (s) => {
		const c = {
			id: s.id,
			name: s.q,
			category: s.category,
			volume: s.volume,
			trend: s.trend,
			source: s.source,
			totalCities: CITIES.length,
			coveredCities: [],
			missingCities: CITIES,
			pagesGenerated: 0,
			questionsCovered: 0
		};
		setClusters((prev) => [c, ...prev]);
		setSuggestions((prev) => prev.filter((x) => x.id !== s.id));
		setSelectedId(s.id);
		toast.success(`Added "${s.q}" to your question library`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col h-[calc(100vh-3.5rem)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b bg-card/40 px-6 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircleQuestionMark, { className: "h-3.5 w-3.5" }), " Question Workspace · Own the answers AI gives"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold mt-1",
					children: "AEO Manager"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => toast.success("Import from Search Console / CSV"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4 mr-1.5" }), " Import questions"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => toast.success("Exported question library"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4 mr-1.5" }), " Export"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: () => toast.success("Draft a new question cluster"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4 mr-1.5" }), " Add question cluster"]
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
						label: "AEO Manager",
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
									placeholder: "Search questions…",
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
									" clusters · ",
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
									children: "Question cluster"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-right font-medium py-2.5 px-2",
									children: "Demand"
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
									className: "text-left font-medium py-2.5 px-2",
									children: "Source"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "text-right font-medium py-2.5 px-4",
									children: "Action"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: filtered.map((c) => {
							const cov = coverageOf(c);
							const isSel = c.id === selected.id;
							const SIcon = SOURCE_META[c.source].icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								onClick: () => setSelectedId(c.id),
								className: `border-b cursor-pointer transition-colors ${isSel ? "bg-accent/50" : "hover:bg-muted/40"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [isSel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-medium",
												children: c.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-muted-foreground",
												children: c.category
											})] })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "py-3 px-2 text-right tabular-nums",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: c.volume.toLocaleString() }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-success",
											children: [
												"+",
												c.trend,
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
												c.coveredCities.length,
												"/",
												c.totalCities,
												" cities"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-2 text-right tabular-nums font-medium",
										children: c.pagesGenerated
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-3 px-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `flex items-center gap-1.5 text-xs ${SOURCE_META[c.source].tone}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SIcon, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground",
												children: c.source
											})]
										})
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
												setSelectedId(c.id);
											},
											children: "View"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "outline",
											onClick: (e) => {
												e.stopPropagation();
												toast.success(`Queued ${c.missingCities.length} answer pages for "${c.name}"`);
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "h-3 w-3 mr-1" }), " Generate Missing Pages"]
										})
									})
								]
							}, c.id);
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
										" AI-suggested questions",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "secondary",
											className: "ml-1",
											children: suggestions.length
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: "Discovery · Search Console · Chatbot · Support · Voice"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground mb-3",
								children: [
									"Click ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: "Add to library"
									}),
									" to add a suggestion as a new row above."
								]
							}),
							suggestions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground italic",
								children: "All suggestions reviewed. Fresh ones will appear here as they're discovered."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2",
								children: suggestions.map((s) => {
									const SIcon = SOURCE_META[s.source].icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-md border bg-card p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-sm font-medium",
													children: s.q
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: `flex items-center gap-1.5 text-xs mt-1 ${SOURCE_META[s.source].tone}`,
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SIcon, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-muted-foreground",
														children: [
															s.source,
															" · ",
															s.category
														]
													})]
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
									}, s.id);
								})
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
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-3.5 w-3.5" }),
									" ",
									selected.category
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3 mt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-bold leading-snug",
									children: selected.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									variant: "secondary",
									className: "shrink-0",
									children: [
										"+",
										selected.trend,
										"%"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `mt-3 inline-flex items-center gap-1.5 text-xs ${SOURCE_META[selected.source].tone}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectedSourceIcon, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: [
										selected.source,
										" · ",
										SOURCE_META[selected.source].description
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-3 mt-4",
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
								onClick: () => toast.success(`Generating ${selected.missingCities.length} answer pages`),
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 text-xs font-semibold mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5" }), " Where questions come from"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-1.5",
								children: Object.keys(SOURCE_META).map((s) => {
									const Icon = SOURCE_META[s].icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-3 w-3 ${SOURCE_META[s].tone}` }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium",
												children: s
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-muted-foreground truncate",
												children: ["— ", SOURCE_META[s].description]
											})
										]
									}, s);
								})
							})]
						})
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
export { AeoManager as component };
