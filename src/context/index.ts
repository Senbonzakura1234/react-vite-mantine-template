import { configureStore } from '@reduxjs/toolkit';

import { themeReducer } from './reducers/theme.reducer';

export const rootContext = configureStore({
	reducer: {
		theme: themeReducer,
	},
});
