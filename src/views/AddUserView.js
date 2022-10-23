import UserAdd from '../components/organisms/UserAdd/UserAdd';
import Wrapper from '../components/atoms/Wrapper/Wrapper';
import { UsersContext } from '../providers/UsersProvider';
import { useContext, useState } from 'react';

const initFormValue = {
	name: '',
	attendance: '',
	average: '',
};

const AddUserView = () => {
	const [formValue, setFormValue] = useState(initFormValue);
	const ctx = useContext(UsersContext);

	const handleSetFormValue = (e) => {
		setFormValue({
			...formValue,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formValue);
		ctx.handlerAddUser(formValue);
		setFormValue(initFormValue);
	};

	return (
		<Wrapper>
			<UserAdd
				handleSubmit={handleSubmit}
				formValue={formValue}
				handleSetFormValue={handleSetFormValue}
			/>
		</Wrapper>
	);
};

export default AddUserView;
