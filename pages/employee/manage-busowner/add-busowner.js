import MyLayout from "../../component/layout"
import Header from "../../component/header"
import Link from "next/link"
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useState } from "react";

export default function addbusowners() {
  const [success, setSuccess] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = async data => {
    const formData= new FormData();
    // formData.JSON=data;
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("address", data.address);
    formData.append("account", data.account);
    formData.append("brtalicense", data.brtalicense);
    formData.append("password", data.password);
    // formData.JSON=data;
    const content={
      "name": data.name,
      "email": data.email,
      "phone": data.phone,
      "address": data.address,
      "account": data.account,
      "brtalicense": data.brtalicense,
      "password": data.password
    }

    try{
      const response=await axios.post(
        "http://localhost:3000/employee/addbusowner",
        content
      );
      setSuccess("busowner is added successfully")
      reset();
      console.log(response);
    }
    catch(e){
      console.log("error");
      console.log(e);
    }

  }
  // const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <>
    <MyLayout title="Add busowner"/>
    <div>
      <Link href={"#"}>Index</Link>
    </div>
    <h1>{success}</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" {...register("name", {required: {value: true, message: "Name is required"}})} />
      <span>{errors.name?.message}</span><br/>
      <input type="text" placeholder="email" {...register("email", {required: {value: true, message: "Email is required"}, pattern:{value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message:"Input must be an email"}})} />
      <span>{errors.email?.message}</span><br/>
      <input type="tel" placeholder="phone" {...register("phone", {required: {value: true, message: "Phone is required"}, pattern:{value: /^\d+$/, message: "phone must me numerical"}})} />
      <span>{errors.phone?.message}</span><br/>
      <textarea {...register("address", {required: {value: true, message: "address is required"}})} />
      <span>{errors.address?.message}</span><br/>
      <input type="tel" placeholder="account" {...register("account", {required: {value: true, message: "account is required"}, pattern:{value: /^\d+$/, message: "account must me numerical"}})} />
      <span>{errors.account?.message}</span><br/>
      <input type="text" placeholder="brtalicense" {...register("brtalicense", {required: {value: true, message: "brtalicense is required"}})} />
      <span>{errors.brtalicense?.message}</span><br/>
      <input type="password" placeholder="password" {...register("password", {required: {value: true, message: "Password is required"}, minLength: {value:8, message: "Password should be minimum 8 chars"}})} />
      <span>{errors.password?.message}</span><br/>
      <input type="submit" />
    </form>
    </>
  )
}

