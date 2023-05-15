import Link from "next/link"
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useState } from "react";
import EmpLayout from "../../component/empLayout";

export default function editposter({data1}) {
  // const [formData, setFormData] = useState({
  //   name: "data1.name",
  //   email: data1.email,
  //   phone: data1.phone,
  //   address: data1.address
  // });
  
  // const handleInput = (e) => {
  //   const fieldName = e.target.name;
  //   const fieldValue = e.target.value;
  //   console.log(fieldName);
  //   console.log(fieldValue);

  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [fieldName]: fieldValue
  //   }));
  //   console.log("hi");
  // }
  const [success, setSuccess] = useState('')
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = async data => {
    // const formData= new FormData();
    // // formData.JSON=data;
    // formData.append("id", data1.id);
    // formData.append("name", data.name);
    // formData.append("email", data.email);
    // formData.append("phone", data.phone);
    // formData.append("address", data.address);
    const content={
      "id": data1.id,
      "name": data.name,
      "email": data.email,
      "phone": data.phone,
      "address": data.address
    }
    try{
      const response=await axios.put(
        "http://localhost:3000/employee/updateposter",
        content,
      );
      console.log(response);
      setSuccess("poster is edited successfully")
      // reset();
    }
    catch(e){
      console.log("error");
      console.log(e);
      setSuccess(e.response.data.message);
    }
  }
  // const onSubmit = data => console.log(data);
  console.log(errors);
  // console.log({data});
  // console.log(data1);
  return (
    <>
    <EmpLayout title="Employee Signup"/>
    <div>
      <Link href={"#"}>Index</Link>
    </div>
    <ul key={data1.id}>
        <li>ID: {data1.id}</li>
      </ul>
    <h1>{success}</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input type="text" name="name" placeholder="name" defaultValue={data1.name} {...register("name", {required: {value: true, message: "Name is required"}})} />
      <span>{errors.name?.message}</span><br/>
      <input type="text" name="email"  placeholder="email" defaultValue={data1.email} {...register("email", {required: {value: true, message: "Email is required"}, pattern:{value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message:"Input must be an email"}})} />
      <span>{errors.email?.message}</span><br/>
      <input type="tel"  placeholder="phone" name="phone" defaultValue={data1.phone} {...register("phone", {required: {value: true, message: "Phone is required"}, pattern:{value: /^\d+$/, message: "phone must me numerical"}})} />
      <span>{errors.phone?.message}</span><br/>
      <textarea name="address" defaultValue={data1.address} {...register("address", {required: {value: true, message: "address is required"}})} />
      <span>{errors.address?.message}</span><br/> */}
      <input type="submit" />
    </form>
    </>
  )
}
  

export async function getServerSideProps(context) {
  const id=context.params.id;
  const response = await axios.get('http://localhost:3000/employee/findposter/'+id);
  // const response = await fetch('http://localhost:3000/employee/findposter/'+id);
  const data1 = await response.data;
  return { props: { data1 } }
}