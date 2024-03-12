
import { useState } from "react";
import "./App.css";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";
import ViewDialog from "./components/ViewDialog";
import ConfirmationModal from "./components/ConfirmationModal";
import ViewDialogNotification from "./components/ViewDialogNotification"
import { formatDistanceToNow } from "date-fns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Application() {

  const [modalOpen, setModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      Id: "1",
      name: "Alexa",
      designation: "Software Engineer",
      department: "CSE",
    },
    {
      Id: "2",
      name: "Zombey",
      designation: "Software Engineer",
      department: "CSE",
    },
    {
      Id: "3",
      name: "Pricing",
      designation: "Software Engineer",
      department: "CSE",
    },

  ]);
  console.log(rows)
  const [rowToDelete, setRowToDelete] = useState(null);
  const [rowToEdit, setRowToEdit] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleAddSuccess = (name) => {
    const newNotification = `New row added successfully: ${name}`;
    setNotifications([...notifications, newNotification]);
  };

  const handleEditSuccess = (name) => {
    const editNotification = `Row edited successfully: ${name}`;
    setNotifications([...notifications, editNotification]);
  };

  const handleConfirmDelete = () => {
    const deletedRow = rows[rowToDelete];
    const deleteNotification = `Row deleted successfully: ${deletedRow.name}`;
    setNotifications([...notifications, deleteNotification]);

    setRows(rows.filter((_, idx) => idx !== rowToDelete));
    setConfirmationModalOpen(false);
    setViewDialogOpen(true);
  };

  const handleDeleteRow = (targetIndex) => {
    console.log(targetIndex)
    setRowToDelete(targetIndex);
    setConfirmationModalOpen(true);
  };



  const handleCancelDelete = () => {
    setConfirmationModalOpen(false);
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleViewRow = (row) => {
    setSelectedRow(row);
    setViewDialogOpen(true);
  };

  const handleSubmit = (newRow) => {
    if (rowToEdit === null) {
      setRows([...rows, newRow]);
      handleAddSuccess(newRow.name);
    } else {
      setRows(
        rows.map((currRow, idx) => (idx !== rowToEdit ? currRow : newRow))
      );
      handleEditSuccess(newRow.name);
    }

    setModalOpen(false);
    setRowToEdit(null);
  };

  const handleNotificationClose = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  return (
    <div className="App">
      <Table
        rows={rows}
        deleteRow={handleDeleteRow}
        editRow={handleEditRow}
        onView={handleViewRow}
      />
      <button onClick={() => setModalOpen(true)} className="btn">
        Add New User
      </button>

      {/* Notification container */}
      <div className="notification-container">
      <div className="belliccon">
        <i
          className="fas fa-bell bell-icon" style={{ color: 'white' }}
          onClick={() => setNotificationOpen(!notificationOpen)}
        ></i>
        </div> 
        {notificationOpen && (
          <div className="notifications">
            <span className="notify-cont" onClick={() => setNotificationOpen(false)}>
              <p style={{ textAlign: 'center' }}><b>Notifications</b></p>
              <FontAwesomeIcon icon={faTimes} style={{ color: '#ca1628' }} onClick={() => setNotificationOpen(false)} />
            </span>
            {notifications.map((notification, index) => (
              <div key={index} className="notification-item">
                {notification} <br />
                <span className="time" style={{ fontSize: '12px' }}>{formatDistanceToNow(new Date())}</span>
                <span className="close-btn" onClick={() => handleNotificationClose(index)}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </div>
            ))}
          </div>
        )}

      </div>

      {confirmationModalOpen && (
        <ConfirmationModal
          message="Are you sure you want to delete this row?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
          onSuccess={
            rowToEdit === null ? handleAddSuccess : handleEditSuccess
          }
        />
      )}
      {notification && (
        <ViewDialogNotification
          rowData={{ message: notification }}
          closeModal={() => setNotification(null)}
        />
      )}
      {viewDialogOpen && (
        <ViewDialog
          rowData={selectedRow}
          closeModal={() => setViewDialogOpen(false)}
        />
      )}
    </div>
  );
}

export default Application;





// function Application() {

//   const [modalOpen, setModalOpen] = useState(false);
//   const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
//   const [viewDialogOpen, setViewDialogOpen] = useState(false);
//   const [notification, setNotification] = useState(null);
//   const [notifications, setNotifications] = useState([]);
//   const [notificationOpen, setNotificationOpen] = useState(false);
//   const [rows, setRows] = useState([
//     {
//       Id: "1",
//       name: "Alexa",
//       designation: "Software Engineer",
//       department: "CSE",
//     },
//     {
//       Id: "2",
//       name: "Zombey",
//       designation: "Software Engineer",
//       department: "CSE",
//     },
//     {
//       Id: "3",
//       name: "Pricing",
//       designation: "Software Engineer",
//       department: "CSE",
//     },

