import classes from './GroupNav.module.scss';
import AddButton from '../../atoms/AddButton/AddButton';
import { Link } from 'react-router-dom';

const GroupNav = ({ id, groups }) => {
	return (
		<>
			<span className={classes.header}>Selected group: {id || groups[0]}</span>
			{groups.map((group) => (
				<Link to={`/dashboard/${group}`} key={group}>
					<AddButton btnLabel={group} className={classes.btn}></AddButton>
				</Link>
			))}
		</>
	);
};

export default GroupNav;
