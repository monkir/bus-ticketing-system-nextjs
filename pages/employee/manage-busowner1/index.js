import MyLayout from "../../component/layout"
import Header from "../../component/header"
import Link from "next/link"

export default function mngCustomers({data}) {
  return (
    <>
    
    <MyLayout title="Manage Customers"/>
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
              <td>{item.address}</td> */}
              {/* <td>{item.profile}</td> */}
              <td><Link href={"#"}>Edit</Link></td>
              <td><Link href={"#"}>Block</Link></td>
              <td><Link href={"#"}>Delete</Link></td>
              <td><Link href={"#"}>View</Link></td>
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
  //     'name':'monkir',
  //     'email':'monkirchowdhury@gamil.com',
  //     'phone':'065165165',
  //     'address':'Motijheel'
  //   },
  //   {
  //     'id':2,
  //     'name':'Muzahid',
  //     'email':'muzahid@gamil.com',
  //     'phone':'0465165465',
  //     'address':'Kuril'
  //   }
  // ]

return { props: { data } }
}
