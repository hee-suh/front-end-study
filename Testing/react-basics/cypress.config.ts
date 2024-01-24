import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		// config 파일에서 baseUrl 설정 및
		// 터미널에서 proxy 설정(HTTP_PROXY=http://localhost:5173)을 해야
		// cypress에서 url 정상 visit 가능
		baseUrl: 'http://localhost:5173',
	},
});
