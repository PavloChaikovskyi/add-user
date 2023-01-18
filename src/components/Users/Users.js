import React from "react";
import UsersList from "./UsersList";
import Card from "../UI/Card";

const Users = (props) => {

    

 return (
    <Card className="users">
        <UsersList  items={props.users}/>
    </Card>
 );
}

export default Users; 