import UserAdd from '../components/organisms/UserAdd/UserAdd';
import Wrapper from '../components/atoms/Wrapper/Wrapper';
import { UsersContext } from '../providers/UsersProvider';
import { useContext, useReducer } from 'react';

const initFormValue = {
	name: '',
	attendance: '',
	average: '',
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'INPUT CHANGE':
			return {
				...state,
				[action.field]: action.value,
			};
		case 'CLEAR VALUES': {
			return initFormValue;
		}
		default:
			return state;
	}
};

const AddUserView = () => {
	const [formValue, dispatch] = useReducer(reducer, initFormValue);
	const ctx = useContext(UsersContext);

	const handleSetFormValue = (e) => {
		dispatch({
			type: 'INPUT CHANGE',
			field: e.target.name,
			value: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formValue);
		ctx.handleAddUser(formValue);
		dispatch({ type: 'CLEAR VALUES' });
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
