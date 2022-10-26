import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate';
import Dashboard from './Dashboard';
import AddUserView from './AddUserView';
// import UsersProvider from '../providers/UsersProvider';

import '../assets/styles/global.scss';

function Root() {
	return (
		<Router>
			<MainTemplate>
				{/* <UsersProvider> */}
				<Routes>
					<Route path='/' exact element={<Navigate to='/dashboard' />} />
					{/* <Route path='/dashboard/:id?' exact element={<Dashboard />} /> */}
					<Route path='/dashboard/' element={<Dashboard />}>
						<Route path=':groupId' element={<Dashboard />} />
					</Route>
					<Route path='/add-user' element={<AddUserView />} />
				</Routes>
				{/* </UsersProvider> */}
			</MainTemplate>
		</Router>
	);
}

export default Root;
