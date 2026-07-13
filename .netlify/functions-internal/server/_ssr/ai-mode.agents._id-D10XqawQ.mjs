import { h as createFileRoute, j as notFound, m as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as getAgent } from "./ai-agents-TtkTV8M5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-mode.agents._id-D10XqawQ.js
var $$splitComponentImporter = () => import("./ai-mode.agents._id-BIbfhsbs.mjs");
var $$splitNotFoundComponentImporter = () => import("./ai-mode.agents._id-DF-JB4lE.mjs");
var Route = createFileRoute("/ai-mode/agents/$id")({
	loader: ({ params }) => {
		const agent = getAgent(params.id);
		if (!agent) throw notFound();
		return { agent };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.agent.name} — AI Mode` : "Agent" }] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
