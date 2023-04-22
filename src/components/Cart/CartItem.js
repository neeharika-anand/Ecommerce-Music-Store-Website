import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-1 text-center text-light">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "4rem", height: "4rem" }}
          className="img-fluid"
          alt="Product in Cart"
        />
      </div>

      <div className="col-10 mx-auto col-lg-2 text-light">
        <span className="d-lg-none">Product :</span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2 text-light">
        <span className="d-lg-none " style={{color:'#f3f3f3'}}>Price :</span>
        ₹{price}
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 text-light">
        <div className="d-flex justify-content-center text-light">
          <div>
            <span className="btn btn-light btn-cart mx-1" onClick={() => decrement(id)}>
              &minus;
            </span>

            <span className="btn btn-light btn-cart mx-1">{count}</span>

            <span className="btn btn-light btn-cart mx-1" onClick={() => increment(id)}>
              &#43;
            </span>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2 text-light">
        <div className="cart-icon">
          <i class="fas fa-trash-alt" backgroundColour='#cd873c' onClick={() => removeItem(id)}></i>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2 text-light">
        <strong> ₹{total}</strong>
      </div>
    </div>
  );
}
