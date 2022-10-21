import { useState, useEffect } from 'react';
import { users as usersData } from '../../../data/users';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import classes from './UsersList.module.scss';

const mockAPI = (success) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (usersData) {
				resolve([...usersData]);
			} else {
				reject({ message: 'Error' });
			}
		}, 2000);
	});
};

const UsersList = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setLoadingState] = useState([]);

	useEffect(() => {
		setLoadingState(true);
		mockAPI()
			.then((data) => {
				setLoadingState(false);
				setUsers(data);
			})
			.catch((err) => console.log(err));
	}, []);

	const deleteUser = (name) => {
		const filteredUsers = users.filter((user) => user.name !== name);
		setUsers(filteredUsers);
	};

	return (
		<div className={classes.wrapper}>
			<h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
			<ul className={classes.styledList}>
				{users.map((userData, i) => {
					return (
						<UsersListItem
							key={userData.name}
							deleteUser={deleteUser}
							userData={userData}
							index={i}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default UsersList;
