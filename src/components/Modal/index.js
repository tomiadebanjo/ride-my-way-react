import React from 'react';
import classes from './style.scss'

const Modal = ({ handleClose, show, children }) => {

  const showHideClassName = show ? `${classes.modal}  ${classes.display_block}` : `${classes.modal}  ${classes.display_none}`;
	return (
		<div className={showHideClassName}>
			<section className={classes.modal_main}>
      <span
        className={classes.close}
        id="ride-close"
        onClick={handleClose}
      >&times;</span>
				{children}
			</section>
		</div>
	);
};

export default Modal;
