import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Preloader from "../Components/Preloader/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
import CursorPointer from "../Components/Reuseable/CursorPointer";
import { Outlet } from "react-router-dom";
AOS.init();

const Layout = () => {
  return (
    <div className="overflow-x:hidden bg-bgSecColor" >
      <CursorPointer />
      {/* <Preloader /> */}
      <Navbar />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
