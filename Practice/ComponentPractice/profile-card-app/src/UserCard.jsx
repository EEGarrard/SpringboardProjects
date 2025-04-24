import React from 'react';
import './UserCard.css';

const UserCard = ({ name, email, avatarUrl }) => {
  return (
    <div className="user-card">
      <div className="avatar-container">
        <img src={avatarUrl} alt={name} className="user-avatar" />
      </div>
      <div className="user-info">
        <h2>{name}</h2>
        <p className="user-email">{email}</p>
      </div>
    </div>
  );
};

export default UserCard;