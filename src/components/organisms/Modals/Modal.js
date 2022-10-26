import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import classes from './Modal.module.scss';
import AddButton from '../../atoms/AddButton/AddButton';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose }) => {
	const modalNode = document.createElement('div');

	useEffect(() => {
		modalContainer.appendChild(modalNode);

		return () => {
			modalContainer.removeChild(modalNode);
		};
	}, [modalNode]);

	return ReactDOM.createPortal(
		<div className={classes.modal}>
			Hello world.<AddButton btnLabel='Close' onClick={handleClose}></AddButton>
		</div>,
		modalNode
	);
};

export default Modal;
