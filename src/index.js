import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import { worker } from './mocks/browser';

worker.start();

ReactDOM.render(
	<>
		<Root />
	</>,
	document.getElementById('root')
);
