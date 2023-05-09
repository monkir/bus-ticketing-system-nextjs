import MyLayout from "../component/layout"
import Header from "../component/header"
import Link from "next/link"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";

export default function mngCustomers() {
  const [loginMessage, setLoginMessage]=useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  // const onSubmit = data => console.log(data);
  const onSubmit = async data => {
    try{
      const response=await axios.post(
        "http://localhost:3000/employee/login",
        {"email": data.email, "password": data.password}
      );
      console.log(response);
      console.log(response.data);
      console.log(response.data.message);
      setLoginMessage(response.data.message);
      if(response.data.message=="success")
        {
          sessionStorage.setItem("email", data.email);
          setLoginMessage(sessionStorage.getItem("email"));
          reset();
        }
    }
    catch(e){
      console.log("error");
      console.log(e);
      setLoginMessage(e.response.data.message);
    }
  }
  console.log(errors);
  return (
    <>
    <MyLayout title="Employee Login"/>
    <div>
      <Link href={"#"}>Index</Link>
    </div>
    <p>{loginMessage}</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="email" {...register("email", {required: {value: true, message: "Email is required"}, pattern:{value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message:"Input must be an email"}})} />
      <span>{errors.email?.message}</span><br/>
      <input type="password" placeholder="password" {...register("password", {required: {value: true, message: "Password is required"}})} />
      <span>{errors.password?.message}</span><br/>
      <input type="submit" />
      <input type="reset"></input>
    </form>
    </>
  )
}