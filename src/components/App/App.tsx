import AppProvider from '@components/Provider';
import ReloadPrompt from '@components/ReloadPrompt';
import { CFC } from '@typescript/interfaces/others';
import AppRouter from './Router';

export const App: CFC = () => {
	return (
		<AppProvider>
			<ReloadPrompt />
			<AppRouter />
		</AppProvider>
	);
};
