import type React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { FormPage, SelectPage } from './pages';
import { HomePage } from './pages/home';
import { ImageAvatarPage } from './pages/image-avatar';

export const App = (): React.ReactElement => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/form" element={<FormPage />} />
				<Route path="/select" element={<SelectPage />} />
				<Route path="/image-avatar" element={<ImageAvatarPage />} />
			</Routes>
		</Router>
	);
};
