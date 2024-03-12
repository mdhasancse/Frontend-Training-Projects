import React, { Component } from "react";
import '../styles/ConfirmationModal.css'

class ConfirmationModal extends Component {
  render() {
    const { message, onConfirm, onCancel } = this.props;
    return (
      <div className="confirmation-modal">
        <div className="modal-content">
          <p>{message}</p>
          <div className="buttons-container">
            <button onClick={onConfirm}>Yes</button>
            <button onClick={onCancel}>No</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmationModal;
