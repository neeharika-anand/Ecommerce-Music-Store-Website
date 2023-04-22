import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container mt-0">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8  text-right">
            <Link to="/cart">
              <button
                className="btn detail-button text-light  mb-3"
                type="button"
                backgroundColour='#cd873c'
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </Link>
            <h5 className="text-light">
              <span className="text-title ">Total:</span>
              ₹{cartSubTotal}
            </h5>

            <h5 className="text-light">
              <span className="text-title">Added Charges:</span>
              ₹{cartTax}
            </h5>

            <h5 className="text-light">
              <span className="text-title">Final Total:</span>
              ₹{cartTotal}
            </h5>
            <button
                className="btn detail-button text-light mb-3"
                type="button"
                style={{color:'#cd873c'}}
                onClick={() => console.log('successfully purchased')}
              >
                Purchase
              </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
