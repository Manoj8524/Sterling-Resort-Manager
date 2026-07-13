import { r as getResort } from "./resorts-ClO0P_d2.mjs";
import { M as notFound, h as createFileRoute, m as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as renderPage, n as findPage } from "./generated-CVDsW7-k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/g._resort._page-D4zWgTYI.js
var $$splitNotFoundComponentImporter = () => import("./g._resort._page-qfDZPFLc.mjs");
var $$splitComponentImporter = () => import("./g._resort._page-BT6cqEb1.mjs");
var Route = createFileRoute("/g/$resort/$page")({
	loader: ({ params }) => {
		const resort = getResort(params.resort);
		if (!resort) throw notFound();
		const page = findPage(resort, params.page);
		if (!page) throw notFound();
		return {
			resort,
			page,
			blocks: renderPage(page, resort)
		};
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Page not found" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { page, resort } = loaderData;
		return { meta: [{ title: `${page.title} · ${resort.shortName}` }, {
			name: "description",
			content: `${page.title} — a Sterling Holidays generated page for ${resort.location}, ${resort.state}.`
		}] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
