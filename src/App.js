import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


import Routes from './common/routes'
import store from './common/config'

const App =  () => (
	<Provider store={store}>
		<BrowserRouter>
    		<Routes />
		</BrowserRouter>
	</Provider>
);

export default App;
