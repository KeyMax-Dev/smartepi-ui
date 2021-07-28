import React from 'react';
import { FormPage } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const App = (): React.ReactElement<{}> => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/form" component={FormPage} />
				</Switch>
			</Router>
		</>
	);
};
