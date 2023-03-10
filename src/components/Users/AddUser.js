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

        if ( +enteredUserAge < 1) {
          return; 
        }

        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
          return; 
        }

        setEnteredUsername('');
        setEnteredUserAge(''); 
    }

    const userNameChangeHandler = (event) => {
      setEnteredUsername(event.target.value);
    }

    const userAgeChangeHandler = (event) => {
      setEnteredUserAge(event.target.value);
    }
      
      return (
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input value={enteredUserName} id="username" type="text" onChange={userNameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input value={enteredUserAge} id="age" type="number" onChange={userAgeChangeHandler}></input>
                <Button type="submit" text="Add user" />
          </form>
        </Card>
      );
};

export default AddUser; 