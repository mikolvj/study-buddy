import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate';
import Dashboard from './Dashboard';
import AddUserView from './AddUserView';
import Modal from '../components/organisms/Modals/Modal';
import { useState } from 'react';

import '../assets/styles/global.scss';

function Root() {
	const [isModalOpen, setModalState] = useState(false);
	return (
		<Router>
			<MainTemplate>
				{isModalOpen ? <Modal handleClose={() => setModalState(false)} /> : null}
				<button onClick={() => setModalState(true)}>TOTAL</button>
				<Routes>
					<Route path='/' exact element={<Navigate to='/dashboard' />} />
					<Route path='/dashboard/' element={<Dashboard />}>
						<Route path=':groupId' element={<Dashboard />} />
					</Route>
					<Route path='/add-user' element={<AddUserView />} />
				</Routes>
			</MainTemplate>
		</Router>
	);
}

export default Root;
