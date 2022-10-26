import UsersList from '../components/organisms/UsersList/UsersList';
import Wrapper from '../components/atoms/Wrapper/Wrapper';
import GroupNav from '../components/molecules/GroupNav/GroupNav';
// import { useParams } from 'react-router-dom';
import { useStudents } from '../hooks/useStudents';
// import { UsersContext } from '../providers/UsersProvider';
// import { useContext, useState, useEffect } from 'react';
// import axios from 'axios';

const Dashboard = () => {
	// const { users } = useContext(UsersContext);
	// const [students, setStudents] = useState(users);
	// const [groups, setGroups] = useState([]);
	// const {  } = useParams();
	const { groups, students, groupId } = useStudents();

	// useEffect(() => {
	// 	axios
	// 		.get(`/groups`)
	// 		.then(({ data }) => setGroups(data.groups))
	// 		.catch((err) => console.log(err));
	// }, []);

	// useEffect(() => {
	// 	axios
	// 		.get(`/users/${id || groups[0]}`)
	// 		.then(({ data }) => setStudents(data.students))
	// 		.catch((err) => console.log(err));
	// }, [id, groups]);

	return (
		<Wrapper>
			<GroupNav id={groupId || groups[0]} groups={groups} />
			<UsersList students={students} />
		</Wrapper>
	);
};
export default Dashboard;
