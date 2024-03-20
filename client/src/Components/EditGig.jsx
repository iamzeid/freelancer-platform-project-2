import React from "react";
import { PencilFill } from "react-bootstrap-icons";

export default function EditGig() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-2">
          <h1 className="text-center">Edit Gig</h1>
          <form
            action="/gig/create"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="form-group">
              <label htmlFor="title">Gig Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cat">Category</label>
              <input
                type="text"
                className="form-control"
                id="cat"
                name="cat"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="desc">Description</label>
              <textarea
                className="form-control"
                id="desc"
                name="desc"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="photo">Photo</label>
              <input
                type="file"
                className="form-control"
                id="photo"
                name="photo"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="deliveryTime">Delivery Time (in days)</label>
              <input
                type="number"
                className="form-control"
                id="deliveryTime"
                name="deliveryTime"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="instructions">Instructions</label>
              <textarea
                className="form-control"
                id="instructions"
                name="instructions"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="availability">Availability</label>
              <select
                className="form-control"
                id="availability"
                name="availability"
                required
              >
                <option value="true">Available</option>
                <option value="false">Not Available</option>
              </select>
            </div>

            <button type="submit" className="btn btn-dark w-100 mt-2">
              <PencilFill /> Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
