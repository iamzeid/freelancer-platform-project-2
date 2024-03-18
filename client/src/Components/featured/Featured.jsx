import React, { useState } from "react";
import "./Featured.css";

function Featured() {
  const [input, setInput] = useState("");

  return (
    <>
      <section className="home text-start">
        <div className=" container">
          <div className="row ">
            <div className="col-md-6 home-content">
              <div className=" ">
                <h1>
                  Find the perfect <span>freelance</span> services for your
                  business
                </h1>
                <p className="w-75">
                  Work with talented people at the most affordable price to get
                  the most out of your time and cost
                </p>
                <div className="search ">
                  <div className="searchInput">
                    <img src="./img/search.png" alt="" />
                    <input
                      type="text"
                      placeholder='Try "building mobil app"'
                      onChange={(e) => setInput(e.target.value)}
                    />
                  </div>
                  {/* onClick={handleSubmit} */}
                  <button>Search</button>
                </div>
                {/* <div className="popular  mt-3">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div> */}
              </div>
            </div>

            <div className="col-md-6 col-sm-11 p-3 container">
              <div
                id="carouselExampleInterval "
                className="carousel slide  "
                data-bs-ride="carousel"
              >
                <div className="carousel-inner fade-scale">
                  <div className="carousel-item " data-bs-interval="2000">
                    <img
                      src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/slider72.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div
                    className="carousel-item active fade-scale"
                    data-bs-interval="2000"
                  >
                    <img
                      src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/09/slider71.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item fade-scale">
                    <img
                      src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/slider73.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Featured;
