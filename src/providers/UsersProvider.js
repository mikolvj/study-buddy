import React, { useEffect, useState } from 'react';

export const UsersContext = React.createContext({
	users: [],
	isLoading: false,
	handlerAddUser: () => {},
	deleteUser: () => {},
});

const UsersProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [isLoading, setLoadingState] = useState([]);

	useEffect(() => {
		setLoadingState(true);
	}, []);

	const handleAddUser = (f) => {
		const newUser = {
			name: f.name,
			attendance: f.attendance,
			average: f.average,
		};
		setUsers([newUser, ...users]);
	};

	const deleteUser = (name) => {
		const filteredUsers = users.filter((users) => users.name !== name);
		setUsers(filteredUsers);
	};
	return (
		<UsersContext.Provider
			value={{
				users,
				handleAddUser,
				deleteUser,
				isLoading,
			}}
		>
			{children}
		</UsersContext.Provider>
	);
};

export default UsersProvider;
