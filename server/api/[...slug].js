export default defineEventHandler((event) => {
	const { slug } = event.context.params;
	const { origin, pathname } = getRequestURL(event);
	return proxyRequest(event, `https://api.popules.com/api/${slug}`, {
		headers: {
			"Content-Type": "application/json",
		},
	});
});
