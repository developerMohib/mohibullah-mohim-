import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { fetchOneById } from "../../utils/fetchOne";

const ProjectsDetails = () => {
    const { id } = useParams();
    const { data: project = [], isLoading } = useQuery({
        queryKey: ['project', id],
        queryFn: () => fetchOneById('project-details', id),
        enabled: !!id,
    });
    if (isLoading) return "Loading...";


    const { highlight, about, challengingPart, completionDate, features, goal, image, liveLink, perspective, projectName, sourceCode, tags, techStack } = project?.data;

    return (
        <section>
            <div className="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1> {projectName} </h1>
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight text-textColor">{highlight}</h1>
                    <p className="max-w-2xl mb-6 font-light text-textColor lg:mb-8 md:text-lg lg:text-xl"> <span className="text-secColor underline">Perspective : </span>{perspective}
                    </p>
                    <p className="max-w-2xl mb-6 font-light text-textColor lg:mb-8 md:text-lg lg:text-xl"> <span className="text-secColor underline">About : </span>{about}
                    </p>
                    <p className="max-w-2xl mb-6 font-light text-textColor lg:mb-8 md:text-lg lg:text-xl">  <span className="text-secColor underline">Challenging Part : </span> {challengingPart}
                    </p>
                    <p className="max-w-2xl mb-6 font-light text-textColor lg:mb-8 md:text-lg lg:text-xl"><span className="text-secColor underline">Target : </span>{goal}
                    </p>

                    <div className="mb-5">
                        <span className="text-secColor underline">Features : </span>  {features.map((feature, idx) => (<ul key={idx} > <li> {idx + 1}. {feature} </li> </ul>))}
                    </div>

                    <div>
                        <p> <span className="text-secColor underline">Completion Date : </span>  {completionDate} </p>
                    </div>

                    <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-5">
                        <Link to={sourceCode} target="_blank" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-textColor hover:text-textBlack border border-borderPri rounded-lg sm:w-auto hover:bg-priColor focus:ring-4 focus:ring-textWhite ">
                            <svg className="w-4 h-4 mr-2 text-textBlack" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                                </path>
                            </svg> View on GitHub
                        </Link>
                        <Link to={liveLink} target="_blank" className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium dark:text-textWhite bg-bgPriColor border border-borderPri rounded-lg sm:w-auto hover:bg-priColor">
                            <svg className="w-4 h-4 mr-2 text-textBlack" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                                </path>
                            </svg>
                            VIew Live Link
                        </Link>
                    </div>

                    <div className="mt-5">
                        <span className="text-secColor underline">Tech : </span>  {techStack.map((tech, idx) => (<ul key={idx} > <li> {tech} </li> </ul>))}
                    </div>

                    <div className="mt-5">
                        <span className="text-secColor underline">Tags : </span>  {tags.map((tag, idx) => (<ul key={idx} > <li> {tag} </li> </ul>))}
                    </div>
                </div>

                <div className="lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="https://demo.themesberg.com/landwind/images/hero.png" alt="hero image" />
                </div>
            </div>
        </section>

    );
};


export default ProjectsDetails;