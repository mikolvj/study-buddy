import UsersList from '../components/organisms/UsersList/UsersList';
import Wrapper from '../components/atoms/Wrapper/Wrapper';
import GroupNav from '../components/molecules/GroupNav/GroupNav';
import { useStudents } from '../hooks/useStudents';
import useModal from '../hooks/useModal';
import { useState } from 'react';
import Modal from '../components/organisms/Modals/Modal';

const Dashboard = () => {
	const { groups, students, groupId, getStudentById } = useStudents();
	const [currentStudent, setCurrentStudent] = useState();
	const { isOpen, handleOpenModal, handleCloseModal } = useModal();

	const handleOpenStudentDetails = async (id) => {
		const student = await getStudentById(id);
		setCurrentStudent(student);
		handleOpenModal();
	};

	return (
		<Wrapper>
			<GroupNav id={groupId || groups[0]} groups={groups} />
			<UsersList
				students={students}
				handleOpenStudentDetails={handleOpenStudentDetails}
			/>
			{isOpen ? (
				<Modal handleClose={handleCloseModal} student={currentStudent} />
			) : null}
		</Wrapper>
	);
};
export default Dashboard;
