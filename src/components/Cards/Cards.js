import React from 'react';
import { Link } from "react-router-dom";
import './Cards.scss';
//import Card from './Card';
import PropTypes from 'prop-types';

function Cards(props) {

  // console.log(props.items);
  // const item=props.items[0];
  // console.log(item);

  return (

    <div className= "cards-container row row-cols-2 row-cols-xs-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 d-flex justify-content-center">
      {/* <Card /> */}

      { props.items.map((item,index) =>(
        <div className="card mx-2 my-2" key={index}>
          <img
            // https://micoedward.com/wp-content/uploads/2018/04/Love-your-product-2.jpg
            src={item.image?item.image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMpxjRkmpfqtLxSJHWxYoPSMB6KsT-zjuLKw&usqp=CAU"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{item.product_name}</h5>
            <p className="card-text">
              {item.description}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Price: $ {item.price}.00</li>
            <li className="list-group-item">Brand: {item.brand}</li>
            <li className="list-group-item">Category: {item.category}</li>
          </ul>
          <div className="card-body d-flex justify-content-between">
            <Link to="#" className="card-link">
              Detail
            </Link>
            <Link to="/login" className="card-link">
              Login to shop
            </Link>
          </div>
        </div>
      ))}

    </div>
    
  );
  
}

Cards.propTypes = {
  items:PropTypes.array
}

export default Cards;
