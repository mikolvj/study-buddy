import classes from './SearchBar.module.scss';

const SearchBar = () => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.status}>
				<h4>Logged as:</h4>
				<h3>Teacher</h3>
			</div>
			<input className={classes.searchInput} placeholder='Search'></input>
		</div>
	);
};

export default SearchBar;
