import MyLayout from "../../../component/layout"
import Link from "next/link"
import axios from "axios"
import Image from "next/image"
export default function mngCustomers({data}) {
  return (
    <>
    
    <MyLayout title="Manage Customers"/>
    <div>
      <Link href={"/employee/manage-customer/add-customer"}>Add Customer</Link>
      
      <ul key={data.id}>
        <li>ID: {data.id}</li>
        <li>Name: {data.name}</li>
        <li>Email: {data.email}</li>
        <li>Phone: {data.phone}</li>
        <li>Address: {data.address}</li>
      </ul>
      <Image src={"http:/localhost:3000/employee/getimage/"+data.profile} alt="me" width="150" height="150" />
    </div>
    </>
  )
}
  

export async function getServerSideProps(context) {
    const pid=context.params.id;
   
       const response = await axios.get('http://localhost:3000/employee/findcustomer/'+pid);
      // const response = await fetch('http://localhost:3000/employee/findcustomer/'+id);
       const data = await response.data;
      
   return { props: { data } }
   }