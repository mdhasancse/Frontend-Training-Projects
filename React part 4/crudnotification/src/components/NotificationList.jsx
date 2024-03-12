import React, { Component } from "react";

class NotificationList extends Component {
  render() {
    const { notifications } = this.props;
    return (
      <div className="notification-list">
        {notifications.map((notification, index) => (
          <div key={index} className="notification-item">
            {notification.message}
          </div>
        ))}
      </div>
    );
  }
}

export default NotificationList;
