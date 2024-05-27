// import { useState } from 'react'
// import Card from './component/Card'

// function App() {
//   const [val,setVal] = useState(false)
//     return (
//       <div className='w-screen h-screen bg-slate-400 '>
//         <h3>{val.toString()}</h3>
//         <button onClick={()=>setVal(!val)} className={`${!val ? "bg-red-500" : "bg-blue-500"}`}>reverse</button>
//       </div>
//     )
//   }

// export default App

// import { useState } from 'react'

// function App() {
//   const [val, setVal] = useState({name:"yash",age:19});
//     return (
//       <div className='w-screen h-screen bg-slate-400 '>
//         <h3>Name:{val.name}</h3>
//         <h3>Age:{val.age}</h3>
//         <button onClick={()=>setVal({...val,age : val.age+1})}>reverse</button>
//         <button onClick={()=>setVal({...val,age : val.age-1})}>reverse</button>
//       </div>
//     )
//   }

// export default App

// import { useState } from 'react'

// function App() {
//   const [val, setVal] = useState([1,2,3,4,5,6,7,8,9,10]);
//     return (
//       <div className='w-screen h-screen bg-slate-400 '>
//        <div>{val.map(item=><h1>{item}</h1>)}</div>
//         {/* <button onClick={()=>setVal([...val],11)}>click</button> */}
//         {/* <button onClick={()=>setVal(()=>val.filter(item=>item%2 !== 0))}>click</button> */}
//         <button onClick={()=>{setVal(()=>val.filter(item=>item%2 !== 0))}}>click</button>
//       </div>
//     )
//   }

// export default App

// import { useState } from 'react'

// function App() {
//   const initialArray = [1,2,3,4,5,6,7,8,9,10]
//   const [val, setVal] = useState(initialArray);
//   const resetArray = () => {
//     setVal(initialArray);
//   };
//     return (
//       <div className='w-screen h-screen bg-slate-400 '>
//        <div>{val.map(item=><h1>{item}</h1>)}</div>
//         <button onClick={()=>setVal([...val, val.length+1])}>Add Element</button>
//         <button onClick={resetArray}>ResetArray</button>
//       </div>
//     )
//   }

// export default App

// import React, { useState } from 'react';

// function App() {
//   const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//   const addElement = () => {
//     setVal([...val, 11]);
//   };

//   return (
//     <div className='w-screen h-screen bg-slate-400'>
//       <div>{val.map(item => <h1 key={item}>{item}</h1>)}</div>
//       <button onClick={addElement}>Add Element</button>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const data = [
//     {
//       img: "https://plus.unsplash.com/premium_photo-1675805015392-28fd80c551ec?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       name: "Image1",
//       description:
//         "long description of the image  with details about the image.",
//       instock: false,
//     },
//     {
//       img: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       name: "Image2",
//       description:
//         "long description of the image  with details about the image.",
//       instock: true,
//     },
//     {
//       img: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       name: "Image3",
//       description:
//         "long description of the image  with details about the image.",
//       instock: true,
//     },
//     {
//       img: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       name: "Image4",
//       description:
//         "long description of the image  with details about the image.",
//       instock: true,
//     },
//     {
//       img: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       name: "Image5",
//       description:
//         "long description of the image  with details about the image.",
//       instock: false,
//     },
//   ];
//   return (
//     <div className="flex items-center justify-center w-screen h-screen bg-blue-500">
//       {data.map((elem, item) => (
//         <div className="border-[2px] border-zinc-900 w-64 h-64 rounded-md mr-2  ">
//           <img src={elem.img} className="w-full h-1/2" alt="" />
//           <div className="py-3 pl-2 leading-3">{elem.name}</div>
//           <div className="py-3 pl-2 leading-3">{elem.description}</div>
//           <button
//             className={`px-3 py-1 font-semibold text-white rounded-full shadow-md ${
//               elem.instock ? "bg-blue-500" : "bg-red-500"
//             }`}
//           >
//             Click me
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


// App.js
// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [featuredItems, setFeaturedItems] = useState([]);

//   useEffect(() => {
//     fetchFeaturedItems();
//   }, []);

//   const fetchFeaturedItems = async () => {
//     try {
//       const response = await fetch("https://dadamoni.com/api/frontend/item/featured-items?order_column=id&order_type=desc", {
//         headers: {
//           "accept": "application/json, text/plain, */*",
//           "accept-language": "en-US,en;q=0.9",
//           "x-api-key": "b6d68vy2-m7g5-20r0-5275-h103w73453q120",
//           // Add other headers if needed
//         }
//       });
//       const data = await response.json();
//       setFeaturedItems(data.data);
//     } catch (error) {
//       console.error("Error fetching featured items:", error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Featured Items</h1>
//       <div className="featured-items">
//         {featuredItems.map(item => (
//           <FeaturedItemCard key={item.id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// }

const FeaturedItemCard = ({ item }) => {
  return (
    <div className="featured-item">
      <img src={item.cover} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>{item.currency_price}</p>
    </div>
  );
}

export default App;
