import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import "./becktop.css";
const BackToTop = () => {
  const [isactive, setIsactive] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    setIsactive(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`back-to-top text-center ${isactive ? "active" : ""}`}
      onClick={scrollToTop}
    >
      <button className="icon-style rounded-full p-5 animate-bounce border border-slate-500 hover:bg-orange-400">
        {" "}
        <FiArrowUp />{" "}
      </button>
    </div>
  );
};

export default BackToTop;
