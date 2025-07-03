import "./navbar.css";
import Swal from 'sweetalert2';
import { useEffect, useState } from "react";
import { HashRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import { BsUniversalAccessCircle } from "react-icons/bs";
import logo from "../../assets/devmohib.png";
import ThemeController from "../themeController/ThemeController";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false)
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBtn = () => {
    Swal.fire({
      icon: "info",
      title: "Oops...",
      text: "There has no special thing yet!",
    });
  };

  const navLinks = [
    { path: "/#home", label: "Home" },
    { path: "/#about", label: "Concerning Me" },
    { path: "/#project", label: "Showcase" },
    { path: "/#service", label: "Virtues" },
    { path: "/#contact", label: "Contact" },
  ];

  return (
    <nav className={`relative shadow top-0 ${isSticky ? "sticky-nav scrolled" : ""}`}>
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img className="w-auto h-6 sm:h-7" src={logo} alt="Logo" />
            </Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-textColor focus:outline-none"
                aria-label="toggle menu"
                aria-expanded={isOpen}
              >
                {!isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* desktop Menu */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
              }`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              {navLinks?.map((link, index) => (
                <HashLink className="px-3 py-2 mx-3 mt-2 text-textColor hover:border-b hover:border-priColor transition-colors duration-300 transform rounded-md lg:mt-0" key={index} smooth to={link.path}>
                  {link.label}
                </HashLink>
              ))}
            </div>

            <div className="flex items-center mt-4 lg:mt-0">
              <button
                onClick={handleBtn}
                className="hidden items-center mx-4 text-textColor transition-colors duration-300 transform lg:block focus:outline-none"
                aria-label="accessibility button"
              >
                <BsUniversalAccessCircle className="text-3xl" />
              </button>

              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-borderPri rounded-full">
                  <img
                    onClick={() => setDropDown(!dropDown)}
                    src="https://firebasestorage.googleapis.com/v0/b/learnup-ac759.appspot.com/o/1730812441346mohib-web.jpg?alt=media&token=72412aaa-a874-47c3-844b-990ed0ef02df"
                    className="object-cover w-full h-full"
                    alt="User profile picture"
                  />
                  {
                    dropDown && <div className="absolute right-0 top-[120%] px-3 py-2 shadow-lg rounded-md">
                      <p>About Admin</p>
                    </div>
                  }

                </div>

                <h3 className="mx-2 text-textColor lg:hidden">
                  Mohibullah Mohim
                </h3>
              </button>
              
              <ThemeController />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
