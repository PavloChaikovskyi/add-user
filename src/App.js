import AddUser from "./components/Users/AddUser";
import Users from "./components/Users/Users";
import React, { useState } from "react";

function App() {
  const [addedUsers, setAddedUsers] = useState([
    {
      name: "Lol",
      age: "31",
      id: "22"
    },
    {
      name: "Pol",
      age: "29",
      id: "21"
    },
  ]);

  const usersHandler = (e) => {
    setAddedUsers(e);
  }

  return (
    <div className="App">
      <AddUser users={addedUsers} addUser={usersHandler}/>
      <Users users={addedUsers} />
    </div>
  );
}

export default App;
