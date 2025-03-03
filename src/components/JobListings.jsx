import {useState, useEffect} from "react";
import JobListing from "./JobList";
import Spinner from "./Spinner";



const JobListings = ({ isHome = false }) =>{
   const [jobs, setJobs] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
    const fetchJobs = async () =>{
        const apiUrl = isHome ? 'api/jobs?_limit=3' : 'api/jobs'
        try{
           const res = await fetch(apiUrl);
           const data = await res.json();
           setJobs(data);
        }catch (error){
            console.log('Error fetching data',error);
        }finally{
            setLoading(false);
        }
    }

    fetchJobs();
},[]);

   
    return (
        <section className="bg-  px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recent Jobs' : 'Browse Jobs'}
                </h2>
            
                {loading ? (
                    <div className="flex justify-center items-center min-h-[200px]">
                       <Spinner loading={loading}/> 
                    </div>
                ):(
                    
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job)=>(
                 <JobListing key={job.id} job={job}/>
                ))}
                </div>
            )}
                
            </div>
            
        </section>
    )
}
export default JobListings;



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@  To bring job from the jobs.json easly @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2222222
// import JobListing from "./JobList";
// import jobs from "../jobs.json";

// const JobListings = ({ isHome = false }) =>{
//     const jobListings = isHome ? jobs.slice(0,3): jobs;
//     return (
//         <section className="bg-  px-4 py-10">
//             <div className="container-xl lg:container m-auto">
//                 <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
//                     {isHome ? 'Recent Jobs' : 'Browse Jobs'}
//                 </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {jobListings.map((job)=>(
//                  <JobListing key={job.id} job={job}/>
//                 ))}
//             </div>
//             </div>
//         </section>
//     )
// }
// export default JobListings;
