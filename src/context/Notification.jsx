import React, { createContext, useContext, useState } from "react";
import "./Notification.css";

const Notification = ({ notification }) => {
  const { id, message, severity } = notification;

  const background = {
    success: "cyan",
    error: "red",
    warning: "yellow",
    info: "orange"
  };
  const notificationStyle = {
    position: "fixed",
    bottom: "1rem",
    left: "80%",
    zIndex: 9999,
    padding: "10px",
    backgroundColor: background.default,
    color: "black",
    maxWidth: "90%",
    textAlign: "center",
  };

  return <div id={id} className="bgNotification" style={notificationStyle}>{message}</div>;
};

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  const setNotification = (severity, message) => {
    const newNotification = { id: idCounter, severity, message };
    setNotifications((prevNotifications) => {
      const updatedNotifications = [...prevNotifications, newNotification];
      setTimeout(() => {
        // Remueve la notificación después de 2 segundos
        setNotifications(updatedNotifications.filter(notification => notification.id !== newNotification.id));
      }, 2000);
      setIdCounter(idCounter + 1);
      return updatedNotifications;
    });
  };

  return (
    <NotificationContext.Provider value={{ setNotification }}>
      <div style={{ position: "relative" }}>
        {notifications.map((notification) => (
          <Notification key={notification.id} notification={notification} />
        ))}
      </div>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};

export default Notification;
