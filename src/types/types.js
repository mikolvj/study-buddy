import { PropTypes } from 'prop-types';

export const UserShape = {
	average: PropTypes.string,
	name: PropTypes.string.isRequired,
	attendance: PropTypes.string,
};
