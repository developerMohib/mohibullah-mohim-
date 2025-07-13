import { FaLinkedin, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/devmohib.png";
import axiosInstance from "../../hook/useAxios"
import { toast } from "react-toastify";
const Footer = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    try {
      const response = await axiosInstance.post('/api/subscribe', { email });
      
      if (response?.data.success) {
        toast.success(response?.data.message);
        e.target.reset();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Subscription failed');
    }
  };


  return (
    <footer className="border-t border-borderPri">
      <div className="px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-textColor xl:text-2xl">
              Subscribe our newsletter to get update.
            </h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="px-4 py-2 text-textColor placeholder-gray-500 bg-placeholder border rounded-md focus:border-terColor focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-terColor"
                  placeholder="Email Address"
                />


                <button
                  type="submit" className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-textWhite hover:text-textBlack transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-secColor hover:bg-priColor rounded-lg focus:ring-1 focus:ring-priColor focus:ring-opacity-80">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div>
            <p className="font-semibold text-textColor">
              Quick Link
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link
                to="/"
                className="text-textColor transition-colors duration-300 hover:underline hover:text-secColor"
              >
                Home
              </Link>
              <Link
                to="/"
                className="text-textColor transition-colors duration-300 hover:underline hover:text-secColor"
              >
                Who We Are
              </Link>
              <Link
                to="/"
                className="text-textColor transition-colors duration-300 hover:underline hover:text-secColor"
              >
                Our Philosophy
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-textColor">
              Industries
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link
                to="/"
                className="text-textColor transition-colors duration-300 hover:underline hover:text-secColor"
              >
                Retail & E-Commerce
              </Link>
              <Link
                to="/"
                className="text-textColor transition-colors duration-300 hover:underline hover:text-secColor"
              >
                Information Technology
              </Link>
              <Link
                to="/"
                className="text-textColor transition-colors duration-300 hover:underline hover:text-secColor"
              >
                Finance & Insurance
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-6 border-borderPri md:my-8" />

        <div className="flex items-center justify-between  ">
          <Link to="/">
            <img
              className="w-auto h-7"
              src={logo}
              alt=""
            />
          </Link>

          <div className="flex items-center mr-3">
            <Link
              to="https://www.linkedin.com/in/mohibullah-mohim"
              target="_blank"
              className="mx-2 text-textColor transition-colors duration-300  hover:text-secColor "
            >
              {" "}
              <FaLinkedin className="text-xl hover:scale-125 duration-100" />{" "}
            </Link>
            <Link
              to="https://www.facebook.com/mohibullah.jubileean"
              target="_blank"
              className="mx-2 text-textColor transition-colors duration-300  hover:text-secColor "
            >
              {" "}
              <FaFacebook className="text-xl hover:scale-125 duration-100" />{" "}
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=100085612816681"
              target="_blank"
              className="mx-2 text-textColor transition-colors duration-300  hover:text-secColor "
            >
              {" "}
              <FaFacebook className="text-xl hover:scale-125 duration-100" />{" "}
            </Link>
            <Link
              to="https://twitter.com/Mohib333"
              target="_blank"
              className="mx-2 text-textColor transition-colors duration-300  hover:text-secColor "
            >
              {" "}
              <FaTwitter className="text-xl hover:scale-125 duration-100" />{" "}
            </Link>
            <Link
              to="https://github.com/developerMohib"
              target="_blank"
              className="mx-2 text-textColor transition-colors duration-300  hover:text-secColor "
            >
              {" "}
              <FaGithub className="text-xl hover:scale-125 duration-100" />{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="md:pb-5 pb-5 text-center">
        <p className="text-textColor" >&#129392; <code>All Right Reserved</code> &copy; <code>Mohibullah Mohim &#129392;</code></p>
      </div>
    </footer>
  );
};

export default Footer;
