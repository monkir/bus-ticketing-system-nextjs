// import MyLayout from "../component/layout"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useRouter } from 'next/router';


// <MyLayout title="logout"/>

export default function Logout() {
    const router = useRouter();
    const [email, setEmail] = useState(null);
    useEffect(() => {
            const session = sessionStorage.getItem('email');
            if (session) {
            setEmail(sessionStorage.getItem('email')); 
        }
    });
    const handleLogout = async () => {
        try {
            const response = await axios.get('http://localhost:3000/Seller/logout')
            console.log(response.data)
            sessionStorage.removeItem('email');
            setEmail(null);
            } 
            catch (error) {
            console.error(error)
        }
    };
    handleLogout();
    useEffect(() => {
      if(email==null){
        router.push('/') 
      }
    });
    return (
        <>
        </>
    );

  }