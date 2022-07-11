import { createSlice } from '@reduxjs/toolkit';
import { ReducerSlicesEnum, ThemeAction, ThemeActionsEnum, ThemeEnum, ThemeState } from '@typescript';

const initialState: ThemeState = {
	currentTheme: ThemeEnum.LIGHT_THEME,
};

export const {
	reducer: themeReducer,
	actions: { SET_THEME },
} = createSlice({
	name: ReducerSlicesEnum.THEME,
	initialState,
	reducers: {
		[ThemeActionsEnum.SET_THEME]: (state, { payload }: ThemeAction) => {
			state.currentTheme = payload;
		},
	},
});
