import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function signout(){
    const router = useRouter();
    useEffect(()=>{
        sessionStorage.clear();
    router.push('/')
    })
    
}