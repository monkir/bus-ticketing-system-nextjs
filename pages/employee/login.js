import MyLayout from "../component/layout"
import Header from "../component/header"
import Link from "next/link"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useRouter } from "next/router";

export default function mngCustomers() {
  const [loginMessage, setLoginMessage]=useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const router = useRouter();
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
          sessionStorage.setItem("name", response.data.name);
          sessionStorage.setItem("image", response.data.image);
          setLoginMessage(sessionStorage.getItem("image"));
          router.push("./")
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

    <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      {/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Flowbite    
      </a> */}
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} class="space-y-4 md:space-y-6">


                  <div>
                      <div class="relative">
                          <input 
                            id="email" aria-describedby="email_help" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"  
                            type="text" placeholder=" " {...register("email", {required: {value: true, message: "Email is required"}, pattern:{value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message:"Input must be an email"}})}
                          />
                          <label for="email" class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Your email</label>
                      </div>
                      <p id="email" class="mt-2 text-xs text-red-600 dark:text-red-400">
                        {errors.email?.message}
                      </p>
                  </div>

                  <div>
                      <div class="relative">
                          <input 
                            id="passwrod" aria-describedby="email_help" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"  
                            type="password" placeholder=" " {...register("password", {required: {value: true, message: "Password is required"}})}
                          />
                          <label for="passwrod" class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Your email</label>
                      </div>
                      <p id="passwrod" class="mt-2 text-xs text-red-600 dark:text-red-400">
                        {errors.password?.message}
                      </p>
                  </div>
                  
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <button type="clear" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Clear</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>



    </>
  )
}