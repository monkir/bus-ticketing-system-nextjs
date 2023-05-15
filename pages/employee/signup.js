import axios from "axios";
import { Modal } from "flowbite-react";
import { IM_Fell_Double_Pica } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from 'react-hook-form';

export default function addCustomers() {
  const [success, setSuccess] = useState('');
  const [showAddModal, setShowAddModal]=useState(true);
  // setSuccess(window.sessionStorage?.getItem("email"));
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const router= useRouter()
  const onSubmit = async data1 => {
    const formData= new FormData();
    formData.append("name", data1.name);
    formData.append("email", data1.email);
    formData.append("phone", data1.phone);
    formData.append("address", data1.address);
    formData.append("password", data1.password);
    formData.append("profile", data1.profile[0]);

    try{
      const response=await axios.post(
        "http://localhost:3000/employee/signup",
        formData, 
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );
      if(response.data.message=="success"){
        setSuccess("Customer is added successfully")
        setShowAddModal(false);
        reset();
        router.push("/employee")
      }
      else if(response.data.message=="failed"){
        setSuccess(response.data.error)
      }
      
      // reset();
      console.log(response);
    }
    catch(e){
      console.log("error");
      console.log(e);
    }
  }
  console.log(errors);
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
                      {/* name */}
                    <div>
                          <div class="relative">
                              <input 
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
                              <input 
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
                              <input 
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

                      {/* password  */}

                      <div>
                          <div class="relative">
                              <input 
                                id="passwrod" aria-describedby="passwrod_help" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"  
                                type="password" placeholder=" " {...register("password", {required: {value: true, message: "Password is required"}})}
                              />
                              <label for="passwrod" class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                                Password
                                </label>
                          </div>
                          <p class="mt-2 text-xs text-red-600 dark:text-red-400">
                            {errors.password?.message}
                          </p>
                      </div>
                      {/* file  */}
                      <div class="sm:col-span-2">
                          <div class="relative">
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file">Large file input</label>
                      <input class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                      id="file" type="file" {...register("profile", {required: {value: true, message: "File is required"}})}
                      />

                              {/* <input 
                                id="file" aria-describedby="file_help" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"  
                                type="file" {...register("profile", {required: {value: true, message: "File is required"}})} 
                              />
                              <label for="file" class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
                                File
                              </label> */}
                          </div>
                          <p id="file" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            {errors.profile?.message}
                          </p>
                      </div>
                      {/* address */}
                        <div class="sm:col-span-2">
                            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here"
                              {...register("address", {required: {value: true, message: "address is required"}})} 
                            />                    
                        </div>
                          <p id="address" class="mt-2 text-xs text-red-600 dark:text-red-400">
                            {errors.address?.message}
                          </p>
                    </div>
                    <button type="submit" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        Add new product
                    </button>
                    <button type="reset" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        Reset
                    </button>
                    <Link href="./login">
                    <button type="reset" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        Login
                    </button>
                    </Link>
                </form>
      </Modal.Body>
    </Modal>
    </>
  )
}
// import MyLayout from "../../component/layout"
// import Header from "../../component/header"
// import Link from "next/link"
// import { useForm } from 'react-hook-form';
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Modal } from "flowbite";

// export default function addCustomers() {
  
//   const [addModalDiv, setAddModalDiv]=useState();
//   useEffect(()=>{
//     setAddModalDiv(document.getElementById("defaultModal"))
//   },[])
//   const addModal = new Modal(addModalDiv);
//   const [success, setSuccess] = useState('');
//   // setSuccess(window.sessionStorage?.getItem("email"));
//   const { register, handleSubmit, formState: { errors }, reset } = useForm();
//   const onSubmit = async data => {
//     const formData= new FormData();
//     // formData.JSON=data;
//     formData.append("name", data.name);
//     formData.append("email", data.email);
//     formData.append("phone", data.phone);
//     formData.append("address", data.address);
//     formData.append("password", data.password);
//     formData.append("profile", data.profile[0]);

//     try{
//       const response=await axios.post(
//         "http://localhost:3000/employee/addcustomer",
//         formData, 
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           }
//         }
//       );
//       if(response.data.message=="success"){
//         setSuccess("Customer is added successfully")
//       }
//       else if(response.data.message=="failed"){
//         setSuccess(response.data.error)
//       }
      
