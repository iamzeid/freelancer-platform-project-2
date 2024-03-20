import React, { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import axios from "axios";
import Cookies from "universal-cookie";

export default function ViewGig() {
  const [gig, setGig] = useState({});
  const [reviews, setReviews] = useState([]);
  const [desc, setDesc] = useState("");
  const [star, setStar] = useState(5);
  const params = useParams();
  const cookies = new Cookies();
  const user_details =cookies.get('userDetails')
  const [favorites, setFavorites] = useState([]);

  const [review, setReview] = useState({
    desc: "",
    star: 5,
  });

  const submitReview = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8800/api/reviews/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: JSON.parse(localStorage.getItem("currentuser")).user,
        desc: desc,
        star: star,
        gigId: params.id,
      }),
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          alert(data.error);
        } else {
          alert("Review submitted successfully.");
          setDesc("");
          setStar(5);
          window.location.reload();
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:8800/api/gigs/single/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setGig(data);
      });

    // Fetch gig reviews
    fetch(`http://localhost:8800/api/reviews/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });

    // Submit review

  }, []);
  const addToFavorites = async (servise_Id) => {
        
    try {
        const response = await axios.post(`http://localhost:8800/api/gigs/addToFavorites`, {
          userId:user_details.user,
          servise_Id:servise_Id
        });
        cookies.set("favorites",favorites);
        console.log(user_details.user)
        setFavorites(response.data.favorites);
        console.log("ADDED Successssssssssffuly");

      } catch (error) {
        console.error('Error toggling favorite:', error);
      }
    };
  return (
    <>
      <div className="homee">
        <Navbar />
      </div>
      <div className="browse">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 mt-2">
              <h1 className="fs-4">{gig.title}</h1>

              <div className="mt-2 mb-2 bg-white p-3 rounded-3">
                <div className="d-flex align-items-center">
                  <img
                    src="/img/anon.png"
                    width={50}
                    height={50}
                    alt="Seller"
                    className="img-fluid rounded-circle"
                  />
                  <div className="ms-2">
                    <p className="text-muted">
                      <strong>John Doe</strong>
                      <br />
                      <Icon.StarFill /> <Icon.StarFill /> <Icon.StarFill />{" "}
                      <Icon.StarFill /> <Icon.StarHalf /> 4.5 (200) <br />
                    </p>
                  </div>
                </div>
              </div>

              <img
                src="/img/gig.jpg"
                alt={gig.title}
                className="img-fluid rounded-3"
              />

              <p className="mt-2 text-muted mt-2 bg-white p-3 rounded-3">
                {gig.desc}
              </p>

              <div>
                <div>
                  <h2 className="fs-5 mt-2 mb-2">
                    <Icon.InfoCircleFill /> About This Gig:
                  </h2>
                  <p className="text-muted mt-2 bg-white p-3 rounded-3">
                    <strong>Features:</strong>
                    <ul>
                      {gig.features &&
                        gig.features?.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <strong>Category:</strong> {gig.cat}
                    <br />
                    <strong>Delivery Time:</strong> {gig.deliveryTime} day(s)
                    <br />
                    <strong>Rating:</strong> <Icon.StarFill /> <Icon.StarFill />{" "}
                    <Icon.StarFill /> <Icon.StarFill /> <Icon.Star />{" "}
                    {gig.totalStars} ({gig.starNumber})
                    <br />
                    <strong>Revisions:</strong> {gig.revisionNumber} revision(s)
                    <br />
                    <h2 className="text-center mt-4">
                      <strong>Price:</strong> ${gig.price}
                    </h2>
                  </p>
                </div>

                <div>
                  <button className="btn btn-success w-100">
                    {" "}
                    <Icon.BagFill /> Order Now{" "}
                  </button>
                  <button className="btn btn-danger w-100 mt-2" onClick={() => addToFavorites(gig._id)}>
                    <Icon.HeartFill /> Add to Favorites
                  </button>
                </div>

                <div>
                  <h2 className="fs-5 mt-4 mb-2">
                    <Icon.ChatLeftTextFill /> Reviews
                  </h2>
                  {/* <div className="mt-2 bg-white p-3 rounded-3">
                <div className="d-flex align-items-center">
                  <img
                    src="https://placehold.co/50?text=J"
                    alt="Seller"
                    className="img-fluid rounded-circle"
                  />
                  <div className="ms-2">
                    <p className="text-muted">
                      <strong>John Smith</strong>
                      <br />
                      <Icon.StarFill /> <Icon.StarFill /> <Icon.StarFill />{" "}
                      <Icon.StarFill /> <Icon.StarFill /> 5.0
                      <br />I am very happy with the website that John created
                      for me.
                    </p>
                  </div>
                </div>
              </div> */}

                  {reviews.length === 0 && (
                    <div className="alert alert-success mt-2">
                      No reviews available for this gig.
                    </div>
                  )}

                  {reviews.map((review, index) => (
                    <div key={index} className="mt-2 bg-white p-3 rounded-3">
                      <div className="d-flex align-items-center">
                        <img
                          src={review.userId?.img || "/img/anon.png"}
                          alt="Seller"
                          className="img-fluid rounded-circle"
                          width={50}
                          height={50}
                        />
                        <div className="ms-2">
                          <p className="text-muted">
                            <strong>
                              {review.userId?.username || "Anonymous User"}
                            </strong>
                            <br />
                            {/* Loop as star count */}
                            {[...Array(review.star)].map((e, i) => (
                              <Icon.StarFill key={i} />
                            ))}
                            {[...Array(5 - review.star)].map((e, i) => (
                              <Icon.Star key={i} />
                            ))}{" "}
                            {review.star}
                            <br />
                            {review.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <br />
                  <br />

                  <h2 className="fs-5 mt-4 mb-2">
                    <Icon.PlusCircleFill /> Submit a Review
                  </h2>

                  <div className="mt-2 bg-white p-3 rounded-3">
                    {/* Submit Review */}
                    <form action="/gig/review" method="POST">
                      <div className="form-group">
                        <label htmlFor="review">Review</label>
                        <textarea
                          onChange={(e) => { setDesc(e.target.value) }}
                          className="form-control"
                          id="review"
                          name="review"
                          required
                        />

                        <label htmlFor="rating">Rating</label>
                        <select
                          onChange={(e) => { setStar(e.target.value) }}
                          className="form-select"
                          id="rating"
                          name="rating"
                          required
                        >
                          <option value="5">5 - Excellent</option>
                          <option value="4">4 - Good</option>
                          <option value="3">3 - Average</option>
                          <option value="2">2 - Poor</option>
                          <option value="1">1 - Bad</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-success w-100 mt-4"
                        onClick={submitReview}
                      >
                        <Icon.PlusCircleFill /> Submit Review
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
