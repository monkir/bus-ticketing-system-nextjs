import MyHeader from "@/pages/component/header"
import Link from "next/link"
import { Navbar, Dropdown, Avatar } from "flowbite-react"
import { useState } from "react"
import EmpSessionCheck from "./empSessionCheck"
import { useEffect } from "react"

export default function EmpLayout(props)   
{
  const [image, setImage]=useState("bts");
  const [name, setName]=useState("bts");
  const [email, setEmail]=useState("bts");
  useEffect(()=>{
      if(sessionStorage.getItem("name")!=undefined){
          setName(sessionStorage.getItem("name"))
      }
      if(sessionStorage.getItem("image")!=undefined){
          setImage(sessionStorage.getItem("image"))
      }
      if(sessionStorage.getItem("email")!=undefined){
          setEmail(sessionStorage.getItem("email"))
      }
  },[])
  return(
  <>
  {/* <html> */}
  <EmpSessionCheck/>
  <MyHeader title={props.title} />
  {/* <body> */}
    
    {/* <Image src="/ico.png" alt="me" width="64" height="64" /> */}
    <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand href="/">
        <img
          src="/bus-ticket-logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
        label={<Avatar alt="User settings" img={"http://localhost:3000/employee/getimage/"+image} rounded={true}/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              {name}
            </span>
            <span className="block truncate text-sm font-medium">
              {email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Item>
            Earnings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
          <Link href="/employee/logout"> Signout</Link>
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
          <Link href="./">
            Home
          </Link>
          <Link href="/employee/manage-customer">
            Manage Customer
          </Link>
          <Link href="/employee/manage-busowner">
            Manage Busowner
          </Link>
          <Link href="/employee/manage-poster">
            Manage Poster
          </Link>
      </Navbar.Collapse>
    </Navbar>
    
  {/* </body> */}
    
  {/* </html> */}

  {/* <Poster/> */}

<Navbar.Link href="/">
  asdfsdf
   
</Navbar.Link>

 
  <Link href="/about"> About US</Link>|
  <Link href="/employee/manage-customer"> Manage Customer</Link>|
  <Link href="/employee/manage-busowner"> Manage Bus-owner</Link>|
  <Link href="#"> Manage Employee</Link>|
  <Link href="/employee/signup"> Emplyee signup</Link>|
  <Link href="/employee/login"> Emplyee login</Link>|
  <Link href="/employee/logout"> Emplyee logout</Link>|


  {/* <div>
    
  </div>

  <hr/>

  <div style={{ position: "fixed", bottom: 0, width:"100%" }}>
      Abc Ecommerce @copyright
  </div> */}
  </>
  )
}