import classes from './Button.module.scss';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete-icon.svg';

const CloseButton = (props) => {
	return (
		<button className={classes.styledButton} {...props}>
			<DeleteIcon />
		</button>
	);
};

export default CloseButton;
