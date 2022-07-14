import ReloadPrompt from '@components/ReloadPrompt';
import { FC } from 'react';

import AppRouter from './Router';

export const App: FC = () => {
	return (
		<>
			<ReloadPrompt />
			<AppRouter />
		</>
	);
};
