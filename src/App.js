import "./App.css";
import NewUser from "./components/NewUser/NewUser";
import Users from "./components/Users/Users";
import React, { useState } from "react";

function App() {
  const [addedUsers, setAddedUsers] = useState([
    {
      name: "Lol",
      age: "31",
      id: "22"
    },
  ]);

  const usersHandler = (e) => {
    setAddedUsers(e);
  }

  return (
    <div className="App">
      <NewUser addUser={usersHandler}/>
      <Users users={addedUsers} />
    </div>
  );
}

export default App;
