import classes from './NavItem.module.scss';
import { NavLink } from 'react-router-dom';

const isActiveItem = (isActive) =>
	classes.item + ' ' + (isActive ? classes.itemActive : '');

const NavItem = ({ name, href }) => {
	return (
		<NavLink to={href} end className={({ isActive }) => isActiveItem(isActive)}>
			{name}
		</NavLink>
	);
};

export default NavItem;

// className={({ isActive }) =>
// classes.item + ' ' + (isActive ? classes.itemActive : '')
