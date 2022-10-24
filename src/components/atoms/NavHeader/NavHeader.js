import classes from './NavHeader.module.scss';

const NavHeader = () => {
	return (
		<div className={classes.wrapper}>
			<p className={classes.appName}>Study Buddy</p>
		</div>
	);
};

export default NavHeader;
