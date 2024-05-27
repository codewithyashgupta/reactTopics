import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
function GIthub() {
    const data = useLoaderData();
    // const [data, setData] = useState([]) 
    // useEffect(() =>{
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data);
    //       });
    // },[]);
  return (
    <div>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt=""gitHub_Picture />
    </div>
  )
}

export default GIthub 
