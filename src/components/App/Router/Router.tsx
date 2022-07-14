import Home from '@pages/Home';
import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};
