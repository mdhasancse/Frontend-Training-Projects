
import React from "react";


const NotificationList = ({ notifications }) => {
  return (
    <div className="notification-list">
  
      {notifications.map((notification, index) => (
        <div key={index} className="notification-item">
          {notification.message}
          
        </div>
      ))}
    </div>
  );
};

export default NotificationList;



