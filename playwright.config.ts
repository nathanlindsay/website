import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
	webServer: {
		command: "npm run build && npm run preview",
		port: 4173,
	},

	testMatch: "/src/routes/**/*.test.{js,ts}",
};

export default config;
