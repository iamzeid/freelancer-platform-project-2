import React from "react";

import "./Home.css";
import Featured from "../../Components/featured/Featured";
import TrustedBy from "../../Components/trustedBy/TrustedBy";

import Footter from "../../Components/footer/Footter.jsx";
import Navbar from "../../Components/navbar/Navbar.jsx";

import { freelancers } from "../../data.js";

import Freelancer from "../../Components/Freelancer";

import {
  PersonFill,
  PersonWorkspace,
  PersonLinesFill,
  QuestionSquare,
  Heart,
  StarFill,
  ArrowUpRight,
  CheckCircle,
} from "react-bootstrap-icons";

export default function Home() {
  return (
    <>
      <div className="homee">
        <Navbar />
        <Featured></Featured>
      </div>

      {/* section icons */}

      <section className="service text-start bg-white need  py-5">
        <div className="container  py-5">
          <div className="row">
            <h2>Need something done?</h2>
            <p>Most viewed and all-time top-selling services</p>
            <div className="col-lg-3 col-md-6 col-6 mt-5 ">
              <PersonFill className="fs-2" />
              <h6 className="mt-3">Post a job</h6>
              <p>
                It’s free and easy to post a job. Simply fill in a title,
                description.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 col-6 mt-5">
              <PersonWorkspace className="fs-2" />
              <h6 className="mt-3">Choose freelancers</h6>
              <p>
                It’s free and easy to post a job. Simply fill in a title,
                description.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 col-6 mt-5">
              <PersonLinesFill className="fs-2" />
              <h6 className="mt-3">Pay safely</h6>
              <p>
                It’s free and easy to post a job. Simply fill in a title,
                description.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mt-5">
              <QuestionSquare className="fs-2" />
              <h6 className="mt-3">We’re here to help</h6>
              <p>
                It’s free and easy to post a job. Simply fill in a title,
                description.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section Popular Services */}

      <section className="Portfolio bg-white py-5" id="por">
        <div className="container">
          <h2 className="mb-3 text-start">Popular Services</h2>
          <div className="row ">
            <div className="col-md-5  text-start">
              <p className="text-muted">
                Most viewed and all-time top-selling services
              </p>
            </div>
            <div className="col-md-7">
              <ul
                className="nav nav-pills d-flex  justify-content-center mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active rounded-5 bg-white text-success bor shadow me-2 mb-2"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-all"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    <span className="position-relative">Desgin & Creative</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link rounded-5 text-black button-hover shadow me-2 mb-2"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-brand"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Deployment & It
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link  rounded-5 text-black button-hover shadow me-2 mb-2"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-design"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Digital Marketing
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link rounded-5 text-black button-hover shadow me-2 mb-2"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-graphic"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Writing & Translation
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-all"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabindex="0"
              >
                <div className="row py-3">
                  <div className="col-lg-3 col-md-6 col-12 mb-3 ">
                    <div className=" protfolio-item card  ">
                      <img
                        src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service11-600x450.jpg"
                        className="w-100"
                      />
                      <div className="ico  d-flex justify-content-center align-items-center">
                        {" "}
                        <Heart />
                      </div>
                      <div className="p-2 text-start">
                        <h6 className="text-muted">
                          <a href="/gig">Design & Creative</a>
                        </h6>
                        <p className="text-muted">
                          Developers drop the framework folder into a new parent
                        </p>
                        <StarFill className="star " />
                        <span className="ms-2">4.5</span>
                        <span className="text-muted review ms-2 ">
                          (2 Review)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12  mb-3">
                    <div className=" protfolio-item card">
                      <img
                        src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service8-600x450.jpg"
                        className="w-100"
                      />

                      <div className="ico  d-flex justify-content-center align-items-center">
                        {" "}
                        <Heart className="  " />
                      </div>
                      <div className="p-2 text-start">
                        <h6 className="text-muted">Design & Creative</h6>
                        <p className="text-muted">
                          Developers drop the framework folder into a new parent
                        </p>
                        <StarFill className="star " />
                        <span className="ms-2">4.5</span>
                        <span className="text-muted review ms-2 ">
                          (2 Review)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12 mb-3 ">
                    <div className=" protfolio-item card ">
                      <img
                        src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service14-600x450.jpg"
                        className="w-100"
                      />
                      <div className="ico  d-flex justify-content-center align-items-center">
                        {" "}
                        <Heart />
                      </div>
                      <div className="p-2 text-start">
                        <h6 className="text-muted">Design & Creative</h6>
                        <p className="text-muted">
                          Developers drop the framework folder into a new parent
                        </p>
                        <StarFill className="star " />
                        <span className="ms-2">4.5</span>
                        <span className="text-muted review ms-2 ">
                          (2 Review)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12  mb-3">
                    <div className=" protfolio-item card">
                      <img
                        src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service2-600x450.jpg"
                        className="w-100"
                      />
                      <div className="ico  d-flex justify-content-center align-items-center">
                        {" "}
                        <Heart />
                      </div>
                      <div className="p-2 text-start">
                        <h6 className="text-muted">Design & Creative</h6>

                        <p className="text-muted">
                          Developers drop the framework folder into a new parent
                        </p>

                        <StarFill className="star " />
                        <span className="ms-2">4.5</span>
                        <span className="text-muted review ms-2 ">
                          (2 Review)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12 mb-3 ">
                    <div className=" protfolio-item card">
                      <img
                        src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service9-600x450.jpg"
                        className="w-100"
                      />
                      <div className="ico  d-flex justify-content-center align-items-center">
                        {" "}
                        <Heart />
                      </div>
                      <div className="p-2 text-start">
                        <h6 className="text-muted">Design & Creative</h6>
                        <p className="text-muted">
                          Developers drop the framework folder into a new parent
                        </p>
                        <StarFill className="star " />
                        <span className="ms-2">4.5</span>
                        <span className="text-muted review ms-2 ">
                          (2 Review)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12 mb-3 ">
                    <div className=" protfolio-item card">
                      <img
                        src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service16-600x450.jpg"
                        className="w-100"
                      />
                      <div className="ico  d-flex justify-content-center align-items-center">
                        {" "}
                        <Heart />
                      </div>
                      <div className="p-2 text-start">
                        <h6 className="text-muted">Design & Creative</h6>
                        <p className="text-muted">
                          Developers drop the framework folder into a new parent
                        </p>
                        <StarFill className="star " />
                        <span className="ms-2">4.5</span>
                        <span className="text-muted review ms-2 ">
                          (2 Review)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12  mb-3">
                    <div className=" protfolio-item card ">
                      <img
                        src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service5-600x450.jpg"
                        className="w-100"
                      />
                      <div className="ico  d-flex justify-content-center align-items-center">
                        {" "}
                        <Heart />
                      </div>
                      <div className="p-2 text-start">
                        <h6 className="text-muted">Design & Creative</h6>
                        <p className="text-muted">
                          Developers drop the framework folder into a new parent
                        </p>
                        <StarFill className="star " />
                        <span className="ms-2">4.5</span>
                        <span className="text-muted review ms-2 ">
                          (2 Review)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12 mb-3 ">
                    <div className=" protfolio-item card ">
                      <img
                        src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service15-600x450.jpg"
                        className="w-100"
                      />
                      <div className="ico  d-flex justify-content-center align-items-center">
                        {" "}
                        <Heart />
                      </div>
                      <div className="p-2 text-start">
                        <h6 className="text-muted">Design & Creative</h6>
                        <p className="text-muted">
                          Developers drop the framework folder into a new parent
                        </p>

                        <StarFill className="star " />
                        <span className="ms-2">4.5</span>
                        <span className="text-muted review ms-2 ">
                          (2 Review)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-brand"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              >
                <div className="row py-3">
                  <div className="col-lg-3 col-md-6 col-12  mb-3">
                    <div className=" protfolio-item card ">
                      <img
                        src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service12-600x450.jpg"
                        className="w-100"
                      />
                      <div className="ico  d-flex justify-content-center align-items-center">
                        {" "}
                        <Heart />
                      </div>
                      <div className="p-2 text-start">
                        <h6 className="text-muted">Design & Creative</h6>
                        <p className="text-muted">
                          Developers drop the framework folder into a new parent
                        </p>

                        <StarFill className="star " />
                        <span className="ms-2">4.5</span>
                        <span className="text-muted review ms-2 ">
                          (2 Review)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12  mb-3">
                    <div className=" protfolio-item card">
                      <img
                        src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service10-600x450.jpg"
                        className="w-100"
                      />
                      <div className="ico  d-flex justify-content-center align-items-center">
                        {" "}
                        <Heart />
                      </div>
                      <div className="p-2 text-start">
                        <h6 className="text-muted">Design & Creative</h6>
                        <p className="text-muted">
                          Developers drop the framework folder into a new parent
                        </p>

                        <StarFill className="star " />
                        <span className="ms-2">4.5</span>
                        <span className="text-muted review ms-2 ">
                          (2 Review)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12  mb-3">
                    <div className=" protfolio-item card">
                      <img
                        src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service13-600x450.jpg"
                        className="w-100"
                      />
                      <div className="ico  d-flex justify-content-center align-items-center">
                        {" "}
                        <Heart />
                      </div>
                      <div className="p-2 text-start">
                        <h6 className="text-muted">Design & Creative</h6>
                        <p className="text-muted">
                          Developers drop the framework folder into a new parent
                        </p>
                        <StarFill className="star " />
                        <span className="ms-2">4.5</span>
                        <span className="text-muted review ms-2 ">
                          (2 Review)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12  mb-3">
                    <div className=" protfolio-item card ">
                      <img
                        src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service2-600x450.jpg"
                        className="w-100"
                      />
                      <div className="ico  d-flex justify-content-center align-items-center">
                        {" "}
                        <Heart />
                      </div>
                      <div className="p-2 text-start">
                        <h6 className="text-muted">Design & Creative</h6>
                        <p className="text-muted">
                          Developers drop the framework folder into a new parent
                        </p>
                        <StarFill className="star " />
                        <span className="ms-2">4.5</span>
                        <span className="text-muted review ms-2 ">
                          (2 Review)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12 mb-3">
                    <div className=" protfolio-item card">
                      <img
                        src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service9-600x450.jpg"
                        className="w-100"
                      />
                      <div className="ico  d-flex justify-content-center align-items-center">
                        {" "}
                        <Heart />
                      </div>
                      <div className="p-2 text-start">
                        <h6 className="text-muted">Design & Creative</h6>
                        <p className="text-muted">
                          Developers drop the framework folder into a new parent
                        </p>
                        <StarFill className="star " />
                        <span className="ms-2">4.5</span>
                        <span className="text-muted review ms-2 ">
                          (2 Review)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12 mb-3 ">
                    <div className=" protfolio-item card">
                      <img
                        src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service16-600x450.jpg"
                        className="w-100"
                      />
                      <div className="ico  d-flex justify-content-center align-items-center">
                        {" "}
                        <Heart />
                      </div>
                      <div className="p-2 text-start">
                        <h6 className="text-muted">Design & Creative</h6>
                        <p className="text-muted">
                          Developers drop the framework folder into a new parent
                        </p>
                        <StarFill className="star " />
                        <span className="ms-2">4.5</span>
                        <span className="text-muted review ms-2 ">
                          (2 Review)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12  mb-3">
                    <div className=" protfolio-item card">
                      <img
                        src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service5-600x450.jpg"
                        className="w-100"
                      />
                      <div className="ico  d-flex justify-content-center align-items-center">
                        {" "}
                        <Heart />
                      </div>
                      <div className="p-2 text-start">
                        <h6 className="text-muted">Design & Creative</h6>
                        <p className="text-muted">
                          Developers drop the framework folder into a new parent
                        </p>
                        <StarFill className="star " />
                        <span className="ms-2">4.5</span>
                        <span className="text-muted review ms-2 ">
                          (2 Review)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12  mb-3">
                    <div className=" protfolio-item card">
                      <img
                        src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service15-600x450.jpg"
                        className="w-100"
                      />
                      <div className="ico  d-flex justify-content-center align-items-center">
                        {" "}
                        <Heart />
                      </div>
                      <div className="p-2 text-start">
                        <h6 className="text-muted">Design & Creative</h6>
                        <p className="text-muted">
                          Developers drop the framework folder into a new parent
                        </p>
                        <StarFill className="star " />
                        <span className="ms-2">4.5</span>
                        <span className="text-muted review ms-2 ">
                          (2 Review)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-design"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabindex="0"
              >
                <div className="row py-3">
                  <div className="col-lg-3 col-md-6 col-12 mb-3 ">
                    <div className=" protfolio-item card">
                      <img
                        src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service11-600x450.jpg"
                        className="w-100"
                      />
                      <div className="ico  d-flex justify-content-center align-items-center">
                        {" "}
                        <Heart />
                      </div>
                      <div className="p-2 text-start">
                        <h6 className="text-muted">Design & Creative</h6>
                        <p className="text-muted">
                          Developers drop the framework folder into a new parent
                        </p>
                        <StarFill className="star " />
                        <span className="ms-2">4.5</span>
                        <span className="text-muted review ms-2 ">
                          (2 Review)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-graphic"
                role="tabpanel"
                aria-labelledby="pills-disabled-tab"
                tabindex="0"
              >
                <div className="row py-3">
                  <div className="col-lg-3 col-md-6 col-12 mb-3 ">
                    <div className=" protfolio-item card ">
                      <img
                        src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/11/service8-600x450.jpg"
                        className="w-100"
                      />
                      <div className="ico  d-flex justify-content-center align-items-center">
                        {" "}
                        <Heart />
                      </div>
                      <div className="p-2 text-start">
                        <h6 className="text-muted">Design & Creative</h6>
                        <p className="text-muted">
                          Developers drop the framework folder into a new parent
                        </p>
                        <StarFill className="star " />
                        <span className="ms-2">4.5</span>
                        <span className="text-muted review ms-2 ">
                          (2 Review)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center btn-all mt-4">
          <button className="p-3 rounded-5">
            All Services
            <ArrowUpRight className="ms-2 fs-5" />
          </button>
        </div>
      </section>

      {/* section Find talent your way */}

      <div className="bg-white">
        <div className="container py-4 ">
          <div className="row">
            <div className="col-md-6 text-start client-content">
              <div className="">
                <p className="text-success">For clients</p>
                <h3>Find talent your way</h3>
                <p>
                  Work with the largest network of independent professionals and
                  <br></br> get things done—from quick turnarounds to big
                  transformations.
                </p>
                <p>
                  Work with the largest network of independent professionals and
                  <br></br> get things done—from quick turnarounds to big
                  transformations.
                </p>

                <button className="btn btn-success text-white bttn p-3 rounded-5">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="col-md-6 ul">
              <img
                src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/09/h2.png"
                className="w-100"
                alt="..."
              />
              <div className="elementor-widget-container p-5">
                <ul className="tick-2 ">
                  <li className="p-1">
                    <CheckCircle className="bg-white rounded-5 text-success me-3" />
                    The best for every budget
                  </li>
                  <li className="p-1">
                    <CheckCircle className="bg-white rounded-5 text-success me-3" />
                    work done quickly
                  </li>
                  <li className="p-1">
                    <CheckCircle className="bg-white rounded-5 text-success me-3" />
                    Protected payments, every time{" "}
                  </li>
                  <li className="p-1">
                    <CheckCircle className="bg-white rounded-5 text-success me-3" />
                    24/7 support
                  </li>
                </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <TrustedBy></TrustedBy>

      {/* section Browse talent by category  */}

      <div className="bg-white">
        <div className="container  text-start pt-4">
          <h2 className="text-bold">Browse talent by category</h2>
          <div className="row">
            <p className="text-muted">
              Get some Inspirations from 1800+ skills
            </p>{" "}
          </div>

          <div className="d-flex flex-wrap py-4">
            <div className="image-container col-lg-2 col-md-3 col-sm-4 col-6 p-2">
              <img
                src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/c1.jpg"
                alt="Image 1"
                className="w-100 gallery-image rounded-3"
              />
            </div>
            <div className="image-container col-lg-2 col-md-3 col-sm-4 col-6 p-2">
              <img
                src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/c3.jpg"
                alt="Image 1"
                className="w-100 gallery-image rounded-3"
              />
            </div>
            <div className="image-container col-lg-2 col-md-3 col-sm-4 col-6 p-2">
              <img
                src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/c4.jpg"
                alt="Image 1"
                className="w-100 gallery-image rounded-3"
              />
            </div>
            <div className="image-container col-lg-2 col-md-3 col-sm-4 col-6 p-2">
              <img
                src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/c5.jpg"
                alt="Image 1"
                className="w-100 gallery-image rounded-3"
              />
            </div>
            <div className="image-container col-lg-2 col-md-3 col-sm-4 col-6 p-2">
              <img
                src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/c2.jpg"
                alt="Image 1"
                className="w-100 gallery-image rounded-3"
              />
            </div>

            <div className="col-md-2 mb-2 d-flex justify-content-center align-items-center">
              {" "}
              <div className="text-center btn-all  w-100">
                <button className="p-3 rounded-5">
                  All Gategory
                  <ArrowUpRight className="ms-2 fs-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section Highest Rated Freelancers  */}

      <Freelancer freelancers={freelancers} />

      {/* section People Love To Learn With Freeio */}
      <section>
        <div className="bg-gray  text-start">
          <div className="container ">
            <div className="row py-5">
              <h2>People Love To Learn With Freeio</h2>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>

              <div className="col-lg-2 col-md-4 col-12">
                <div className="p-3">
                  <h2>4.9/5</h2>
                  <p>Clients rate professionals on Freeio</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12">
                <div className="p-3">
                  {" "}
                  <h2>90%</h2>
                  <p>
                    90% of customers are satisfied through to see their
                    freelancers
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12">
                <div className="p-3">
                  <h2>Award winner</h2>
                  <p>G2’s 2022 Best Software Awards</p>
                </div>
              </div>

              <div className="col-lg-4 col-12 ">
                <div className=" ">
                  <div className="card px-3 py-4">
                    <h6>Great Work</h6>
                    <p>
                      "I found the course material to be highly engaging and the
                      instructors to be helpful and communicative"
                    </p>
                    <div className="card-footer row">
                      <div className="col-md-8  ">
                        <div className="row">
                          <div className="col-md-4">
                            {" "}
                            <img
                              src="https://demoapus1.com/freeio-new/wp-content/uploads/2022/10/9-150x150.jpg"
                              className=" width-image rounded-circle img-thumbnail"
                            />
                          </div>
                          <div className="col-md-8">
                            <span className="fw-bold">Ali Tufan</span>
                            <br />
                            <span>Web Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section Membership Plans */}

      <section className="">
        <div className="bg-white  plan p-5">
          <h1>Membership Plans</h1>
          <p className="text-muted fs-6">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6  py-4  hov col-12">
                <div className="p-4 shadow rounded-3">
                  {" "}
                  <h2>$29</h2>
                  <h4>Basic Plan</h4>
                  <p className="mb-3 fs-6 text-muted">
                    One time fee for one listing or task<br></br> highlighted in
                    search results
                  </p>
                  <p>30 listing</p>
                  <p>50 Day Visibility</p>
                  <p>highlighted in search results</p>
                  <p>10 Revision</p>
                  <p>9 days Delivary Time</p>
                  <p>Support 24/7</p>
                  <button className="w-100 m-auto  view rounded-5 p-2 ">
                    Add to Chart <ArrowUpRight className="ms-2 fs-5" />
                  </button>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  py-4  hov col-12">
                <div className="p-4 shadow rounded-3">
                  {" "}
                  <h2>$59</h2>
                  <h4>Basic Plan</h4>
                  <p className="mb-3 fs-6 text-muted">
                    One time fee for one listing or task<br></br> highlighted in
                    search results
                  </p>
                  <p>30 listing</p>
                  <p>50 Day Visibility</p>
                  <p>highlighted in search results</p>
                  <p>10 Revision</p>
                  <p>9 days Delivary Time</p>
                  <p>Support 24/7</p>
                  <button className="w-100 m-auto  view rounded-5 p-2 ">
                    Add to Chart <ArrowUpRight className="ms-2 fs-5" />
                  </button>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  py-4  hov col-12">
                <div className="p-4 shadow rounded-3">
                  {" "}
                  <h2>$89</h2>
                  <h4>Basic Plan</h4>
                  <p className="mb-3 fs-6 text-muted">
                    One time fee for one listing or task<br></br> highlighted in
                    search results
                  </p>
                  <p>30 listing</p>
                  <p>50 Day Visibility</p>
                  <p>highlighted in search results</p>
                  <p>10 Revision</p>
                  <p>9 days Delivary Time</p>
                  <p>Support 24/7</p>
                  <button className="w-100 m-auto  view rounded-5 p-2 ">
                    Add to Chart <ArrowUpRight className="ms-2 fs-5" />
                  </button>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  py-4  hov col-12">
                <div className="p-4 shadow rounded-3">
                  {" "}
                  <h2>$129</h2>
                  <h4>Basic Plan</h4>
                  <p className="mb-3 fs-6 text-muted">
                    One time fee for one listing or task<br></br> highlighted in
                    search results
                  </p>
                  <p>30 listing</p>
                  <p>50 Day Visibility</p>
                  <p>highlighted in search results</p>
                  <p>10 Revision</p>
                  <p>9 days Delivary Time</p>
                  <p>Support 24/7</p>
                  <button className="w-100 m-auto  view rounded-5 p-2 ">
                    Add to Chart <ArrowUpRight className="ms-2 fs-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footter></Footter>
    </>
  );
}
