import React from "react";
import { useState, useEffect } from "react";

function Feed() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/User")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setUsers(response);
      });
  }, []);
  console.log(users);

  return (
    <div>
      {users.map((user) => (
        <li key={user.username}>{user.password}</li>
      ))}
    </div>
  );
}

export default Feed;
