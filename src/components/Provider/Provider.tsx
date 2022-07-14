import { rootContext } from '@context';
import { COLOR_SCHEME_KEY } from '@data/constants';
import { UPDATE_COLOR_SCHEME } from '@data/hotkeys';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useColorScheme, useHotkeys, useLocalStorage } from '@mantine/hooks';
import { CFC } from '@typescript/interfaces/others';
import { Provider } from 'react-redux';

export const AppProvider: CFC = ({ children }) => {
	const preferredColorScheme = useColorScheme();

	const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
		key: COLOR_SCHEME_KEY,
		defaultValue: preferredColorScheme,
		getInitialValueInEffect: true,
	});

	const toggleColorScheme = (value?: ColorScheme) => setColorScheme(c => value || (c === 'dark' ? 'light' : 'dark'));

	useHotkeys([[UPDATE_COLOR_SCHEME, () => toggleColorScheme()]]);

	return (
		<Provider store={rootContext}>
			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider theme={{ colorScheme, fontFamily: 'cursive' }} withGlobalStyles withNormalizeCSS>
					{children}
				</MantineProvider>
			</ColorSchemeProvider>
		</Provider>
	);
};
