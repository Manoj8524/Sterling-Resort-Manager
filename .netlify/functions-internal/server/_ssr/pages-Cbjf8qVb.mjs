import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { n as RESORTS } from "./resorts-ClO0P_d2.mjs";
import { t as Card } from "./card-BfBj_YIE.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { B as MapPin, Mt as Building2, Z as Info, b as Sparkles, bt as CircleCheck, ct as Eye, gt as Clock, lt as ExternalLink, ot as FileText, pt as Compass, t as X, w as Search, yt as CircleQuestionMark } from "../_libs/lucide-react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { i as renderPage, r as generatePages, t as LAYERS } from "./generated-CVDsW7-k.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-Dg1urBTx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pages-Cbjf8qVb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var LAYER_ICON = {
	master: Building2,
	hyperlocal: MapPin,
	geo: Sparkles,
	aeo: CircleQuestionMark,
	guides: Compass
};
var STATUS_META = {
	"needs-review": {
		label: "Needs review",
		tone: "text-warning-foreground border-warning/50",
		icon: Clock
	},
	approved: {
		label: "Approved",
		tone: "text-primary border-primary/40",
		icon: CircleCheck
	},
	published: {
		label: "Published",
		tone: "text-success border-success/40",
		icon: CircleCheck
	}
};
function statusOf(slug) {
	let h = 0;
	for (let i = 0; i < slug.length; i++) h = h * 31 + slug.charCodeAt(i) >>> 0;
	const n = h % 10;
	if (n < 3) return "needs-review";
	if (n < 6) return "approved";
	return "published";
}
function PagesIndex() {
	const [resortSlug, setResortSlug] = (0, import_react.useState)(RESORTS[0]?.slug ?? "");
	const [q, setQ] = (0, import_react.useState)("");
	const [layer, setLayer] = (0, import_react.useState)("all");
	const [status, setStatus] = (0, import_react.useState)("all");
	const [helpOpen, setHelpOpen] = (0, import_react.useState)(false);
	const [preview, setPreview] = (0, import_react.useState)(null);
	const [approvals, setApprovals] = (0, import_react.useState)({});
	const resort = (0, import_react.useMemo)(() => RESORTS.find((r) => r.slug === resortSlug), [resortSlug]);
	const pages = (0, import_react.useMemo)(() => generatePages(resort), [resort]);
	const statusFor = (p) => approvals[p.slug] ?? statusOf(p.slug);
	const filtered = pages.filter((p) => {
		if (layer !== "all" && p.layer !== layer) return false;
		if (status !== "all" && statusFor(p) !== status) return false;
		if (q) {
			const s = q.toLowerCase();
			return p.title.toLowerCase().includes(s) || p.groupLabel.toLowerCase().includes(s);
		}
		return true;
	});
	const counts = LAYERS.map((l) => ({
		...l,
		count: pages.filter((p) => p.layer === l.key).length
	}));
	const statusCounts = {
		"needs-review": 0,
		approved: 0,
		published: 0
	};
	for (const p of pages) statusCounts[statusFor(p)]++;
	const grouped = LAYERS.map((l) => {
		const inLayer = filtered.filter((p) => p.layer === l.key);
		const byGroup = /* @__PURE__ */ new Map();
		for (const p of inLayer) {
			const entry = byGroup.get(p.group) ?? {
				label: p.groupLabel,
				items: []
			};
			entry.items.push(p);
			byGroup.set(p.group, entry);
		}
		return {
			...l,
			groups: Array.from(byGroup.values())
		};
	}).filter((l) => l.groups.length > 0);
	const approve = (slug) => {
		setApprovals((prev) => ({
			...prev,
			[slug]: "approved"
		}));
		toast.success("Page approved");
	};
	const publish = (slug) => {
		setApprovals((prev) => ({
			...prev,
			[slug]: "published"
		}));
		toast.success("Page published");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-6 lg:p-8 max-w-[1400px] mx-auto space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-bold tracking-tight",
					children: "Generated Pages"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm mt-1",
					children: "Pick a resort to browse its five-layer content stack. Preview any page, then approve or publish it."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => setHelpOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "h-4 w-4 mr-1.5" }), " What are AEO & GEO pages?"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-4 flex flex-wrap gap-3 items-center sticky top-14 z-20 bg-card/95 backdrop-blur",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium text-muted-foreground uppercase tracking-wide",
							children: "Resort"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: resortSlug,
						onValueChange: setResortSlug,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "w-[280px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
							className: "max-h-[400px]",
							children: RESORTS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
								value: r.slug,
								children: [
									r.shortName,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: ["· ", r.location]
									})
								]
							}, r.slug))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: layer,
						onValueChange: (v) => setLayer(v),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "w-[180px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
							value: "all",
							children: [
								"All layers (",
								pages.length,
								")"
							]
						}), counts.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
							value: l.key,
							children: [
								l.label,
								" (",
								l.count,
								")"
							]
						}, l.key))] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: status,
						onValueChange: (v) => setStatus(v),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "w-[190px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
								value: "all",
								children: [
									"All statuses (",
									pages.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
								value: "needs-review",
								children: [
									"Needs review (",
									statusCounts["needs-review"],
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
								value: "approved",
								children: [
									"Approved (",
									statusCounts.approved,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
								value: "published",
								children: [
									"Published (",
									statusCounts.published,
									")"
								]
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1 min-w-[220px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: "Search page title…",
							value: q,
							onChange: (e) => setQ(e.target.value),
							className: "pl-9"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "secondary",
						className: "text-xs",
						children: [filtered.length, " pages"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-5 gap-3",
				children: counts.map((l) => {
					const Icon = LAYER_ICON[l.key];
					const active = layer === l.key;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setLayer(active ? "all" : l.key),
						className: `text-left rounded-lg border p-3 transition hover:bg-accent ${active ? "border-primary bg-accent" : "bg-card"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold uppercase tracking-wide",
									children: l.label
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-2xl font-bold",
								children: l.count
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] text-muted-foreground line-clamp-1",
								children: l.description
							})
						]
					}, l.key);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [grouped.map((l) => {
					const Icon = LAYER_ICON[l.key];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold uppercase tracking-wide",
								children: l.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground",
								children: [l.groups.reduce((n, g) => n + g.items.length, 0), " pages"]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: l.groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-4 py-2 border-b bg-muted/40 text-xs font-medium text-muted-foreground",
								children: g.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "divide-y",
								children: g.items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageRow, {
									page: p,
									resortSlug: resort.slug,
									status: statusFor(p),
									onPreview: () => setPreview(p)
								}, p.slug))
							})]
						}, g.label))
					})] }, l.key);
				}), grouped.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					className: "p-10 text-center text-sm text-muted-foreground",
					children: "No pages match your filters."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!preview,
				onOpenChange: (o) => !o && setPreview(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "max-w-3xl max-h-[85vh] overflow-hidden flex flex-col p-0",
					children: preview && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
							className: "px-6 pt-6 pb-3 border-b",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "secondary",
										className: "text-[10px]",
										children: preview.layerLabel
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: statusFor(preview) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
									className: "text-xl",
									children: preview.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
									className: "font-mono text-xs",
									children: [
										"/g/",
										resort.slug,
										"/",
										preview.slug
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 overflow-auto px-6 py-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockRenderer, { blocks: renderPage(preview, resort) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "border-t px-6 py-3 flex-row justify-between sm:justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `/g/${resort.slug}/${preview.slug}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" }), " Open in new tab"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [statusFor(preview) === "needs-review" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => approve(preview.slug),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 mr-1.5" }), " Approve"]
								}), statusFor(preview) !== "published" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									onClick: () => publish(preview.slug),
									children: "Publish"
								})]
							})]
						})
					] })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: helpOpen,
				onOpenChange: setHelpOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-2xl max-h-[85vh] overflow-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "AEO vs GEO pages — what's the difference?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
							"Both help AI engines (ChatGPT, Gemini, Perplexity, Google AI Overviews) recommend Sterling. They just answer different ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "kinds" }),
							" of user queries."
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-5 mt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border p-4 bg-muted/30",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-semibold",
													children: "GEO — Generative Engine Optimization"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													variant: "outline",
													className: "text-[10px]",
													children: "Intent pages"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-muted-foreground mt-2",
											children: [
												"One page per ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-foreground",
													children: "intent"
												}),
												" (audience, occasion, segment). Answers ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "\"where should I go for X kind of trip?\"" }),
												". Ranked when a user describes a ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-foreground",
													children: "situation"
												}),
												"."
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 rounded border bg-card p-3 text-sm",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs uppercase tracking-wider text-muted-foreground mb-1",
													children: "Example query"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "italic",
													children: "\"Best family resort in Ooty for a weekend with young kids\""
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs uppercase tracking-wider text-muted-foreground mt-3 mb-1",
													children: "GEO page that owns it"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-mono text-xs",
													children: "/g/sterling-ooty/geo--family"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs text-muted-foreground mt-1",
													children: "→ \"Best family resort in Ooty\" — pitch, why-us, ideal-for, FAQs."
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border p-4 bg-muted/30",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-4 w-4 text-primary" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-semibold",
													children: "AEO — Answer Engine Optimization"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
													variant: "outline",
													className: "text-[10px]",
													children: "Question pages"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-muted-foreground mt-2",
											children: [
												"One page per ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-foreground",
													children: "specific question"
												}),
												". Answers direct ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "\"is / does / can / where / how\"" }),
												" queries with a short factual answer up top."
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 rounded border bg-card p-3 text-sm",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs uppercase tracking-wider text-muted-foreground mb-1",
													children: "Example query"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "italic",
													children: "\"Does Sterling Ooty have a swimming pool?\""
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs uppercase tracking-wider text-muted-foreground mt-3 mb-1",
													children: "AEO page that owns it"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-mono text-xs",
													children: "/g/sterling-ooty/aeo--pool"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs text-muted-foreground mt-1",
													children: "→ \"Which resort has a swimming pool?\" — short answer, key facts, FAQ."
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-sm font-semibold mb-2",
										children: "Quick rule of thumb"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "text-sm space-y-1.5 text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
											"• If the user is ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground font-medium",
												children: "picking"
											}),
											" (family, luxury, weekend) → ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground font-medium",
												children: "GEO"
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
											"• If the user is ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground font-medium",
												children: "asking"
											}),
											" (does / can / is / where) → ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-foreground font-medium",
												children: "AEO"
											})
										] })]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => setHelpOpen(false),
							children: "Got it"
						}) })
					]
				})
			})
		]
	});
}
function StatusBadge({ status }) {
	const m = STATUS_META[status];
	const Icon = m.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
		variant: "outline",
		className: `text-[10px] gap-1 ${m.tone}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-2.5 w-2.5" }),
			" ",
			m.label
		]
	});
}
function PageRow({ page, resortSlug, status, onPreview }) {
	const href = `/g/${resortSlug}/${page.slug}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex items-center gap-3 px-4 py-3 hover:bg-accent/40 transition",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4 text-primary shrink-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-medium text-sm truncate",
					children: page.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground truncate font-mono",
					children: href
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				size: "sm",
				variant: "ghost",
				className: "h-8",
				onClick: onPreview,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5 mr-1" }), " View"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "text-muted-foreground hover:text-primary p-1",
				title: "Open in new tab",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })
			})
		]
	});
}
function BlockRenderer({ blocks }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "space-y-5 max-w-none prose-sm",
		children: blocks.map((b, i) => {
			if (b.kind === "lede") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base leading-relaxed text-foreground/90 font-medium",
				children: b.text
			}, i);
			if (b.kind === "section") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-base font-semibold mb-2",
				children: b.heading
			}), b.paragraphs.map((p, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground leading-relaxed mb-2",
				children: p
			}, j))] }, i);
			if (b.kind === "list") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-base font-semibold mb-2",
				children: b.heading
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "text-sm text-muted-foreground space-y-1 list-disc pl-5",
				children: b.items.map((it, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: it }, j))
			})] }, i);
			if (b.kind === "faq") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-base font-semibold mb-2",
				children: "FAQs"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: b.items.map((it, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded border p-3 bg-muted/20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-medium",
						children: it.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground mt-1",
						children: it.a
					})]
				}, j))
			})] }, i);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm font-medium",
				children: b.text
			}, i);
		})
	});
}
//#endregion
export { PagesIndex as component };
