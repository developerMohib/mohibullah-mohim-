import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Preloader from "../Components/Preloader/Preloader";
import Home from "../Pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import CursorPointer from "../Components/Reuseable/CursorPointer";
AOS.init();

const Layout = () => {
  return (
    <div className="overflow-x:hidden bg-bgSecColor" >
      <CursorPointer />
      <Preloader />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Layout;
