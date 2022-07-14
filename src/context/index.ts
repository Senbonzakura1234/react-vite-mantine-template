import { configureStore } from '@reduxjs/toolkit';
import { spanReducer } from './reducers/span.reducer';

export const rootContext = configureStore({
	reducer: {
		span: spanReducer,
	},
});
