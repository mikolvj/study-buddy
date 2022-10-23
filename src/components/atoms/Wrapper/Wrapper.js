import classes from './Wrapper.module.scss';

const Wrapper = ({ content, children }) => {
	return <div className={classes.wrapper}>{children}</div>;
};

export default Wrapper;
