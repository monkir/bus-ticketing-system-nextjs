import Link from "next/link"
import axios from "axios"
import Image from "next/image"
import EmpLayout from "../../component/empLayout"
export default function mngposters({data}) {
  return (
    <>
    
    <EmpLayout title="Manage posters"/>
    <div>
      <Link href={"/employee/manage-poster/add-poster"}>Add poster</Link>
      
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
   
       const response = await axios.get('https://bus-ticketing-system-nestjs-production.up.railway.app/employee/findposter/'+pid);
      // const response = await fetch('https://bus-ticketing-system-nestjs-production.up.railway.app/employee/findposter/'+id);
       const data = await response.data;
      
   return { props: { data } }
   }