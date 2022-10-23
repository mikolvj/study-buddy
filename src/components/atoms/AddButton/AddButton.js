import classes from './AddButton.module.scss';

const AddButton = ({ btnLabel }) => {
	return <button className={classes.addButton}>{btnLabel}</button>;
};

export default AddButton;
