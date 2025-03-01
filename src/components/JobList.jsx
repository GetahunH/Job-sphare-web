import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

const JobListing= ({job}) => {

  const [showFullDescrption,setShowFullDescription] = useState(false);//name of the state and the function
  
  let description = job.description;

  if(!showFullDescrption){
    description=description.substring(0,90) + "...";
  }
  return (
    <div key={job.id}>
    <div  className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
        <div className="mb-6">
          <div className="bg-gray-600 my-2 text-white ">{job.type}</div>
          <h2 className="text-xl font-bold">{job.title}</h2>
          <div className="mb-5">{description}</div>

         <button onClick={()=>setShowFullDescription((prevState)=>!prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">
          {showFullDescrption ? 'Less': 'More'}
         </button>

          <h3 className="text-indigo-500 mb-5">{job.salary}/Year</h3>
          <div className="flex flex-col lg:flex-row justify-between mb-4">
          
              <div className="text-orange-700 mb-3">
                  <FaMapMarker className="inline text-lg mb-1 mr-1"/>
                  {job.location}
              </div>

              <a href={`/job/${job.id}`} className="h-[36px] bg-indigo-500 hover:bg-indigo-600
                text-white px-2 py-2 rounded-lg text-center text-sm">
                    Read More
                </a>
        </div>
        </div>
    </div>

 </div>
    </div>
  )
}

export default JobListing;