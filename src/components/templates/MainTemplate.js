import NavBar from '../molecules/NavBar/NavBar';
import classes from './MainTemplate.module.scss';

const MainTemplate = ({ children }) => {
	return (
		<>
			<NavBar></NavBar>
			<div className={classes.wrapper}>{children}</div>
		</>
	);
};

export default MainTemplate;
