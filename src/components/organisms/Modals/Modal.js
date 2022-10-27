import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import classes from './Modal.module.scss';
import AddButton from '../../atoms/AddButton/AddButton';
import CloseButton from '../../atoms/CloseButton/CloseButton';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleClose, children, student }) => {
	const modalNode = document.createElement('div');

	useEffect(() => {
		modalContainer.appendChild(modalNode);

		return () => {
			modalContainer.removeChild(modalNode);
		};
	}, [modalNode]);

	return ReactDOM.createPortal(
		<>
			<div className={classes.backdrop} onClick={handleClose}></div>
			<div className={classes.modal}>
				<div className={classes.modalHeader}>
					<div className={classes.modalHeaderAverage}>{student.average}</div>
					<div className={classes.modalHeaderName}>{student.name}</div>
					<div className={classes.modalHeaderButtons}>
						<CloseButton />
					</div>
				</div>

				<div className={classes.modalBody}>
					<p className={classes.modalTitle}>Course:</p>
					<p className={classes.modalCourse}>{student.course}</p>
					<p className={classes.modalTitle}>Average grades:</p>
					<div className={classes.modalAverages}>
						<p>Modern Economy</p>
						<div className={classes.modalAverageGrade}>{student.economyGrade}</div>
					</div>
                    <div className={classes.modalAverages}>
						<p>Trade and logistics</p>
						<div className={classes.modalAverageGrade}>{student.tradeGrade}</div>
					</div>
                    <div className={classes.modalAverages}>
						<p>Business philopsophy</p>
						<div className={classes.modalAverageGrade}>{student.philosophyGrade}</div>
					</div>
				</div>

				<AddButton btnLabel='Close' onClick={handleClose}></AddButton>
			</div>
		</>,
		modalNode
	);
};

export default Modal;
