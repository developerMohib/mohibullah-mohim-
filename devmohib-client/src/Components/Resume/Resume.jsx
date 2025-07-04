import { Link } from "react-router-dom";
import HeadingText from "../Reuseable/HeadingText";
import useProjects from "../../hook/useProjects";

const Resume = () => {
  const { data: projects = [], isPending, isError, error } = useProjects();
  if (isPending) return <p>Loading projects...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <section>
      <HeadingText mainTitle="My Recent" highlightTitle="Projects" mainDescription="Presenting a curated selection of my " highlightDescription="latest projects, crafted to impress and inspire both you and your potential clients" intro={"Be the first to know when I am mastering"} />
      <div
        id="project"
        data-aos="fade-up"
        data-aos-duration="3000"
        className="md:grid grid-cols-3 gap-4 md:mt-14"
      >
        {projects?.slice(0, 3).map((work, index) => (
          <div key={index} className="rounded overflow-hidden shadow-lg flex flex-col">

            <div className="relative">
              <Link to="/">
                <img className="w-full" src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Sunset in the mountains" />
                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-textBlack opacity-25">
                </div>
              </Link>

              <Link to="/">
                <div className="text-xs absolute top-0 right-0 bg-terColor px-4 py-2 text-textWhite mt-3 mr-3 hover:bg-textWhite hover:text-terColor transition duration-500 ease-in-out">
                  work.Category
                </div>
              </Link>
            </div>
            <div className="px-6 py-4 mb-auto">
              <Link to="/" className="font-medium text-textColor text-lg hover:text-secColor transition duration-500 ease-in-out inline-block mb-2"> <span className="text-secColor" >Project Name :</span> {work.projectName}</Link>

              <p className="font-medium text-textColor inline-block mb-2">
                highlight: {work.highlight}
              </p>
              <p className="text-textColor text-sm">
                <span className="text-secColor" >Perpesctive :</span> {work.perspective}
              </p>
            </div>

            <div className="px-6 py-4">
              <button className="py-1 text-xs font-regular text-textColor mr-1 flex flex-row items-center">
                <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                  </path>
                </svg>
                <Link to={`project-details/${work._id}`} className="ml-1 text-textColor hover:text-secColor"> Views Details</Link>
              </button>

            </div>
            <div className="px-6 py-3 flex flex-row items-center justify-between bg-textWhite dark:opacity-50">
              <span className="py-1 text-xs font-regular text-textColor mr-1 flex flex-row items-center">
                <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                  <g>
                    <g>
                      <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                      </path>
                    </g>
                  </g>
                </svg>
                <Link to={work.liveLink} target="_blank" className="ml-1 text-textColor hover:text-secColor">Live Link</Link>
              </span>
              <span className="py-1 text-xs font-regular text-textColor mr-1 flex flex-row items-center">
                <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                  </path>
                </svg>
                <Link to={work.sourceCode} target="_blank" className="ml-1 text-textColor hover:text-secColor"> Source Code</Link>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10 ">
        <Link to="/all-projects" > <span className="border border-borderPri hover:bg-secColor hover:translate-y-1 p-2 rounded-md "> All Projects </span> </Link>
      </div>
    </section>
  );
};

export default Resume;
