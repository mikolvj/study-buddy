import classes from './AddButton.module.scss';

const AddButton = ({ btnLabel, onClick }) => {
	return (
		<button className={classes.addButton} onClick={onClick}>
			{btnLabel}
		</button>
	);
};

export default AddButton;
