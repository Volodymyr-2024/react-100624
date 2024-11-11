import { useState, useEffect } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

export default function UserList() {
  const [users, setUsers] = useState([]);

  function fetchUsers() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users from backend</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
