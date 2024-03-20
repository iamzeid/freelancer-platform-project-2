import React, { useEffect, useState } from "react";
import axios from "axios";

function UserDash() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving user data:", error);
      });
  }, []);

  const deleteUser = async (userId) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this user?"
      );
      if (!confirmDelete) return;

      await axios.delete(`http://localhost:8800/api/users/${userId}`, {
        withCredentials: true,
      });
      
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <h2 className="animate__animated animate__fadeIn">
        Total Users: {users.length}
      </h2>
      <table className="table" style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}>User Name</th>
            <th style={{ border: "1px solid black" }}>Created At</th>
            <th style={{ border: "1px solid black" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td style={{ border: "1px solid black" }}>
                {user.username || null}
              </td>
              <td style={{ border: "1px solid black" }}>{user.createdAt}</td>
              <td style={{ border: "1px solid black" }}>
                <button onClick={() => deleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserDash;
