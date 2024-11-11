import React, { useState, useCallback, useMemo } from "react";

const UserCard = React.memo(({ user, onFavorite }) => {
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
});

UserCard.displayName = "UserCard";

const UserList = React.memo(({ users, onFavorite }) => {
  console.log("Rendering <UserList />");
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onFavorite={onFavorite} />
      ))}
    </div>
  );
});

UserList.displayName = "UserList";

const DashboardOptimized = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", isFavorite: false },
    { id: 2, name: "Bob", isFavorite: false },
    { id: 3, name: "Charlie", isFavorite: false },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFavoriteToggle = useCallback((id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, isFavorite: !user.isFavorite } : user
      )
    );
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  console.log("Rendering <DashboardOptimized />");

  return (
    <div>
      <h2>User Dashboard (memoized)</h2>
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

export default DashboardOptimized;
