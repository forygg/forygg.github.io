export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","pics/my-photo.png","styles.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.eeb4c420.js","app":"_app/immutable/entry/app.ba1ed5ed.js","imports":["_app/immutable/entry/start.eeb4c420.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.844f4e40.js","_app/immutable/entry/app.ba1ed5ed.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.9bb45c71.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
