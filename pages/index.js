import MyLayout from "./component/layout"
import Header from "./component/header"
import Poster from "./component/poster";
import Footer from "./component/footer";

export default function Home() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  return (
    <>
      
    <MyLayout title="Bus Ticketing System Home Page"/>
    <div className="-z-10">
    </div>
    <Poster/>
    <Footer/>

    

    </>
  )
}
