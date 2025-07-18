import { Typewriter } from "react-simple-typewriter";
import banner from "/mohibullah-mohim-hero.jpg";
import banner2 from "/ai-mohib-hero.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import { ImSpinner9 } from "react-icons/im";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Hero = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload =async () => {
    try {
      setLoading(true);
      // Replace with your Google Drive direct download link
      const driveLink = "https://drive.google.com/uc?export=download&id=1xDyOGbfvMuMbei_tR7ipN_V20NQLq2WQ";
      
      // Create a temporary anchor element to trigger the download
      const link = document.createElement("a");
      link.href = driveLink;
      link.download = "Resume.pdf"; // Optional: Set a default filename
      link.setAttribute("aria-label", "Download resume file");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Simulate network delay for user feedback
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setLoading(false);
      Swal.fire({
        icon: "success",
        title: "Download started!",
        text: "Please wait, depending on your network speed.",
        showConfirmButton: false,
        timer: 1500,
        background: document.documentElement.getAttribute("data-theme") === "dark" ? "#1f2937" : "#ffffff",
        color: document.documentElement.getAttribute("data-theme") === "dark" ? "#e5e7eb" : "#111827",
      });
    } catch (error) {
      console.error("Download error:", error);
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Download failed",
        text: "Please try again later.",
        showConfirmButton: true,
        confirmButtonColor: "var(--primary-color)",
      });
    }
  };

  return (
    <div
      id="home"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="center-bottom"
      className="flex items-center justify-center"
    >
      <div className="grid md:grid-cols-5 grid-cols-1 items-center gap-10 md:px-2 pt-10">
        <div className="md:col-span-3">
          <h1 className="mb-2 text-3xl font-bold text-textColor">
            <span className="text-priColor">Hi, </span >I am Junior{" "}
            <br className="md:hidden" />
            <span className="text-secColor font-bold">
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

          <p className="my-6 leading-7 text-textColor">
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
              className="flex w-full items-center justify-center gap-1 rounded-2xl bg-secColor p-5 py-3 font-semibold text-textWhite hover:bg-secColor"
            >
              Hire Me <IoMdHeartEmpty className="h-6 w-6 animate-ping" aria-label="Heart icon" />
            </Link>


            <button
              onClick={handleDownload}
              className={`flex w-full items-center justify-center gap-2 rounded-2xl bg-priColor p-5 py-3 font-semibold ${loading ? "cursor-not-allowed opacity-50" : "hover:bg-gray-300"
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

        <div className="md:col-span-2 mx-auto flex items-center">
          <img
            src={banner2}
            alt="Mohibullah Mohim"
            className="h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
