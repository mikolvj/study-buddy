import { useCallback, useEffect, useState } from 'react';
// import { UsersContext } from '../providers/UsersProvider';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const useStudents = () => {
	// const { users } = useContext(UsersContext);
	const [students, setStudents] = useState([]);
	const [groups, setGroups] = useState([]);
	const { groupId } = useParams();

		const getStudentById = useCallback(async (studentId) => {
			try {
				const result = await axios.get(`users/${studentId}`);
				return result.data.students;
			} catch (e) {
				console.log(e);
			}
		});

	useEffect(() => {
		axios
			.get(`/groups`)
			.then(({ data }) => setGroups(data.groups))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get(`/users/${groupId || groups[0]}`)
			.then(({ data }) => setStudents(data.students))
			.catch((err) => console.log(err));
	}, [groupId, groups]);

	const findStudents = async (searchPhrase) => {
		try {
			const { data } = await axios.post(`/users/search`, {
				searchPhrase,
			});
			return data;
		} catch (e) {
			console.log(e);
		}
	};

	return {
		students,
		groups,
		findStudents,
		groupId,
		getStudentById,
	};
};
