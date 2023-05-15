// import MyLayout from "../component/layout"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useRouter } from 'next/router';


// <MyLayout title="logout"/>

export default function Logout() {
  const [data, setData]=useState([]);
  const loadData=async ()=>{
      const response= await axios.get('http://localhost:3000/posters/showposters');
      setData(response.data);
      console.log(response.data)
  }
  loadData();
    return (
        <>
        {
          data.map(item=>(
            <>
            {/* <ol key={itmem.id}> */}
              <li>{item.image}</li>
            {/* </ol> */}
            </>
          ))
        }
        </>
    );

  }