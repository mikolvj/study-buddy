import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import classes from './UsersList.module.scss';
import { useContext } from 'react';
import { UsersContext } from '../../../providers/UsersProvider';

const UsersList = ({ students }) => {
	const { isLoading } = useContext(UsersContext);

	return (
		<div className={classes.wrapper}>
			<h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
			<ul className={classes.styledList}>
				{students.map((students, i) => {
					return (
						<UsersListItem key={students.name} users={students} index={i} />
					);
				})}
			</ul>
		</div>
	);
};

export default UsersList;
