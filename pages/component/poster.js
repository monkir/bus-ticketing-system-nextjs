import axios from "axios";
import { useEffect, useState } from "react";

export default function  Poster () {
    var [data, setData]=useState([]);
    const loadData=async ()=>{
      try{
        const response= await axios.get('http://localhost:3000/posters/showposters');
        setData(await response.data);
      }
      catch(e){
        console.log(e);
      }
        
    }
    useEffect(()=>{
      loadData();
    },[])
  return (
    <>
    <div >
      {/* poster begin */}
    <div className=" flex justify-center">
      <div id="gallery" className="relative w-3/4" data-carousel="slide">
          {/* <!-- Carousel wrapper --> */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              {/* <!-- Item 1 --> */}
              {data.map(item=>(
                <div key={item.id} className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src={"http://localhost:3000/employee/getimage/"+item.image} className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                </div>
              ))}
              
              {/* <!-- Item 1 --> */}
              {/* <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="http://localhost:3000/employee/getimage/1684050696953maxresdefault.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
              </div> */}
              {/* <!-- Item 2 --> */}
              <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                  <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
              </div>
              
          </div>
          {/* <!-- Slider controls --> */}
          <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                  <span className="sr-only">Previous</span>
              </span>
          </button>
          <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  <span className="sr-only">Next</span>
              </span>
          </button>
      </div>

    </div>
    {/* poster end */}

      
    </div>
 
    </>
  );
};

// export async function getServerSideProps() {
   
//     const response = await axios.get('http://localhost:3000/posters/showposters');
//     const data = await response.data;
  
// return { props: { data } }
// }