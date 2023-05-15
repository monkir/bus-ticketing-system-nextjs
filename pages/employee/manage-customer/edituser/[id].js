import axios from "axios";
import { Modal } from "flowbite-react";
import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from "react";
import EmpLayout from "../../component/empLayout";
import { useRouter } from "next/router";

export default function editcustomer({data1}) {
  const [success, setSuccess] = useState('')
  const [showAddModal, setShowAddModal]=useState(true);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const router = useRouter()
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
        "http://localhost:3000/employee/updatecustomer",
        content,
      );
      console.log(response);
      setSuccess("Customer is edited successfully")
      router.back();
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
<Modal
    show={showAddModal}
    popup={true}
    // onClose={onClose}
    >
      <Modal.Header />
      <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="grid gap-4 mb-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <ul key={data1.id}>
                          <li>ID: {data1.id}</li>
                        </ul>
                      </div>
                      {/* name */}
                    <div>
                          <div class="relative">
                              <input defaultValue={data1.name}
                                id="name" aria-describedby="name_help" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"  
                                type="text" placeholder=" "  {...register("name", {required: {value: true, message: "Name is required"}})} 
                              />
                              <label for="name" class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                                Name
                                </label>
                          </div>
                          <p class="mt-2 text-xs text-red-600 dark:text-red-400">
                            {errors.name?.message}
                          </p>
                      </div>
                      
                      {/* email */}
                    <div>
                          <div class="relative">
                              <input defaultValue={data1.email}
                                id="email" aria-describedby="email_help" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"  
                                type="text" placeholder=" "  {...register("email", {required: {value: true, message: "Email is required"}, pattern:{value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message:"Input must be an email"}})}  
                              />
                              <label for="email" class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                                Your email
                                </label>
                          </div>
                          <p class="mt-2 text-xs text-red-600 dark:text-red-400">
                            {errors.email?.message}
                          </p>
                      </div>
                      
                      
                      {/* phone */}
                    <div>
                          <div class="relative">
                              <input defaultValue={data1.phone}
                                id="phone" aria-describedby="phone_help" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"  
                                type="tel" placeholder=" " {...register("phone", {required: {value: true, message: "Phone is required"}, pattern:{value: /^\d+$/, message: "phone must me numerical"}})}   
                              />
                              <label for="phone" class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                                Phone
                              </label>
                          </div>
                          <p class="mt-2 text-xs text-red-600 dark:text-red-400">
                            {errors.phone?.message}
                          </p>
                      </div>

                      
                      </div>
                      {/* address */}
                        <div class="sm:col-span-2">
                            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea defaultValue={data1.address} id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here"
                              {...register("address", {required: {value: true, message: "address is required"}})} 
                            />                    
                        </div>
                          <p id="address" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            {errors.address?.message}
                          </p>
                    <button type="submit" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        Add new product
                    </button>
                    <button type="reset" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        Reset
                    </button>
                </form>
      </Modal.Body>
    </Modal>
    </>
  )
}
  

export async function getServerSideProps(context) {
  const id=context.params.id;
  const response = await axios.get('http://localhost:3000/employee/findcustomer/'+id);
  // const response = await fetch('http://localhost:3000/employee/findcustomer/'+id);
  const data1 = await response.data;
  return { props: { data1 } }
}