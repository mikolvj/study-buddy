// import React from 'react';
// import ReactDOM from 'react-dom';
// import Root from './views/Root';
// import { worker } from './mocks/browser';

// worker.start({
// 	onUnhandledRequest: 'bypass',
// });

// ReactDOM.render(
// 	<>
// 		<Root />
// 	</>,
// 	document.getElementById('root')
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './views/Root';
import { worker } from './mocks/browser';

const container = document.getElementById('root');
const root = createRoot(container);

worker.start({ onUnhandledRequest: 'bypass' }).then(() => {
	root.render(
		<>
			<Root />
		</>
	);
});
