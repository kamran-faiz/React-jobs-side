import React from "react";
import {Route,
   createBrowserRouter ,
    RouterProvider,
     createRoutesFromElements
    } from "react-router-dom";
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';
import AddJobPage from './pages/AddJobPage';
import JobPage, {jobLoader} from './pages/JobPage';
import EditJobPage from './pages/EditJobPage';




const App = () => {
  // Add new job
  const addJob =async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return;
  
};
  // delete job

  const deleteJob = async(id) => {
      const res = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
        
      });
      return;
  };
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<MainLayout/>}>
  <Route index element={<HomePage/>}/>
  <Route path="jobs" element={<JobsPage />} />
  <Route path="add-job" element={<AddJobPage  addJobSubmit={addJob}/>} />
   <Route path="jobs/:id" element={<JobPage  deleteJob={deleteJob}/>} loader={jobLoader}/>
   <Route path="edit-job/:id" element={<EditJobPage  />} loader={jobLoader}/>
  <Route path="*" element={<NotFound />} />
 
  </Route>
  )
);

  return <RouterProvider router={router} />
};

export default App;
