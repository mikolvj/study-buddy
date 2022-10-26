import UsersList from '../components/organisms/UsersList/UsersList';
import Wrapper from '../components/atoms/Wrapper/Wrapper';
import GroupNav from '../components/molecules/GroupNav/GroupNav';
import { useStudents } from '../hooks/useStudents';
import useModal from '../hooks/useModal';
import { useState } from 'react';
import Modal from '../components/organisms/Modals/Modal';

const Dashboard = () => {
	const { groups, students, groupId } = useStudents();
	const [currentStudent, setCurrentStudent] = useState();
	const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();

	const handleOpenStudentDetails = (id) => {
		setCurrentStudent(id);
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
				<Modal handleClose={handleCloseModal}>{currentStudent}</Modal>
			) : null}
		</Wrapper>
	);
};
export default Dashboard;