//       // reset();
//       console.log(response);
//     }
//     catch(e){
//       console.log("error");
//       console.log(e);
//     }
//   }
//   // const onSubmit = data => console.log(data);
//   console.log(errors);
//   return (
//     <>
//     {/* <MyLayout title="Add Customer"/> */}
//      {/* <!-- Modal toggle --> */}
//     <div class="flex justify-center m-5">
//       {/* onClick={()=>addModal.toggle()} data-modal-toggle="defaultModal" */}
//         <button id="defaultModalButton" onClick={()=>{addModal.toggle()}}  class="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
//         Create product
//         </button>
//     </div>

//     {/* <!-- Main modal --> */}
//     <div id="defaultModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
//         <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
//             {/* <!-- Modal content --> */}
//             <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
//                 {/* <!-- Modal header --> */}
//                 <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
//                     <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
//                         Add Product
//                     </h3>
//                     <button type="button"  onClick={()=>{addModal.toggle()}} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
//                         <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//                         <span class="sr-only">Close modal</span>
//                     </button>
//                 </div>
//                 {/* <!-- Modal body --> */}
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <div class="grid gap-4 mb-4 sm:grid-cols-2">
//                       {/* name */}
//                     <div>
//                           <div class="relative">
//                               <input 
//                                 id="name" aria-describedby="name_help" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"  
//                                 type="text" {...register("name", {required: {value: true, message: "Name is required"}})} 
//                               />
//                               <label for="name" class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
//                                 Name
//                                 </label>
//                           </div>
//                           <p id="name" class="mt-2 text-xs text-red-600 dark:text-red-400">
//                             {errors.name?.message}
//                           </p>
//                       </div>
                      
//                       {/* email */}
//                     <div>
//                           <div class="relative">
//                               <input 
//                                 id="email" aria-describedby="email_help" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"  
//                                 type="text" {...register("email", {required: {value: true, message: "Email is required"}, pattern:{value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message:"Input must be an email"}})}  
//                               />
//                               <label for="email" class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
//                                 Your email
//                                 </label>
//                           </div>
//                           <p id="email" class="mt-2 text-xs text-red-600 dark:text-red-400">
//                             {errors.email?.message}
//                           </p>
//                       </div>
                      
                      
//                       {/* phone */}
//                     <div>
//                           <div class="relative">
//                               <input 
//                                 id="phone" aria-describedby="phone_help" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"  
//                                 type="tel" {...register("phone", {required: {value: true, message: "Phone is required"}, pattern:{value: /^\d+$/, message: "phone must me numerical"}})}   
//                               />
//                               <label for="phone" class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
//                                 Phone
//                               </label>
//                           </div>
//                           <p id="phone" class="mt-2 text-xs text-red-600 dark:text-red-400">
//                             {errors.phone?.message}
//                           </p>
//                       </div>

//                       {/* password  */}

//                       <div>
//                           <div class="relative">
//                               <input 
//                                 id="passwrod" aria-describedby="passwrod_help" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"  
//                                 type="password" placeholder=" " {...register("password", {required: {value: true, message: "Password is required"}})}
//                               />
//                               <label for="passwrod" class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
//                                 Password
//                                 </label>
//                           </div>
//                           <p id="passwrod" class="mt-2 text-xs text-red-600 dark:text-red-400">
//                             {errors.password?.message}
//                           </p>
//                       </div>
//                       {/* file  */}

//                       <div>
//                           <div class="relative">
//                               <input 
//                                 id="file" aria-describedby="file_help" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"  
//                                 type="file" {...register("profile", {required: {value: true, message: "File is required"}})} 
//                               />
//                               <label for="file" class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
//                                 File
//                               </label>
//                           </div>
//                           <p id="file" class="mt-2 text-xs text-red-600 dark:text-red-400">
//                             {errors.password?.message}
//                           </p>
//                       </div>
//                       {/* address */}
//                         <div class="sm:col-span-2">
//                             <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
//                             <textarea id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here"
//                               {...register("address", {required: {value: true, message: "address is required"}})} 
//                             />                    
//                         </div>
//                           <p id="address" class="mt-2 text-xs text-red-600 dark:text-red-400">
//                             {errors.address?.message}
//                           </p>
//                     </div>
//                     <button type="submit" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
//                         <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
//                         Add new product
//                     </button>
//                 </form>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }