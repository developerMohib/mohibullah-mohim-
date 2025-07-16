import { Link } from "react-router-dom";
import useProjects from "../../hook/useProjects";
import { GoArrowUpRight, GoEye } from "react-icons/go";
import { FiGithub } from "react-icons/fi";

const AllProjects = () => {
    const { data: projects = [], isPending, isError, error } = useProjects();
    if (isPending) return <p>Loading projects...</p>;
    if (isError) return <p>Error: {error.message}</p>;
    return (
        <section>
            <div
                id="project"
                data-aos="fade-up"
                data-aos-duration="3000"
                className="md:grid grid-cols-3 gap-4 md:mt-14 py-5"
            >
                {projects?.map((work) => (
                    <div key={work._id} className="rounded overflow-hidden shadow-lg flex flex-col">

                        <div className="relative">
                            <Link to={`project-details/${work._id}`}>
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
                            <Link to={`project-details/${work._id}`} className="font-medium text-textColor text-lg hover:text-secColor transition duration-500 ease-in-out inline-block mb-2"> <span className="text-secColor" >Project Name :</span> {work.projectName}</Link>

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
                            <span className="py-1 text-xs font-regular text-textColor hover:text-secColor mr-1 flex flex-row items-center hover:-translate-x-1 group">
                                <GoEye className="text-base" />
                                <Link to={work.liveLink} target="_blank" className="ml-1 flex items-center">Live Link
                                    <GoArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" /></Link>
                            </span>
                            <span className="py-1 text-xs font-regular text-textColor hover:text-secColor mr-1 flex flex-row items-center hover:-translate-x-1 group">
                                <FiGithub className="text-base" />
                                <Link to={work.sourceCode} target="_blank" className="ml-1 flex items-center">
                                    Source Code
                                    <GoArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" /></Link>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllProjects;