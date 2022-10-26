import classes from './UsersListItem.module.scss';
import CloseButton from '../../atoms/CloseButton/CloseButton';
import { useContext } from 'react';
import { UsersContext } from '../../../providers/UsersProvider';

const UsersListItem = ({
	onClick,
	users: { average, name, attendance = '0%' },
}) => {
	let grade;
	if (Number(average) > 4) grade = classes.gradeGreen;
	else if (Number(average) > 3) grade = classes.gradeYellow;
	else grade = classes.gradeRed;

	const { deleteUser } = useContext(UsersContext);

	return (
		<li className={classes.wrapper} onClick={onClick}>
			<div className={`${classes.average} ${grade}`}>{average}</div>
			<div>
				<p className={classes.name}>{name}</p>
				<p className={classes.attendance}>attendance: {attendance}</p>
			</div>
			<CloseButton onClick={() => deleteUser(name)} />
		</li>
	);
};

// // sprawdzanie poprawności propsów - czyli, czy mają poprawny typ danych. isRequired - wartość wymagana
//
// wymaga importu PropTypes from react
//
// UsersListItem.propTypes = {
// 	userData: PropTypes.shape({
// 		average: PropTypes.string,
// 		name: PropTypes.string.isRequired,
// 		attendance: PropTypes.string,
// 	}),
// };

export default UsersListItem;

// attendance='0%' - wartość domyślna jeśli będzie brak danych - destrukturyzacja

// dodanie dwóch klas do 1 itemu:
// className = {[styles.klasa1, styles.klasa2].join(' ')}
// lub
// className = {`${styles.klasa1} ${styles.klasa2}`}
// można w drugim sposobie wykorzystać wyrażenie warunkowe (ternary operator)
// className = {`${styles.klasa1} ${warunek (np. isActive) ? styles.klasa2 : styles.klasa3}`}
//
// instalacja sass w node
// npm i node-sass
//
// warunek lub wartość domyślna
// ({warunek}) => wartość || wartość domyślna
//
// import { ReactComponent as DeleteIcon } from '../../assets/icons/delete-icon.svg'; --- importuj ikonę jako komponent <DeleteIcon />
