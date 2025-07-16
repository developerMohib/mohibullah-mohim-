import useProjects from "../../hook/useProjects";

const ProjectsUpdate = () => {
    const { data: projects = [], isPending, isError, error } = useProjects();
    if (isPending) return <p>Loading projects...</p>;
    if (isError) return <p>Error: {error.message}</p>;
    return (
        <section>
            <div className="w-full flex items-center justify-center min-h-full p-2">
                <div className="container max-w-6xl">
                    <div className="rounded-xl shadow-md overflow-hidden">
                        {/* Table Header */}
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h2 className="text-xl font-bold text-textColor">My Projects</h2>
                                    <p className="text-textColor mt-1">Manage all Projects and their permissions here.</p>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <button className="bg-priColor hover:bg-terColor text-textColor font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out">
                                        Add Projects
                                    </button>
                                </div>
                            </div>
                            {/* Search and Filter */}
                            <div className="mt-6 flex flex-col sm:flex-row gap-4">
                                <div className="relative flex-grow">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full text-placeholder" placeholder="Search projects..." />
                                </div>
                                <div>
                                    <select className="border border-gray-300 rounded-lg px-4 py-2  w-full sm:w-auto">
                                        <option value>All Projects</option>
                                        <option value="engineering">Engineering</option>
                                        <option value="design">Design</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="sales">Sales</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-textColor uppercase tracking-wider">
                                            Project Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-textColor uppercase tracking-wider">
                                            Last Update
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-textColor uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-textColor uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {projects?.length > 0 ? (
                                        projects?.map((project) => (
                                            <tr
                                                key={project.id}
                                                className="hover:bg-gray-50 transition duration-150"
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <img
                                                            className="h-10 w-10 rounded-full object-cover"
                                                            src={project.image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                                                            alt={project.projectName}
                                                        />
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {project.projectName}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-900">
                                                    {new Date(project.completionDate).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-900">
                                                    project category
                                                </td>
                                                <td className="px-6 py-4 text-right text-sm font-medium">
                                                    <a
                                                        href="#"
                                                        className="text-indigo-600 hover:text-indigo-900 mr-3"
                                                    >
                                                        Edit
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        Delete
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan={5}
                                                className="px-6 py-4 text-center text-textColor"
                                            >
                                                No projects found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        {/* Pagination */}
                        <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
                            <div className="flex items-center justify-between flex-col sm:flex-row">
                                <div className="mb-4 sm:mb-0">
                                    <p className="text-sm text-gray-700">
                                        Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">24</span> results
                                    </p>
                                </div>
                                <div>
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-textColor hover:bg-gray-50">
                                            <span className="sr-only">Previous</span>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-indigo-50 text-sm font-medium text-indigo-600 hover:bg-indigo-100">
                                            1
                                        </a>
                                        <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                            2
                                        </a>
                                        <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                            3
                                        </a>
                                        <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                                            ...
                                        </span>
                                        <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                            8
                                        </a>
                                        <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                            9
                                        </a>
                                        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-textColor hover:bg-gray-50">
                                            <span className="sr-only">Next</span>
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsUpdate;