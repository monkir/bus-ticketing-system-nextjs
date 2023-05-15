import Header from "./header"
import Link from "next/link"
import { Navbar, Dropdown, Avatar } from "flowbite-react"

export default function MyLayout(props)   
{

  return(
  <>
  {/* <html> */}
  <Header title={props.title} />
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
          Bus Ticketing System
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
          <Link href="/">
            Home
          </Link>
          <Link href="/about">
            About
          </Link>
          <Link href="/employee/login">
            Employee Login
          </Link>
          <Link href="/employee/signup">
            Employee signup
          </Link>
      </Navbar.Collapse>
    </Navbar>
    
  {/* </body> */}
    
  {/* </html> */}

  {/* <Poster/> */}


 
  {/* <Link href="/about"> About US</Link>|
  <Link href="/employee/manage-customer"> Manage Customer</Link>|
  <Link href="/employee/manage-busowner"> Manage Bus-owner</Link>|
  <Link href="#"> Manage Employee</Link>|
  <Link href="/employee/signup"> Emplyee signup</Link>|
  <Link href="/employee/login"> Emplyee login</Link>|
  <Link href="/employee/logout"> Emplyee logout</Link>| */}


  {/* <div>
    
  </div>

  <hr/>

  <div style={{ position: "fixed", bottom: 0, width:"100%" }}>
      Abc Ecommerce @copyright
  </div> */}
  </>
  )
}