//   ]);
//   console.log(rows)
//   const [rowToDelete, setRowToDelete] = useState(null);
//   const [rowToEdit, setRowToEdit] = useState(null);
//   const [selectedRow, setSelectedRow] = useState(null);

//   const handleAddSuccess = (name) => {
//     const newNotification = `New row added successfully: ${name}`;
//     setNotifications([...notifications, newNotification]);
//   };

//   const handleEditSuccess = (name) => {
//     const editNotification = `Row edited successfully: ${name}`;
//     setNotifications([...notifications, editNotification]);
//   };

//   const handleConfirmDelete = () => {
//     const deletedRow = rows[rowToDelete];
//     const deleteNotification = `Row deleted successfully: ${deletedRow.name}`;
//     setNotifications([...notifications, deleteNotification]);

//     setRows(rows.filter((_, idx) => idx !== rowToDelete));
//     setConfirmationModalOpen(false);
//     setViewDialogOpen(true);
//   };

//   const handleDeleteRow = (targetIndex) => {
//     console.log(targetIndex)
//     setRowToDelete(targetIndex);
//     setConfirmationModalOpen(true);
//   };



//   const handleCancelDelete = () => {
//     setConfirmationModalOpen(false);
//   };

//   const handleEditRow = (idx) => {
//     setRowToEdit(idx);
//     setModalOpen(true);
//   };

//   const handleViewRow = (row) => {
//     setSelectedRow(row);
//     setViewDialogOpen(true);
//   };

//   const handleSubmit = (newRow) => {
//     if (rowToEdit === null) {
//       setRows([...rows, newRow]);
//       handleAddSuccess(newRow.name);
//     } else {
//       setRows(
//         rows.map((currRow, idx) => (idx !== rowToEdit ? currRow : newRow))
//       );
//       handleEditSuccess(newRow.name);
//     }

//     setModalOpen(false);
//     setRowToEdit(null);
//   };

//   return (
//     <div className="App">
//       <Table
//         rows={rows}
//         deleteRow={handleDeleteRow}
//         editRow={handleEditRow}
//         onView={handleViewRow}
//       />
//       <button onClick={() => setModalOpen(true)} className="btn">
//         Add New User
//       </button>

//       {/* Notification container */}
//       <div className="notification-container">
//         <i
//           className="fas fa-bell" style={{ color: 'white' }}
//           onClick={() => setNotificationOpen(!notificationOpen)}
//         ></i>
//         {notificationOpen && (
//           <div className="notifications">
//             {/* <span onClick={() => setNotificationOpen(false)}>
//     <i className="fa-solid fa-xmark fa-lg" style={{ color: '#ca1628' }}></i>
//   </span> */}

//             <span className="notify-cont" onClick={() => setNotificationOpen(false)}><p style={{ textAlign: 'center' }}> <b>Notifications</b></p>  <i className="fa-solid fa-xmark fa-lg" style={{ color: '#ca1628' }}></i>
//             </span>
//             {notifications.map((notification, index) => (
//               <div key={index} className="notification-item">
//                 {notification} <br></br>
//                 <span className="time" style={{ fontSize: '12px' }}>{formatDistanceToNow(new Date())}</span>

//               </div>

//             ))}

//           </div>
//         )}
//       </div>

//       {confirmationModalOpen && (
//         <ConfirmationModal
//           message="Are you sure you want to delete this row?"
//           onConfirm={handleConfirmDelete}
//           onCancel={handleCancelDelete}
//         />
//       )}
//       {modalOpen && (
//         <Modal
//           closeModal={() => {
//             setModalOpen(false);
//             setRowToEdit(null);
//           }}
//           onSubmit={handleSubmit}
//           defaultValue={rowToEdit !== null && rows[rowToEdit]}
//           onSuccess={
//             rowToEdit === null ? handleAddSuccess : handleEditSuccess
//           }
//         />
//       )}
//       {notification && (
//         <ViewDialogNotification
//           rowData={{ message: notification }}
//           closeModal={() => setNotification(null)}
//         />
//       )}
//       {viewDialogOpen && (
//         <ViewDialog
//           rowData={selectedRow}
//           closeModal={() => setViewDialogOpen(false)}
//         />
//       )}
//     </div>
//   );
// }











