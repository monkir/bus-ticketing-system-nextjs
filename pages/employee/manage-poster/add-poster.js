import MyLayout from "../../component/layout"
import Header from "../../component/header"
import Link from "next/link"
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import { Router } from "next/router";
import { useRouter } from "next/router";

export default function addposter() {
  const [success, setSuccess] = useState('');
  const [showAddModal, setShowAddModal]=useState(true);
  // setSuccess(window.sessionStorage?.getItem("email"));
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const router = useRouter();
  const onSubmit = async data1 => {
    const formData= new FormData();
    formData.append("image", data1.image[0]);

    try{
      const response=await axios.post(
        "http://localhost:3000/employee/addposter",
        formData, 
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );
      if(response.data.message=="success"){
        setSuccess("poster is added successfully")
        setShowAddModal(false);
        reset();
        router.back();
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
                      {/* file  */}
                      <div class="sm:col-span-2">
                        <div class="relative">
                          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file">Large file input</label>
                          <input class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                          id="image" type="file" {...register("image", {required: {value: true, message: "Image is required"}})}
                          />
                        </div>
                        <p id="image" class="mt-2 text-xs text-red-600 dark:text-red-400">
                          {errors.image?.message}
                        </p>
                      </div>
                      
                    </div>
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