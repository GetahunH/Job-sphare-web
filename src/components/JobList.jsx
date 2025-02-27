

const joblisting = ({job}) => {
  return (
    <div key={job.id}>
    <div  className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
        <div className="mb-6">
          <div className="bg-gray-600 my-2 text-white ">{job.type}</div>
          <h2 className="text-xl font-bold">{job.title}</h2>
          <div className="mb-5">{job.description}</div>
          <h3 className="text-indigo-500 mb-5">{job.salary}/Year</h3>
          <div className="flex flex-col lg:flex-row justify-between mb-4">
          {/* <hr className="border-t border-black-300 mb-4" /> */}

              <div className="text-orange-700 mb-3">
                  <i className="fa-solid fa-location-dot text-lg"></i>
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

export default joblisting;