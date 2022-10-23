import React from 'react';
import classes from './FormField.module.scss';
import PropTypes from 'prop-types';

const FormField = React.forwardRef(
	({ onChange, label, name, id, type = 'text', value }, ref) => {
		return (
			<div className={classes.wrapper}>
				<label htmlFor={id}>{label}</label>
				<input
					name={name}
					id={id}
					type={type}
					value={value}
					onChange={onChange}
					ref={ref}
				></input>
			</div>
		);
	}
);

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string,
};

export default FormField;
