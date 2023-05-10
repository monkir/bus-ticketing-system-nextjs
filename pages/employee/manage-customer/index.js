import MyLayout from "../../component/layout"
import Header from "../../component/header"
import Link from "next/link"
import axios from "axios"
import React,{ useEffect, useState }  from "react"
import Router from "next/router"
import { useRouter } from "next/router"
import { Modal, HiOutlineExclamationCircle, Button } from "flowbite-react"

export default function mngCustomers({data}) {
  let [email, setEmail] = useState("");
  useEffect(
    () => {
      let session = sessionStorage.getItem('email');
      if(session){
        setEmail(session);
        deleteCustomer(2);
      }
    },[]
  );
  useEffect(
    ()=>{
      // Router.reload();
    }
  )
  var [dp, setdp]=useState("");
  const deletePanel=(did)=>{
    setdp(
      <>
      <div>
        <h1>
          Sure to delete id {did}?
        </h1>
        <button value={"confirm"}>confirm</button>
        <button value={"cancel"}>delete</button>
      </div>
      
      </>
    )
  }
  const tryDelete=()=>{
    return "popup-modal";
  }
  const deleteCustomer = (did)=>{
    setDR(dr+1);
    deletePanel(did);
    console.log(did);
  }
  let [dr, setDR] = useState(0);
  return (
    <>
    <MyLayout title="Manage Customers"/>
    <div>
      <Link href={"/employee/manage-customer/add-customer"}>Add Customer</Link>
      <p>{email}</p>
      <p>{dr}</p>
      <button onClick={()=>{Router.reload()}} >Reload</button>
      {dp}
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>address</th>
            <th colSpan={3}>Action</th>
            {/* <th>status</th> */}
          </tr>
          {data.map(item=>(
            <>
            <tr key={item.id}>
                
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              {/* <td>{item.account}</td>
              <td>{item.address}</td>
              <td>{item.address}</td> */}
              {/* <td>{item.profile}</td> */}
              <td><Link href={"/employee/manage-customer/edituser/"+item.id}>Edit</Link></td>
              {/* <td><Link href={"#"}>Block</Link></td> */}
              {/* <td><button button data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"  onClick={()=>deleteCustomer(item.id)}>Delete</button></td> */}
              <td><button data-modal-target="popup-modal" data-modal-show="popup-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Delete</button></td>
              {/* <td><Link href={"#"}>Delete</Link></td> */}
              <td><Link href={"/employee/manage-customer/deleteuser/"+item.id}>Delete</Link></td>
              <td><Link href={"/employee/manage-customer/userinfo/"+item.id}>View</Link></td>
            </tr>
            </>
          ))}
        </tbody>
        
      </table>
    </div>






    <div id="popup-modal" tabIndex="2" className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      <span className="sr-only">Close modal</span>
                  </button>
                  <div className="p-6 text-center">
                      <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                      <button onClick={()=>{tryDelete()}} data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                          Yes, I'm sure
                      </button>
                      <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                  </div>
              </div>
          </div>
      </div>




    </>
  )
}

export async function getServerSideProps() {
   
  let data=[];
  try{
    const response = await axios.get('http://localhost:3000/employee/showcustomers');
    data = response.data;
    console.log("runned");
  }
  catch(e){
    console.log(e);
    console.log("not runned");
    data=[];
  }
  // const data=[
  //   {
  //     'id':1,
  //     'name':'Mahmud',
  //     'email':'mahmud@gamil.com',
  //     'phone':'065165165',
  //     'address':'Motijheel'
  //   },
  //   {
  //     'id':2,
  //     'name':'Akash',
  //     'email':'akash@gamil.com',
  //     'phone':'0465165465',
  //     'address':'Kuril'
  //   }
  // ]
  // sessionStorage.getItem("email");
  return { props: { data } }
}
