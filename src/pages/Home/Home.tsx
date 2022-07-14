import { APP_NAME } from '@data/configs';
import { Box, Text } from '@mantine/core';
import { CFC } from '@typescript/interfaces/others';
import { useId } from 'react';

export const Home: CFC = () => {
	const id = useId();
	return (
		<Box sx={{ height: '100vh', display: 'grid', placeContent: 'center' }}>
			<Box sx={{ display: 'flex', gap: '1em' }}>
				{APP_NAME.array.map(({ text, ...rest }, index) => (
					<Text key={`${id}-${index}`} {...rest} sx={{ fontSize: '5em' }} weight={900}>
						{text}
					</Text>
				))}
			</Box>
		</Box>
	);
};
