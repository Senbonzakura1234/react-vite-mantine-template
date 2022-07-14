import { themeReducerMapping } from '@data/mappings';
import { createSlice } from '@reduxjs/toolkit';
import { ReducerSlicesEnum, ThemeNameEnum } from '@typescript/enums/others';
import { ThemeReducerMapping } from '@typescript/types/mappings';
import { ThemeState } from '@typescript/types/states';

export const {
	reducer: themeReducer,
	actions: { SET_THEME },
} = createSlice<ThemeState, ThemeReducerMapping, ReducerSlicesEnum>({
	name: ReducerSlicesEnum.THEME,
	initialState: { currentTheme: ThemeNameEnum.LIGHT_THEME },
	reducers: themeReducerMapping,
});
