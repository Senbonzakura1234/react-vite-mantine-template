import { ThemeActionsEnum } from '@typescript/enums/actions';

import { ThemeAction } from './action';
import { ThemeState } from './states';

export type ThemeReducerMapping = {
	[key in ThemeActionsEnum]: (state: ThemeState, actions: ThemeAction) => void;
};
