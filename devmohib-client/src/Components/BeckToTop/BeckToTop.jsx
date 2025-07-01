import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import "./becktop.css";
const BackToTop = () => {
  const [myActive, setMyActive] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    setMyActive(scrolled > 300);
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
      className={`back-to-top text-center ${myActive ? "active" : ""}`}
      onClick={scrollToTop}
    >
      <button className="icon-style rounded-full p-3 animate-bounce border border-slate-500 hover:bg-orange-400">
        {" "}
        <FiArrowUp />{" "}
      </button>
    </div>
  );
};

export default BackToTop;
