import React from 'react';
import Product from './Product'

const Home = (props) => {
  return (
    <div>
      {props.products?.map((ele, i) => (
        <Product key={i} product={ele} filterData = {ele.categories[0]} />
      ))}
    </div>
  );
};

export default Home;
