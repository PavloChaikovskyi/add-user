import React, {useState} from "react";
import classes from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => { 

  const [enteredUserName, setEnteredUsername] = useState(''); 
  const [enteredUserAge, setEnteredUserAge] = useState(''); 

    const addUserHandler = event => {
        event.preventDefault();
        console.log(enteredUserName, enteredUserAge);
    }

    const userNameChangeHandler = (event) => {
      setEnteredUsername(event.target.value);
      console.log(event.target.value);
    }

    const userAgeChangeHandler = (event) => {
      setEnteredUserAge(event.target.value);
      console.log(event.target.value);
    }
      
      return (
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={userNameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={userAgeChangeHandler}></input>
                <Button type="submit" text="Add user" />
          </form>
        </Card>
      );
};

export default AddUser; 