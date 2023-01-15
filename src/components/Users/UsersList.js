import UserItem from './UserItem';
import './UsersList.css';

const UsersList = (props) => {

if (props.items.length === 0) { 
    return <h2 className="users-list__fallback">Found no users.</h2>
}
  return <ul className="users-list">
    {props.items.map((user) => {
    return (
      <UserItem
        name={user.name}
        age={user.age}
        key={user.id}
      />
    );
  })}
  </ul>
}


export default UsersList; 