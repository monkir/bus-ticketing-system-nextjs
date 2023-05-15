import MyLayout from "../../../component/layout"
import Link from "next/link"
import axios from "axios"
import Image from "next/image"
export default function mngbusowners({data}) {
  return (
    <>
    
    <MyLayout title="Manage busowners"/>
    <div>
      <Link href={"/employee/manage-busowner/add-busowner"}>Add busowner</Link>
      
      <ul key={data.id}>
        <li>ID: {data.id}</li>
        <li>Name: {data.name}</li>
        <li>Email: {data.email}</li>
        <li>Phone: {data.phone}</li>
        <li>Address: {data.address}</li>
        <li>Address: {data.account}</li>
        <li>Address: {data.brtalicense}</li>
      </ul>
    </div>
    </>
  )
}
  

export async function getServerSideProps(context) {
    const id=context.params.id;
   
       const response = await axios.get('https://bus-ticketing-system-nestjs-production.up.railway.app/employee/findbusowner/'+id);
      // const response = await fetch('https://bus-ticketing-system-nestjs-production.up.railway.app/employee/findbusowner/'+id);
       const data = await response.data;
      
   return { props: { data } }
   }