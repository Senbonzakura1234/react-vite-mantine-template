import { spanReducerMapping } from '@data/mappings';
import { createSlice } from '@reduxjs/toolkit';
import { ReducerSlicesEnum } from '@typescript/enums/others';
import { SpanReducerMapping } from '@typescript/types/mappings';
import { SpanState } from '@typescript/types/states';

export const {
	reducer: spanReducer,
	// eslint-disable-next-line no-empty-pattern
	actions: {},
} = createSlice<SpanState, SpanReducerMapping, ReducerSlicesEnum>({
	name: ReducerSlicesEnum.SPAN,
	initialState: {},
	reducers: spanReducerMapping,
});
