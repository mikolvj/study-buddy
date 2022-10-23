// import classes from './Label.module.scss';

const Label = ({ label, name, htmlFor }) => {
	return <label htmlFor={htmlFor}>{label}</label>;
};

export default Label;
