// function App() {



//   return <div>{/* Complete the exercise here. */}</div>;
// }

// // export default App;

// import React, { Component } from 'react';
// import Product from './Product';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: [],
//       originalList: [],
//       multiPageProductList: [],
//     };
//   }

//   // getData = () => {
//   //   fetch('/api/posts')
//   //     .then((response) => response.json())
//   //     .then((findresponse) => {
//   //       console.log(findresponse.posts);
//   //       this.setState({
//   //         products: findresponse,
//   //       });
//   //       console.log(this.state.products)
//   //     });
//   // };

//   componentDidMount() {
//     fetch('/api/posts')
//       .then((response) => response.json())
//       .then((findresponse) => {
//         console.log(findresponse.posts);
//         this.setState({
//           products: findresponse.posts,
//         });
//         console.log(this.state.products[0].author.name);
//       });

//     // this.getData();
//   }

//   render() {
//     console.log("hello")
//     return (
//       <div>
//         <Product products={this.state.products[0].author} />
//       </div>
//     );
//   }
// }

// export default App;



import React, { useState, useEffect } from 'react';
import Home from './Home.js';



function App() {
  const [data, setData] = useState([]);
  // const [filterList, setFilterList] = useState([]);
  
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
  };
  useEffect(() => {
    getData();
  }, []);

  // const handleChange = (event) => {
  //   event.preventDefault();
  //   const text = event.target.value.toLowerCase();
  //   console.log(data[0].categories[0].name);
  //    if (text != '') {
  //     const filteredList = data.filter((d) =>
  //       d.categories.name.toLowerCase().includes(text)
  //     );
  //     console.log(filteredList);
  //     setFilterList(filteredList);
  //   } else {
  //     setFilterList(data);
  //   }
  // };
  return (
    
      <div className="searchDiv">
        <label>Search Product</label>
        <input type="text" placeholder="Search"  />
   
    <div>
      <Home products={data} />
    </div>
    </div>
  );
}

export default App;