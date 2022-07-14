import { ThemeReducerMapping } from '@typescript/types/mappings';

export const themeReducerMapping: ThemeReducerMapping = {
	SET_THEME: (state, { payload }) => {
		state.currentTheme = payload;
	},
};
