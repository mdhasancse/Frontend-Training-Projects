import React, { Component } from "react";

class ViewDialogNotification extends Component {
  render() {
    const { rowData, closeModal } = this.props;
    
    return (
      <div className="view-dialog">
        <div className="dialog-content">
          <p>{rowData.message}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  }
}

export default ViewDialogNotification;
