import { users } from '../../../data/users';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import classes from './UsersList.module.scss';

const UsersList = () => {
	return (
		<div className={classes.wrapper}>
			<ul className={classes.styledList}>
				{users.map((userData) => {
					return <UsersListItem userData={userData} />;
				})}
			</ul>
		</div>
	);
};

export default UsersList;
