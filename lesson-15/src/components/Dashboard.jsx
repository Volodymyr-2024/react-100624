import React, { useState } from "react";

const UserCard = ({ user, onFavorite }) => {
  console.log(`Rendering <UserCard /> for ${user.name}`);
  return (
    <div>
      <h4>
        {user.name} {user.isFavorite ? "❤️" : null}
      </h4>
      <button onClick={() => onFavorite(user.id)}>
        {user.isFavorite ? "Unfavorite" : "Add to Favorites"}
      </button>
    </div>
  );
};

const UserList = ({ users, onFavorite }) => {
  console.log("Rendering <UserList />");
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onFavorite={onFavorite} />
      ))}
    </div>
  );
};

const Dashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", isFavorite: false },
    { id: 2, name: "Bob", isFavorite: false },
    { id: 3, name: "Charlie", isFavorite: false },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFavoriteToggle = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, isFavorite: !user.isFavorite } : user
      )
    );
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  console.log("Rendering <Dashboard />");

  return (
    <div>
      <h2>User Dashboard</h2>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <UserList users={filteredUsers} onFavorite={handleFavoriteToggle} />
    </div>
  );
};

export default Dashboard;
