import { users } from '../../data/users';
import UsersListItem from '../UsersListItem/UsersListItem';

const UsersList = () => {
	return (
		<div>
			<ul>
				{users.map((userData) => {
					return <UsersListItem userData={userData} />;
				})}
			</ul>
		</div>
	);
};

export default UsersList;
