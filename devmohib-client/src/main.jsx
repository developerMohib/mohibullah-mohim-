import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import AdminLogin from "./Pages/Admin/AdminLogin.jsx";
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient();
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
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
    </QueryClientProvider>
  </StrictMode>
);
