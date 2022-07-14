import { SpanActionsEnum } from '@typescript/enums/actions';

import { SpanAction } from './action';
import { SpanState } from './states';

export type SpanReducerMapping = {
	[key in SpanActionsEnum]: (state: SpanState, actions: SpanAction) => void;
};
