import React from 'react';


const Pagination = (props) => {
  return (
    <div>
      {props.products.map((ele, i) => (
        <button id={i} key={i} onClick={() => props.parentCallback(ele)}>
          {i + 1}
        </button>
      ))}
      <button onClick={() => props.parentCallback(props.allProducts)}>
        All
      </button>
    </div>
  );
};

export default Pagination;
