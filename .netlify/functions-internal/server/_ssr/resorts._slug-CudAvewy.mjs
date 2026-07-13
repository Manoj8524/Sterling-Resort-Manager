import { r as getResort } from "./resorts-ClO0P_d2.mjs";
import { h as createFileRoute, j as notFound, m as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resorts._slug-CudAvewy.js
var $$splitComponentImporter = () => import("./resorts._slug-DjcIaSeP.mjs");
var Route = createFileRoute("/resorts/$slug")({
	loader: ({ params }) => {
		const resort = getResort(params.slug);
		if (!resort) throw notFound();
		return { resort };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.resort.shortName} — Sterling` : "Resort" }, {
		name: "description",
		content: loaderData?.resort.blurb ?? "Sterling resort."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
