import AppRouter from '../Router';
import { FC } from 'react';
import ReloadPrompt from './ReloadPrompt';

export const App: FC = () => {
	return (
		<>
			<ReloadPrompt />
			<AppRouter />
		</>
	);
};
