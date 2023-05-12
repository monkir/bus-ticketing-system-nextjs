import MyLayout from "../../component/layout"
import Header from "../../component/header"
import Link from "next/link"
import axios from "axios"

export default function mngbusowners({data}) {
  const deletebusowner = async (id) =>{
    const response = await axios.delete(
      "http://localhost:3000/employee/deletebusowner/"+id
    )
  }
  return (
    <>
    <MyLayout title="Manage busowners"/>
    <div>
      <Link href={"/employee/manage-busowner/add-busowner"}>Add busowner</Link>
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>address</th>
            <th>account</th>
            <th>brtalicense</th>
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
              <td>{item.account}</td>
              <td>{item.brtalicense}</td>
              {/* <td>{item.profile}</td> */}
              <td><Link href={"/employee/manage-busowner/edituser/"+item.id}>Edit</Link></td>
              {/* <td><Link href={"#"}>Block</Link></td> */}
              {/* <td><button onClick={()=>deletebusowner(item.id)}>Delete</button></td> */}
              {/* <td><Link href={"#"}>Delete</Link></td> */}
              <td><Link href={"/employee/manage-busowner/deleteuser/"+item.id}>Delete</Link></td>
              <td><Link href={"/employee/manage-busowner/userinfo/"+item.id}>Views</Link></td>
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
   
  const response = await fetch('http://localhost:3000/employee/showbusowners');
  const data = await response.json();
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

return { props: { data } }
}
