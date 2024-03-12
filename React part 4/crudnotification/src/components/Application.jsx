import React, { Component } from "react";
import { formatDistanceToNow } from "date-fns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import  Table  from "./Table";
import  Modal  from "./Modal";
import ViewDialog from "./ViewDialog";
import ConfirmationModal from "./ConfirmationModal";
import ViewDialogNotification from "./ViewDialogNotification";
// import "./App.css";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      confirmationModalOpen: false,
      viewDialogOpen: false,
      notification: null,
      notifications: [],
      notificationOpen: false,
      rows: [
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
      ],
      rowToDelete: null,
      rowToEdit: null,
      selectedRow: null,
    };
  }


  handleAddSuccess = (name) => {
    const newNotification = `New row added successfully: ${name}`;
    // Check if the new notification already exists
    if (!this.state.notifications.includes(newNotification)) {
      this.setState((prevState) => ({
        notifications: [...prevState.notifications, newNotification],
      }));
    }
  };
  

  handleEditSuccess = (name) => {
    const editNotification = `Row edited successfully: ${name}`;
    // Check if the edit notification already exists
    if (!this.state.notifications.includes(editNotification)) {
      this.setState((prevState) => ({
        notifications: [...prevState.notifications, editNotification],
      }));
    }
  };

  handleConfirmDelete = () => {
    const { rows, rowToDelete } = this.state;
    const deletedRow = rows[rowToDelete];
    const deleteNotification = `Row deleted successfully: ${deletedRow.name}`;
    this.setState((prevState) => ({
      notifications: [...prevState.notifications, deleteNotification],
      rows: prevState.rows.filter((_, idx) => idx !== prevState.rowToDelete),
      confirmationModalOpen: false,
      viewDialogOpen: true,
    }));
  };

  handleDeleteRow = (targetIndex) => {
    this.setState({ rowToDelete: targetIndex, confirmationModalOpen: true });
  };

  handleCancelDelete = () => {
    this.setState({ confirmationModalOpen: false });
  };

  handleEditRow = (idx) => {
    this.setState({ rowToEdit: idx, modalOpen: true });
  };

  handleViewRow = (row) => {
    this.setState({ selectedRow: row, viewDialogOpen: true });
  };

  handleSubmit = (newRow) => {
    const { rowToEdit, rows } = this.state;
    if (rowToEdit === null) {
      this.setState((prevState) => ({
        rows: [...prevState.rows, newRow],
      }), () => this.handleAddSuccess(newRow.name));
    } else {
      this.setState((prevState) => ({
        rows: prevState.rows.map((currRow, idx) =>
          idx !== prevState.rowToEdit ? currRow : newRow
        ),
      }), () => this.handleEditSuccess(newRow.name));
    }

    this.setState({ modalOpen: false, rowToEdit: null });
  };

  handleNotificationClose = (index) => {
    const { notifications } = this.state;
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    this.setState({ notifications: updatedNotifications });
  };

  render() {
    const {
      modalOpen,
      confirmationModalOpen,
      viewDialogOpen,
      notification,
      notifications,
      notificationOpen,
      rows,
      selectedRow,
    } = this.state;

    return (
      <div className="App">
        <Table
          rows={rows}
          deleteRow={this.handleDeleteRow}
          editRow={this.handleEditRow}
          onView={this.handleViewRow}
        />
        <button onClick={() => this.setState({ modalOpen: true })} className="btn">
          Add New User
        </button>

        {/* Notification container */}
        <div className="notification-container">
          <div className="belliccon">
            <i
              className="fas fa-bell bell-icon" style={{ color: 'white' }}
              onClick={() => this.setState({ notificationOpen: !notificationOpen })}
            ></i>
          </div>
          {notificationOpen && (
            <div className="notifications">
              <span className="notify-cont" onClick={() => this.setState({ notificationOpen: false })}>
                <p style={{ textAlign: 'center' }}><b>Notifications</b></p>
                <FontAwesomeIcon icon={faTimes} style={{ color: '#ca1628' }} onClick={() => this.setState({ notificationOpen: false })} />
              </span>
              {notifications.map((notification, index) => (
                <div key={index} className="notification-item">
                  {notification} <br />
                  <span className="time" style={{ fontSize: '12px' }}>{formatDistanceToNow(new Date())}</span>
                  <span className="close-btn" onClick={() => this.handleNotificationClose(index)}>
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
            onConfirm={this.handleConfirmDelete}
            onCancel={this.handleCancelDelete}
          />
        )}
        {modalOpen && (
          <Modal
            closeModal={() => {
              this.setState({ modalOpen: false, rowToEdit: null });
            }}
            onSubmit={this.handleSubmit}
            defaultValue={this.state.rowToEdit !== null && rows[this.state.rowToEdit]}
            onSuccess={
              this.state.rowToEdit === null ? this.handleAddSuccess : this.handleEditSuccess
            }
          />
        )}
        {notification && (
          <ViewDialogNotification
            rowData={{ message: notification }}
            closeModal={() => this.setState({ notification: null })}
          />
        )}
        {viewDialogOpen && (
          <ViewDialog
            rowData={selectedRow}
            closeModal={() => this.setState({ viewDialogOpen: false })}
          />
        )}
      </div>
    );
  }
}

export default Application;
