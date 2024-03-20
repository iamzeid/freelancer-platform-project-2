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
    <div className="py-5 mb-3  text-center">
      <h2 className="btn btn-success rounded-5 text-center animate__animated animate__fadeIn">
        Total Users: {users.length}
      </h2>
      <div className="container"> 
      <div className="row">
      {users.map((user) => (
        <div className="col-md-3 ">
          <div className="card bg-white  p-2">
            <p> <span>User_Name:</span><span className="fw-bold"> {user.username || null}</span></p>
            <p> <span>CreatedAt:</span><span className="fw-bold"> {user.createdAt}</span></p>
         
         <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>Delete</button></div>
        
        </div>
         ))}
        </div> </div>
     
    </div>
  );
}

export default UserDash;
