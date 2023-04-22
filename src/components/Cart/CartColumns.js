import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize text-light">Product</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize text-light">Model</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize text-light">Price</p>
        </div>

        <div className="col-10 mx-auto text-light col-lg-2">
          <p className="text-capitalize">Quantity</p>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize text-light">Remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize text-light">Total Price</p>
        </div>
      </div>
    </div>
  );
}
