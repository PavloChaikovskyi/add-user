import React from "react";
import Card from "../UI/Card";
import './UserItem.css';

const UserItem = (props) => {
  return (
    <li>
      <Card className="user-item">
        <span>{props.name}&nbsp;</span>
        <span>({props.age} years old)</span>
      </Card>
    </li>
  );
};

export default UserItem;
