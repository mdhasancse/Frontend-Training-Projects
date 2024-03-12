
// import React from "react";
// import "./ViewDialog.css";

// const ViewDialog = ({ rowData, closeModal }) => {
//   return (
//     <div className="view-dialog-container">
//       <div className="view-dialog">
//         <h2>View Details</h2>
//         <div>
//           <strong>Id:</strong> {rowData.Id}
//         </div>
//         <div>
//           <strong>Name:</strong> {rowData.name}
//         </div>
//         <div>
//           <strong>Designation:</strong> {rowData.designation}
//         </div>
//         <div>
//           <strong>Department:</strong> {rowData.department}
//         </div>
//         <button onClick={closeModal} className="btn">
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ViewDialog;


import React from "react";
import "./ViewDialog.css";

const ViewDialog = ({ rowData, closeModal }) => {
  // Check if rowData is not null or undefined before accessing its properties
  if (!rowData) {
    return null; // Return early if rowData is null or undefined
  }

  return (
    <div className="view-dialog-container">
      <div className="view-dialog">
        <h2>View Details</h2>
        <div>
          <strong>Id:</strong> {rowData.Id}
        </div>
        <div>
          <strong>Name:</strong> {rowData.name}
        </div>
        <div>
          <strong>Designation:</strong> {rowData.designation}
        </div>
        <div>
          <strong>Department:</strong> {rowData.department}
        </div>
        <button onClick={closeModal} className="btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewDialog;
