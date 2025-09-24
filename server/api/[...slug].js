export default defineEventHandler((event) => {
	const { slug } = event.context.params;
	const { origin, pathname } = getRequestURL(event);
	return proxyRequest(event, `${origin}/popules/api/${slug}`, {
		headers: {
			"Content-Type": "application/json",
		},
	});
});