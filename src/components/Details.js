import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            title,
            img,
            price,
            inCart,
            star,
            company,
            info,
          } = value.detailInstruments;

          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-brand my-5">
                  <h1 style={{color:'#f3f3f3'}}>{title}</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <img src={img} className="img-fluid" alt="Instrument" />
                </div>

                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <h4 className=" text-light">
                    <span className="text-detail "> Product : </span>
                    {title}
                  </h4>

                  <h4 className=" text-capitalize mt-2 mb-2 text-light">
                    <span className="text-detail"> Company : </span>
                    {company}
                  </h4>
                  <h4 className=" text-light">
                    <span className="text-detail "> Price : </span>
                    ₹{price}{" "}
                    <span className="ml-3 star ">
                      {" "}
                      <i class="far fa-star"></i>
                      {star}
                    </span>
                  </h4>
                  <h5 className="text-capitalize mt-2 mb-2 text-light">
                    About:
                  </h5>
                  <p className="text-light lead">{info}</p>

                  <div>
                    <Link to="/">
                      <button className="detail-button">Back to Rhythm</button>
                    </Link>

                    <Link to="/details">
                      <button
                        className="detail-button"
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {" "}
                        {inCart ? "Add to Cart" : "Add to Cart"}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
