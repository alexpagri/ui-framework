
import React, {
  PropTypes,
} from 'react';

const ModalHeader = (props) => {
  let closeButton;
  let title;
  if (props.title) {
    title = (
      <div className="modalHeader__title">
        {props.title}
      </div>
    );
  }
  if (props.onClose) {
    closeButton = (
      <div
        className="icon modalHeader__closeButton"
        onClick={props.onClose}
      >
      </div>
    );
  }
  return (
    <div className="modalHeader">
      {title}
      {closeButton}
    </div>
  );
};

ModalHeader.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
};

export default ModalHeader;
