import React, { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const OrderButton = ({ gigId }) => {
  const initiateOrder = async () => {
    try {
      const response = await fetch(`http://localhost:8800/api/gigs/single/${gigId}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch gig details. Status: ${response.status}`);
      }
  
      const gigData = await response.json();
  
      const orderDetails = {
        gigId: gigData._id,
        title: gigData.title,
        price: gigData.price,
        sellerId: gigData.userId,
        buyerId:JSON.parse(localStorage.getItem("currentuser")).user,
        // payment_intent: "pi_1",
      };
  console.log(orderDetails);
      const paymentResponse = await fetch('http://localhost:8800/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });
  
      if (!paymentResponse.ok) {
        throw new Error(`Failed to initiate payment. Status: ${paymentResponse.status}`);
      }
  
      const paymentData = await paymentResponse.json();
  
      if (paymentData.approval_url) {
        window.location.href = paymentData.approval_url;
      } else {
        console.error('Error: Approval URL is missing in response data');
      }
    } catch (error) {
      console.error('Error initiating order:', error.message);
    }
  };
  
  return (
    <button className="btn btn-success w-100" onClick={initiateOrder}>
      Pay Now
    </button>
  );
};


export default function ViewGig() {
  const [gig, setGig] = useState({});
  const [reviews, setReviews] = useState([]);
  const [desc, setDesc] = useState("");
  const [star, setStar] = useState(5);
  const params = useParams();
  const gigId = params.id; // Extract gigId from params

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
        gigId: gigId, // Use gigId here
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
    fetch(`http://localhost:8800/api/gigs/single/${gigId}`)
      .then((response) => response.json())
      .then((data) => {
        setGig(data);
      });
  
    // Fetch gig reviews
    fetch(`http://localhost:8800/api/reviews/${gigId}`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  
    // Submit review
  }, [gigId]);

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
                  <OrderButton gigId={gigId} /> {/* Pass gigId as a prop */}
                  <button className="btn btn-danger w-100 mt-2">
                    <Icon.HeartFill /> Add to Favorites
                  </button>
                </div>

                {/* Rest of the component */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

