import React, { useEffect, useState } from 'react';
import { users as usersData } from '../data/users';

const mockAPI = (success) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (usersData) {
				resolve([...usersData]);
			} else {
				reject({ message: 'Error' });
			}
		}, 200);
	});
};
export const UsersContext = React.createContext({
	users: [],
	isLoading: false,
	handlerAddUser: () => {},
	deleteUser: () => {},
});

const UsersProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [isLoading, setLoadingState] = useState([]);

	const handlerAddUser = (f) => {
		const newUser = {
			name: f.name,
			attendance: f.attendance,
			average: f.average,
		};
		setUsers([newUser, ...users]);
	};

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
		const filteredUsers = users.filter((users) => users.name !== name);
		setUsers(filteredUsers);
	};
	return (
		<UsersContext.Provider
			value={{
				users,
				handlerAddUser,
				deleteUser,
				isLoading,
			}}
		>
			{children}
		</UsersContext.Provider>
	);
};

export default UsersProvider;
