import React, { useEffect, useState } from "react";
import axios from "axios";

function GigDash() {
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/gigs")
      .then((response) => {
        setGigs(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving gigs data:", error);
      });
  }, []);

  const deleteGig = async (gigId) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this gig?"
      );
      if (!confirmDelete) return;

      await axios.delete(`http://localhost:8800/api/gigs/${gigId}`, {
        withCredentials: true,
      });
      setGigs(gigs.filter((gig) => gig._id !== gigId));
    } catch (error) {
      console.error("Error deleting gig:", error);
    }
  };

  return (
    <div>
      <h2 className="animate__animated animate__fadeIn">
        Total Gigs: {gigs.length}
      </h2>
      <table className="table" style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}>Title</th>
            <th style={{ border: "1px solid black" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {gigs.map((gig) => (
            <tr key={gig._id}>
              <td style={{ border: "1px solid black" }}>{gig.title || null}</td>
              <td style={{ border: "1px solid black" }}>
                <button onClick={() => deleteGig(gig._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GigDash;
