import classes from './Button.module.scss';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete-icon.svg';

const CloseButton = () => {
	return (
		<button className={classes.styledButton}>
			<DeleteIcon />
		</button>
	);
};

export default CloseButton;
