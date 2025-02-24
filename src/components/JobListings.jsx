import jobs from "../jobs.json";

const JobListings = () =>{
    console.log(jobs);
    return (
        <section className="bg-  px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Brows Jobs
                </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job)=>(
                  <>

                    <div className="bg-white rounded-xl shadow-md relative">
                        <div className="p-4">
                        <div className="mb-6">
                          <div className="bg-gray-600 my-2">{job.type}</div>
                          <h2 className="text-xl font-bold">{job.title}</h2>
                        </div>
                        </div>
                    </div>
                    </>
                ))}
            </div>
            </div>
        </section>
    )
}
export default JobListings;
