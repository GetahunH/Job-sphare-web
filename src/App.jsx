import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayOut from "./layoutes/MainLayOut";
import JobsPage from "./pages/JobsPage";
import PageNotFound from "./pages/PageNotFound"
import JobPage, {jobLoader} from "./pages/JobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayOut />}>
      
      <Route index element={<HomePage />}/>
      <Route path="/Jobs" element={<JobsPage />}/>
      <Route path="/Jobs/:id" element={<JobPage />} loader={jobLoader}/>
      <Route path="*" element={<PageNotFound />}/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;