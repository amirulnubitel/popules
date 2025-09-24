// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
	colorMode: {
		classSuffix: "",
	},
	css: ["~/assets/css/main.css"],

	// SSR and hydration settings
	ssr: true,

	// Nitro configuration for better production
	nitro: {
		preset: "node-server",
		experimental: {
			wasm: false,
		},
	},

	app: {
		head: {
			title: "Popules.com",
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ name: "description", content: "Communities thrive when people connect, share, and grow together." },
				{ name: "keywords", content: "business solutions, technology, innovation, growth, digital transformation, productivity" },
				{ property: "og:title", content: "Popules.com" },
				{ property: "og:description", content: "Communities thrive when people connect, share, and grow together." },
				{ property: "og:type", content: "website" },
				{ name: "twitter:card", content: "/logo.png" },
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		},
		rootId: "popules",
		rootTag: "div",
		teleportId: false,
		buildAssetsDir: "/_nuxt/",
	},

	// api route env
	routeRules: {
		"/popules/**": {
			proxy: {
				to: "https://api.popules.com/**",
			},
		},
	},
});
