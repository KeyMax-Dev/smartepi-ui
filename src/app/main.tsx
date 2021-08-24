import React from 'react';
import { FormPage, SelectPage } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ImageAvatarPage } from './pages/image-avatar';

export const App = (): React.ReactElement<{}> => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/form" component={FormPage} />
					<Route path="/select" component={SelectPage} />
					<Route path="/image-avatar" component={ImageAvatarPage} />
				</Switch>
			</Router>
		</>
	);
};
