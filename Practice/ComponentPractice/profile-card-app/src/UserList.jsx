import React from "react";
import UserCard from "./UserCard.jsx";
import './UserList.css';  // Create this new file

const UserList = ({ users }) => {
  return (
    <div className="user-list-container">
      <div className="user-list-grid">
        {users.map(user => (
          <UserCard 
            key={user.id}
            name={user.name}
            email={user.email}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;