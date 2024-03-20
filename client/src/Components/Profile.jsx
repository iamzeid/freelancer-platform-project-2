import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar/Navbar";

export default function Profile() {
  const params = useParams();
  const [user, setUser] = useState({});
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:8800/api/users/${params.id}`
        );
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    const getGigs = async () => {
      try {
        // send cookie to server
        const response = await fetch(
          `http://localhost:8800/api/gigs?userId=${params.id}`,
          {
            credentials: "include",
          }
        );
        const data = await response.json();
        setGigs(data);
      } catch (error) {
        console.error("Error fetching gigs", error);
      }
    };

    getUser();
    getGigs();
  }, [params.id]);

  return (
    <>
      <div className="homee">
        <Navbar />
      </div>

      <div className="container">
        <h1 className="text-center text-success">Profile</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error fetching user</p>}

        <div>
          <img
            src="/img/anon.png"
            alt={user.username}
            width={100}
            height={100}
            className="rounded-circle mx-auto d-block"
          />
          <h2 className="text-center">{user.username}</h2>
          <div>
            <h2>Gigs</h2>


            <div class="card-group">
              {gigs.map((gig) => (
                <div class="card">
                  <img src="/img/gig.jpg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{gig.title}</h5>
                    <p class="card-text">{gig.desc}</p>
                  </div>
                  <div class="card-footer">
                    <a
                      className="btn btn-success w-100"
                      href={"/gig/" + gig._id}
                    >
                      View Gig
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
