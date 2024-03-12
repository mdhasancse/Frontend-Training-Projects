
import React from "react";

const ViewDialogNotification = ({ rowData, closeModal }) => {
  return (
    <div className="view-dialog">
      <div className="dialog-content">
        <p>{rowData.message}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default ViewDialogNotification;




