import MyLayout from "../../component/layout"
import Header from "../../component/header"
import Link from "next/link"
import axios from "axios"
import React,{ useEffect, useState }  from "react"

export default function mngCustomers({data}) {
  let [email, setEmail] = useState("");
  useEffect(
    () => {
      let session = sessionStorage.getItem('email');
      if(session){
        setEmail(session);
      }
    }
  );
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
              <td><button onClick={()=>deleteCustomer(item.id)}>Delete</button></td>
              {/* <td><Link href={"#"}>Delete</Link></td> */}
              <td><Link href={"/employee/manage-customer/deleteuser/"+item.id}>Delete</Link></td>
              <td><Link href={"/employee/manage-customer/userinfo/"+item.id}>View</Link></td>
            </tr>
            </>
          ))}
        </tbody>
        
      </table>
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
