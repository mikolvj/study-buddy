import UsersList from '../components/organisms/UsersList/UsersList';
import classes from './Root.module.scss';
import '../assets/styles/global.scss';

function Root() {
	return (
		<div className={classes.wrapper}>
			<UsersList />
		</div>
	);
}

export default Root;
