import classes from './UserAdd.module.scss';
import FormField from '../../molecules/FormField/FormField';
import AddButton from '../../atoms/AddButton/AddButton';

const UserAdd = ({ handleSubmit, formValue, handleSetFormValue }) => {
	return (
		<form className={classes.wrapper} onSubmit={handleSubmit}>
			<h1>Add new user</h1>
			<FormField
				label='Name'
				id='name'
				name='name'
				value={formValue.name}
				onChange={handleSetFormValue}
			/>
			<FormField
				label='Attendance'
				id='attendance'
				name='attendance'
				value={formValue.attendance}
				onChange={handleSetFormValue}
			/>
			<FormField
				label='Average'
				id='average'
				name='average'
				value={formValue.average}
				onChange={handleSetFormValue}
			/>
			<AddButton btnLabel='Add'></AddButton>
		</form>
	);
};

export default UserAdd;
