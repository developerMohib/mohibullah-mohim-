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
import ProjectDetails from "./Pages/projectDetails/projectDetails.jsx";

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
          element: <ProjectDetails />,
        },
      ]
    },
    {
      path: "admin-login",
      element: <AdminLogin />,
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
