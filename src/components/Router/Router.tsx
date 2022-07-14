import Home from '@pages/Home';
import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Router: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};
