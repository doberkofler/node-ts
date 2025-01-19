import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
//import globals from "globals";

export default tseslint.config(eslint.configs.recommended, tseslint.configs.recommendedTypeChecked, {
	linterOptions: {
		reportUnusedDisableDirectives: 'warn',
	},
	languageOptions: {
		//globals: globals.browser
		parserOptions: {
			projectService: true,
			tsconfigRootDir: import.meta.dirname,
		},
	},
});
