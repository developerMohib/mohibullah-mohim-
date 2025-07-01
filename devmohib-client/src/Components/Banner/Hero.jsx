import { Typewriter } from "react-simple-typewriter";
import banner from "/mohibullah-mohim-hero.jpg";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
// import { NavHashLink } from "react-router-hash-link";
import { ImSpinner9 } from "react-icons/im";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Hero = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    try {
      // here code 
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Please wait for your network speed",
          showConfirmButton: false,
          timer: 1000
        });
      }, 5500);
    } catch (error) {
      console.log("error ", error)
      setLoading(false);
    }
  };

  return (
    <div
      id="home"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="center-bottom"
      className="flex items-center justify-center md:p-5"
    >
      <div className="grid md:grid-cols-5 grid-cols-1 items-center gap-10 md:px-10">
        <div className="md:col-span-3">
          <h1 className="mb-2 text-3xl font-bold">
            <span className="text-green-500">Hi, </span>I am Junior{" "}
            <br className="md:hidden" />
            <span className="text-red-700 font-bold">
              <Typewriter
                words={[
                  "MERN Stack Developer",
                  "Front End Developer",
                  "Web Developer",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          <p className="my-6 leading-7">
            I’m a dedicated front-end developer with a knack for creating
            dynamic and visually appealing web applications. With a strong
            foundation in HTML, CSS, JavaScript, and Next.js, I specialize in building responsive, user-friendly interfaces.
            <br />I thrive on turning design concepts into reality and continuously learning about new technologies to enhance user
            experience as a dedicated Frontend React Developer with a passion
            for transforming complex problems into intuitive user interfaces.
          </p>

          <div className="flex justify-center space-x-5">
            <Link
              to="/#contact"
              className="flex w-full items-center justify-center gap-1 rounded-2xl bg-rose-500 p-5 py-3 font-semibold text-white hover:bg-rose-700"
            >
              Hire Me <IoMdHeartEmpty className="h-6 w-6 animate-ping" aria-label="Heart icon" />
            </Link>


            <button
              onClick={handleDownload}
              className={`flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 p-5 py-3 font-semibold ${loading ? "cursor-not-allowed opacity-50" : "hover:bg-gray-300"
                }`}
              disabled={loading}
              aria-live="polite"
              aria-busy={loading}
            >
              {loading ? (
                <ImSpinner9 className="h-6 w-6 animate-spin-slow" aria-label="Loading spinner" />
              ) : (
                <>
                  Resume <FiDownload className="h-6 w-6 animate-bounce" aria-label="Download icon" />
                </>
              )}
            </button>
          </div>
        </div>

        <div className="md:col-span-2 mx-auto">
          <img
            src={banner}
            alt="Mohibullah Mohim"
            className="md:w-96 w-72 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
