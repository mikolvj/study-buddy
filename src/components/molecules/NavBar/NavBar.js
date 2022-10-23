import classes from './NavBar.module.scss';
import NavHeader from '../../atoms/NavHeader/NavHeader';
import NavItem from '../../atoms/NavItem/NavItem';

const itemActive = 'itemActive';

const NavBar = () => {
	return (
		<div className={classes.wrapper}>
			<NavHeader />
			<NavItem href='/' name='Home'></NavItem>
			<NavItem href='/add-user' name='Add user'></NavItem>
		</div>
	);
};

export default NavBar;
