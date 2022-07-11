import { rootContext } from '@context';

export type RootContextState = ReturnType<typeof rootContext.getState>;

export type RootContextDispatch = typeof rootContext.dispatch;
