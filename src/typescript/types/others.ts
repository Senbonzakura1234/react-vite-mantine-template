import { rootContext } from '@context';
import { SharedTextProps } from '@mantine/core';

export type RootContextState = ReturnType<typeof rootContext.getState>;

export type RootContextDispatch = typeof rootContext.dispatch;

export type APP_NAME_TYPE = { full: string; array: (SharedTextProps & { text: string })[] };
