import Router from "next/router";
import { useEffect } from "react";
export default function EmpSessionCheck(){
    const goLogin=()=>{
        Router.push('/employee/login');
    }
    useEffect(()=>{
        if(sessionStorage.getItem("email")==undefined){
            goLogin();
        }
    },[])
}