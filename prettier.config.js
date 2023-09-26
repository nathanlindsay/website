import prettierConfig from "@nathanlindsay/prettier-config";

export default {
	...prettierConfig,
	plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
};
