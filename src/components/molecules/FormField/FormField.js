// import Input from '../../atoms/Input/Input';
// import Label from '../../atoms/Label/Label';
import classes from './FormField.module.scss';
import PropTypes from 'prop-types';

const FormField = ({ onChange, label, name, id, type = 'text', value }) => {
	return (
		<div className={classes.wrapper}>
			<label htmlFor={id}>{label}</label>
			<input
				name={name}
				id={id}
				type={type}
				value={value}
				onChange={onChange}
			></input>
		</div>
	);
};

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string,
};

export default FormField;
