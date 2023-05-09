import MyLayout from "../../../component/layout"
import Header from "../../../component/header"
import Link from "next/link"
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useState } from "react";

export default function editcustomer({data}) {
  console.log(data);
  return (
    <>
    <MyLayout title="Employee Signup"/>
    <h1>Success</h1>
    <h1>Row affected: {data.affected}</h1>
    </>
  )
}
export async function getServerSideProps(context) {
    const id=context.params.id;
       const response = await axios.delete('http://localhost:3000/employee/deletecustomer/'+id);
      // const response = await fetch('http://localhost:3000/employee/findcustomer/'+id);
       const data = await response.data;
   return { props: { data } }
   }