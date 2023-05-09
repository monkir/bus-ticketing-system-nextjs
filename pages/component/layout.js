import Header from "./header"
import Link from "next/link"
import Image from 'next/image'

export default function MyLayout(props)   
{
    return(
        <>
        <Header title={props.title} />
        <Image src="/ico.png" alt="me" width="64" height="64" />
        <nav>
        <Link href="/"> Home</Link>|
        <Link href="/about"> About US</Link>|
        <Link href="/employee/manage-customer"> Manage Customer</Link>|
        <Link href="/employee/manage-busowner"> Manage Bus-owner</Link>|
        <Link href="#"> Manage Employee</Link>|
        <Link href="/employee/signup"> Emplyee signup</Link>|
        <Link href="/employee/login"> Emplyee login</Link>|
        <Link href="/employee/logout"> Emplyee logout</Link>|
        <hr/>
        
        </nav>
        
        <main>

        </main>
        <div style={{ position: "absolute", bottom: 0, width:"100%" }}>
            Abc Ecommerce @copyright</div>
        </>
    )
}