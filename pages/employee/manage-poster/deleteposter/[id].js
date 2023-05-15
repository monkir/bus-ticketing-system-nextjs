import MyLayout from "../../../component/layout"
import React from 'react';
import axios from "axios";
import EmpLayout from "../../component/empLayout";
import Footer from "@/pages/component/footer";

export default function editposter({data}) {
  console.log(data);
  return (
    <>
    <EmpLayout title="Employee Signup"/>
    <h1>Success</h1>
    <h1>Row affected: {data.affected}</h1>
    <Footer/>
    </>
  )
}
export async function getServerSideProps(context) {
    const id=context.params.id;
       const response = await axios.delete('https://bus-ticketing-system-nestjs-production.up.railway.app/employee/deleteposter/'+id);
      // const response = await fetch('https://bus-ticketing-system-nestjs-production.up.railway.app/employee/findposter/'+id);
       const data = await response.data;
   return { props: { data } }
   }