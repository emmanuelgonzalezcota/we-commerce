import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
      <div className="card mx-2 my-2">
        <img
          src="https://micoedward.com/wp-content/uploads/2018/04/Love-your-product-2.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">product_name</h5>
          <p className="card-text">
            description
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">price</li>
          <li className="list-group-item">brand</li>
          <li className="list-group-item">category</li>
        </ul>
        <div className="card-body">
          <Link to="#" className="card-link">
            Login to shop
          </Link>
        </div>
      </div>
  );
}

export default Card;
