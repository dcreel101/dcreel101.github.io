/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/preline/dist/*.js',
		"./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("daisyui"),
		require('@tailwindcss/forms'),
		require('preline/plugin'),
		require('flowbite/plugin')],
	daisyui: {
		themes: ["lofi", "aqua", "synthwave", "night"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "night", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	}
}