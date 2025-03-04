import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayOut from "./layoutes/MainLayOut";
import JobsPage from "./pages/JobsPage";
import PageNotFound from "./pages/PageNotFound"
import JobPage, {jobLoader} from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";



const App = () => {
  //Add new job
  const addJob = async (newJob) =>{
    const res = await fetch('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(newJob),
    });
    return;
  };
  //Delete job
  const deleteJob =async (id) =>{
    const res = await fetch(`/api/jobs/${id}`,{
      method:'DELETE',
    });
    return;
  }
  //Update job
  const updateJob = async (job) =>{
    const res = await fetch(`/api/jobs/${job.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(job),
    });
    return;
  };


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayOut />}>
        
        <Route index element={<HomePage />}/>
        <Route path="/Jobs" element={<JobsPage />}/>
        <Route path="/add-Job" element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route path="/Jobs/:id" element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
        <Route path="/edit-Job/:id" element={<EditJobPage UpdateJobSubmit={updateJob}/>} loader={jobLoader}/>
        <Route path="*" element={<PageNotFound />}/>
      </Route>
    )
  );
  


  return <RouterProvider router={router} />;
};

export default App;