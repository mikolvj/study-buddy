import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import classes from './UsersList.module.scss';
import { useContext } from 'react';
import { UsersContext } from '../../../providers/UsersProvider';

const UsersList = () => {
	const { isLoading, users } = useContext(UsersContext);
	return (
		<div className={classes.wrapper}>
			<h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
			<ul className={classes.styledList}>
				{users.map((userData, i) => {
					return (
						<UsersListItem key={userData.name} userData={userData} index={i} />
					);
				})}
			</ul>
		</div>
	);
};

export default UsersList;
