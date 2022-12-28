import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";
import "./css/AskvitBox.css";

function AskvitBox() {
  const user = useSelector(selectUser);
  return (
    <div className="AskvitBox">
      <div className="AskvitBox__info">
        <Avatar src={user?.photo} />
      </div>
      <div className="AskvitBox__askvit">
        <h5>What is your question or link?</h5>
      </div>
    </div>
  );
}

export default AskvitBox;
