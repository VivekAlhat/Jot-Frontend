import React from "react";
import UserBar from "./UserBar";
import Notes from "./Notes";

const DashBoard = () => {
  return (
    <React.Fragment>
      <UserBar />
      <Notes />
    </React.Fragment>
  );
};

export default DashBoard;
