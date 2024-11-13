import React from "react";

const Alert = ({ closeAlert, alertAdd, alertDelete, alertInfo }) => {
  return (
    <div
      className={`${alertInfo && "alert alert-danger alert_r"} ${
        alertAdd && "alert alert-success"
      } ${alertDelete && "alert alert-danger alert_r"}`}
      onClick={() => {
        closeAlert();
      }}
      role="alert"
    >
      {alertInfo ? (
        <p>Insert all fild</p>
      ) : alertDelete ? (
        <p>Delete success</p>
      ) : (
        <p>Adding success</p>
      )}
    </div>
  );
};

export default Alert;
