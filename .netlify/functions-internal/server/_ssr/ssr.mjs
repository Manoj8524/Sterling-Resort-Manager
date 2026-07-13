//#region node_modules/.nitro/vite/services/ssr/index.js
var lastError = null;
if (typeof window === "undefined") {
	process.on("unhandledRejection", (reason) => {
		lastError = reason instanceof Error ? reason : new Error(String(reason));
	});
	process.on("uncaughtException", (error) => {
		lastError = error;
	});
}
function consumeLastCapturedError() {
	const err = lastError;
	lastError = null;
	return err;
}
function renderErrorPage() {
	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Application Error — Sterling Resort Manager</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background: #fcfcfc;
          color: #333;
          margin: 0;
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 80vh;
        }
        .container {
          max-width: 500px;
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          border: 1px solid #eaeaea;
        }
        h1 {
          font-size: 1.5rem;
          margin-top: 0;
          color: #e11d48;
        }
        p {
          font-size: 0.95rem;
          line-height: 1.5;
          color: #666;
        }
        button {
          background: #7c3aed;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          margin-top: 1rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Something went wrong</h1>
        <p>An unexpected server-side error occurred while loading this page. Please try refreshing or contact support if the issue persists.</p>
        <button onclick="window.location.reload()">Refresh Page</button>
      </div>
    </body>
    </html>
  `;
}
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-CGoV5Yzj.mjs").then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!isH3SwallowedErrorBody(body)) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
function isH3SwallowedErrorBody(body) {
	try {
		const payload = JSON.parse(body);
		return payload.unhandled === true && payload.message === "HTTPError";
	} catch {
		return false;
	}
}
var server_default = { async fetch(request, env, ctx) {
	try {
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { server_default as default, renderErrorPage as t };
