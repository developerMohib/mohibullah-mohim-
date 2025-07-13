import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import AdminLogin from "./Pages/Admin/AdminLogin.jsx";
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import BlogDetails from "./Pages/blogDtails/BlogDetails.jsx";
import Home from "./Pages/Home/Home.jsx";
import AllProjects from "./Pages/allProjects/AllProjects.jsx";
import ProjectsDetails from "./Pages/projectDetails/ProjectsDetails.jsx";
import AdminDashboard from "./Pages/Admin/AdminDashboard.jsx";
import ProtectedRoute from "./Layout/ProtectedRoute.jsx";
import BlogUpdate from "./Pages/blogUpdate/BlogUpdate.jsx";
import ProjectsUpdate from "./Pages/projectsUpdate/ProjectsUpdate.jsx";
import Dashboard from "./Pages/dashboard/Dashboard.jsx";
import Subscriber from "./Pages/subscriber/Subscriber.jsx";

const queryClient = new QueryClient();
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [

        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/all-projects",
          element: <AllProjects />,
        },
        {
          path: "/details/:id",
          element: <BlogDetails />,
        },
        {
          path: "/project-details/:id",
          element: <ProjectsDetails />,
        },
      ]
    },
    {
      path: "admin-login",
      element: <AdminLogin />,
    },
    {
      path: "admin",
      element: <ProtectedRoute><AdminDashboard /></ProtectedRoute>,
      children: [
        // Other protected admin routes can go here
        {
          index:true ,
          element: <Dashboard/>,
        },
        {
          path:"blog-update",
          element: <BlogUpdate/>,
        },
        {
          path: "projects-update",
          element: <ProjectsUpdate/>,
        },
        {
          path: "subscriber",
          element:<Subscriber/>,
        }
      ]
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
       <ToastContainer />
    </QueryClientProvider>
  </StrictMode>
);
