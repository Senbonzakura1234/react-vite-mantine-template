import Home from '@pages/Home';
import { CFC } from '@typescript/interfaces/others';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router: CFC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};
