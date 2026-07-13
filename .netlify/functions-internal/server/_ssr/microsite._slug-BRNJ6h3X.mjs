import { r as getResort } from "./resorts-ClO0P_d2.mjs";
import { M as notFound, h as createFileRoute, m as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/microsite._slug-BRNJ6h3X.js
var $$splitNotFoundComponentImporter = () => import("./microsite._slug-IRMUVeFn.mjs");
var $$splitComponentImporter = () => import("./microsite._slug-BhY458Qi.mjs");
var Route = createFileRoute("/microsite/$slug")({
	loader: ({ params }) => {
		const resort = getResort(params.slug);
		if (!resort) throw notFound();
		return { resort };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Resort not found" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { resort } = loaderData;
		const title = `${resort.name} — Book Direct | Sterling Holidays`;
		const desc = `${resort.blurb} Discover rooms, dining, experiences and things to do at ${resort.shortName}, ${resort.location}.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: desc
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: desc
			},
			{
				property: "og:image",
				content: resort.image
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
