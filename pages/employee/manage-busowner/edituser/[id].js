import MyLayout from "../../../component/layout"
import Header from "../../../component/header"
import Link from "next/link"
import React from 'react';
import { useForm, Controller} from 'react-hook-form';
import axios from "axios";
import { useState } from "react";

export default function editbusowner({data1}) {
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
  const { register, handleSubmit, formState: { errors }, reset } = useForm(
    {
      defaultValues:{
        name: data1.name,
        email: data1.email,
        phone: data1.phone,
        address: data1.address,
        brtalicense: data1.brtalicense,
        account: data1.account
      }
    }
  );
  
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
      "address": data.address,
      "brtalicense": data.brtalicense,
      "account": data.account
    }
    try{
      const response=await axios.put(
        "http://localhost:3000/employee/updatebusowner",
        content,
      );
      console.log(response);
      setSuccess("busowner is edited successfully")
      reset();
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
    <MyLayout title="Employee Signup"/>
    <div>
      <Link href={"#"}>Index</Link>
    </div>
    <ul key={data1.id}>
        <li>ID: {data1.id}</li>
        {/* <li>Name: {data1.name}</li>
        <li>Email: {data1.email}</li>
        <li>Phone: {data1.phone}</li>
        <li>Address: {data1.address}</li> */}
      </ul>
    <h1>{success}</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="name" placeholder="name"  {...register("name", {required: {value: true, message: "Name is required"}})} />
      <span>{errors.name?.message}</span><br/>
      <input type="text" name="email"  placeholder="email" {...register("email", {required: {value: true, message: "Email is required"}, pattern:{value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message:"Input must be an email"}})} />
      <span>{errors.email?.message}</span><br/>
      <input type="tel"  placeholder="phone" name="phone" {...register("phone", {required: {value: true, message: "Phone is required"}, pattern:{value: /^\d+$/, message: "phone must me numerical"}})} />
      <span>{errors.phone?.message}</span><br/>
      <input type="tel" placeholder="account" {...register("account", {required: {value: true, message: "account is required"}, pattern:{value: /^\d+$/, message: "account must me numerical"}})} />
      <span>{errors.account?.message}</span><br/>
      <input type="text" placeholder="brtalicense" {...register("brtalicense", {required: {value: true, message: "brtalicense is required"}})} />
      <span>{errors.brtalicense?.message}</span><br/>
      <textarea name="address"  {...register("address", {required: {value: true, message: "address is required"}})} />
      <span>{errors.address?.message}</span><br/>
      <input type="submit" />
    </form>
    </>
  )
}
  

export async function getServerSideProps(context) {
    const id=context.params.id;
   
       const response = await axios.get('http://localhost:3000/employee/findbusowner/'+id);
      // const response = await fetch('http://localhost:3000/employee/findbusowner/'+id);
       const data1 = await response.data;
      
   return { props: { data1 } }
   }