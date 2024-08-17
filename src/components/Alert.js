import React, { useEffect } from "react";

const Alert = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Close the alert after 3 seconds
    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return <div className="alert">{message}</div>;
};

export default Alert;
