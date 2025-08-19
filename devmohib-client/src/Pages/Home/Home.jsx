import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Hero from "../../Components/Banner/Hero";
import BeckToTop from "../../Components/BeckToTop/BeckToTop";
import Blog from "../../Components/blog/Blog";
import Contact from "../../Components/Contact/Contact";
import Resume from "../../Components/Resume/Resume";
import Reviews from "../../Components/reviews/Reviews";
import Service from "../../Components/Service/Service";
import Githubimplement from "../../Feature/githubImplement/Githubimplement";

const Home = () => {
  // TO DO => Hire me button make clickable

  return (
    <div className="mx-auto px-6 py-4">
      <Hero />
      <Banner />
      <About />
      <Resume />
      <Service />
      <Blog />
      <Reviews />
      <Githubimplement />
      <Contact />
      <BeckToTop />
    </div>
  );
};

export default Home;
