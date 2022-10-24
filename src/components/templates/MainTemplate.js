import NavBar from '../organisms/NavBar/NavBar';
import SearchBar from '../organisms/SearchBar/SearchBar';
import classes from './MainTemplate.module.scss';
import News from '../organisms/News/News';

const MainTemplate = ({ children }) => {
	return (
		<div className={classes.gridContainer}>
			<NavBar></NavBar>
			<SearchBar />
			<div className={classes.wrapper}>{children}</div>
			<News />
		</div>
	);
};

export default MainTemplate;
