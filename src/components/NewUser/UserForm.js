import React from "react";
import "./UserForm.css";

const UserForm = () => {
  return (
    <form>
      <div className="new-user__controls">
        <div className="new-user__control">
          <label>Username</label>
          <input type="name"></input>
          <label>Age (Years)</label>
          <input type="number"></input>
        </div>
      </div>
      <div className="new-user__actions">
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default UserForm;
