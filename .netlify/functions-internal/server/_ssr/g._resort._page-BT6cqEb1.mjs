import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Card } from "./card-BfBj_YIE.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { B as MapPin, Rt as ArrowLeft, b as Sparkles } from "../_libs/lucide-react.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./g._resort._page-D4zWgTYI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/g._resort._page-BT6cqEb1.js
var import_jsx_runtime = require_jsx_runtime();
function PagePreview() {
	const { resort, page, blocks } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-muted/30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b bg-card/95 backdrop-blur sticky top-0 z-30",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-4xl mx-auto flex items-center gap-3 px-4 h-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						variant: "ghost",
						className: "gap-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/pages",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px bg-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs text-muted-foreground min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "text-[10px]",
							children: page.layerLabel
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "truncate font-mono",
							children: [
								"/g/",
								resort.slug,
								"/",
								page.slug
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-1 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), "Static preview"]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "max-w-3xl mx-auto px-6 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs text-muted-foreground mb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/resorts/$slug",
							params: { slug: resort.slug },
							className: "hover:text-primary hover:underline",
							children: resort.shortName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							resort.location,
							", ",
							resort.state
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: page.groupLabel })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl md:text-4xl font-bold tracking-tight leading-tight",
					children: page.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-6",
					children: blocks.map((b, i) => {
						if (b.kind === "lede") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-foreground/90 leading-relaxed",
							children: b.text
						}, i);
						if (b.kind === "section") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-semibold border-l-2 border-primary pl-3",
								children: b.heading
							}), b.paragraphs.map((p, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-foreground/80 leading-relaxed",
								children: p
							}, j))]
						}, i);
						if (b.kind === "list") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-semibold border-l-2 border-primary pl-3",
								children: b.heading
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2",
								children: b.items.map((it, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2 text-sm text-foreground/80",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary mt-1",
										children: "•"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: it })]
								}, j))
							})]
						}, i);
						if (b.kind === "faq") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-semibold border-l-2 border-primary pl-3",
								children: "Frequently asked questions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-3",
								children: b.items.map((f, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-medium text-sm",
									children: f.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-muted-foreground mt-1",
									children: f.a
								})] }, j))
							})]
						}, i);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "p-5 bg-primary/5 border-primary/30 flex items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium",
								children: b.text
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "sm",
								children: "Book now"
							})]
						}, i);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 pt-6 border-t text-xs text-muted-foreground",
					children: [
						"Generated by Sterling AEO/GEO · Layer: ",
						page.layerLabel,
						" · Group: ",
						page.groupLabel
					]
				})
			]
		})]
	});
}
//#endregion
export { PagePreview as component };
