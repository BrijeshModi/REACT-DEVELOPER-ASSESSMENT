

import React, { useState, useEffect } from 'react';
import Home from './Home.js';

import Pagination from './Pagination';

function App() {
  const [data, setData] = useState([]);
   const [paginationList, setPaginationList] = useState([]);
  
  const getData = () => {
    fetch('/api/posts', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson.posts);
        setData(myJson.posts);
      });
      // data.forEach((ele, i) => {
      //   ele.rowId = i + 1;
      // });
      const paginationArray = data.reduce((acc, curr, i) => {
        if (!(i % 5)) {
          acc.push(data.slice(i, i + 5));
        }
        return acc;
      }, []);
      setPaginationList(paginationArray)
  };

 const callbackFunction = (childdata) => {
    setData(childdata);
  };
  useEffect(() => {
    getData();
  }, []);

 
  return (
    <div>
      <Home products={data} />
      <Pagination
        products={paginationList}
        parentCallback={callbackFunction}
        allProducts={data}
      />
    </div>
  );
}

export default App;