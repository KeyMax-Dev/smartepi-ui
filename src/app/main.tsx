import React from 'react';
import { FormPage, SelectPage } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ImageAvatarPage } from './pages/image-avatar';

export const App = (): React.ReactElement => {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/form" element={<FormPage />} />
					<Route path="/select" element={<SelectPage />} />
					<Route path="/image-avatar" element={<ImageAvatarPage />} />
				</Routes>
			</Router>
		</>
	);
};
