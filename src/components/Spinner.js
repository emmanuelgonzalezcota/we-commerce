import React from 'react';
import './Spinner.scss';

function Spinner(){
  return(
    <div className="spinner text-center my-5">
      {/* <div className="spinner__circle spinner-border my-5 mx-5" role="status">
        <span className="sr-only">Loading...</span>
      </div> */}
      <div className="spinner__flash spinner-grow my-5 mx-5" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner__circle spinner-border my-5 mx-5" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner__flash spinner-grow my-5 mx-5" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      {/* <div className="spinner__circle spinner-border my-5 mx-5" role="status">
        <span className="sr-only">Loading...</span>
      </div> */}
    </div>
  )
}

export default Spinner;