import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate';
import Dashboard from './Dashboard';
import AddUserView from './AddUserView';
import UsersProvider from '../providers/UsersProvider';

import '../assets/styles/global.scss';

function Root() {
	return (
		<Router>
			<MainTemplate>
				<UsersProvider>
					<Routes>
						<Route path='/' exact element={<Dashboard />} />
						<Route path='/add-user' element={<AddUserView />} />
					</Routes>
				</UsersProvider>
			</MainTemplate>
		</Router>
	);
}

export default Root;
