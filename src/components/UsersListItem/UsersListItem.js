import { PropTypes } from 'prop-types';

// attendance='0%' - wartość domyślna jeśli będzie brak danych
const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
	return (
		<li>
			<div>{average}</div>
			<div>
				<p>{name}</p>
				<p>{attendance}</p>
			</div>
			<button>X</button>
		</li>
	);
};

// sprawdzanie poprawności propsów - czyli, czy mają poprawny typ danych. isRequired - wartość wymagana
UsersListItem.propTypes = {
	userData: PropTypes.shape({
		average: PropTypes.string,
		name: PropTypes.string.isRequired,
		attendance: PropTypes.string,
	}),
};

export default UsersListItem;
