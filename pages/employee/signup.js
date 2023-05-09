import MyLayout from "../component/layout"
import Header from "../component/header"
import Link from "next/link"
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useState } from "react";

export default function mngCustomers() {
  const [success, setSuccess] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async data => {
    const formData= new FormData();
    // formData.JSON=data;
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("address", data.address);
    formData.append("password", data.password);
    formData.append("filename", data.profile[0]);

    try{
      const response=await axios.post(
        "http://localhost:3000/employee/signup",
        formData, 
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      console.log(response);
    }
    catch(e){
      console.log("error");
      console.log(e);
      // setSuccess(e.response.data.message);
    }

  }
  // const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <>
    <MyLayout title="Employee Signup"/>
    <div>
      <Link href={"#"}>Index</Link>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} method="post" encType="multipart/form-data">
      <input type="text" placeholder="name" {...register("name", {required: {value: true, message: "Name is required"}})} />
      <span>{errors.name?.message}</span><br/>
      <input type="text" placeholder="email" {...register("email", {required: {value: true, message: "Email is required"}, pattern:{value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message:"Input must be an email"}})} />
      <span>{errors.email?.message}</span><br/>
      <input type="tel" placeholder="phone" {...register("phone", {required: {value: true, message: "Phone is required"}, pattern:{value: /^\d+$/, message: "phone must me numerical"}})} />
      <span>{errors.phone?.message}</span><br/>
      <input type="file" {...register("profile", {required: {value: true, message: "File is required"}})} />
      <br/><span>{errors.profile?.message}</span><br/>
      <textarea {...register("address", {required: {value: true, message: "address is required"}})} />
      <span>{errors.address?.message}</span><br/>
      <input type="password" placeholder="password" {...register("password", {required: {value: true, message: "Password is required"}, minLength: {value:8, message: "Password should be minimum 8 chars"}})} />
      <span>{errors.password?.message}</span><br/>
      <input type="submit" />
    </form>
    </>
  )
}