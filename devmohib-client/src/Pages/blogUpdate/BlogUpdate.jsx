import { useState } from 'react';
import useBlogs from '../../hook/useBlogs';
import { RxCross1 } from "react-icons/rx";
import { PiFilesThin } from "react-icons/pi";
import { MdDelete } from "react-icons/md";

const BlogUpdate = () => {
    const { data: blogs, isLoading, isPending, refetch } = useBlogs();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentBlog, setCurrentBlog] = useState(null);

    const handleEditBlog = (blog) => {
        setCurrentBlog(blog);
        setIsModalOpen(true);
    };

    if (isPending || isLoading) return "Loading...";
    console.log('blog', blogs)

    const handleBlogUpdateSubmit = async (e) => {
        e.preventDefault();
        const value = e.target;
        const title = value.title.value;
        const description = value.description.value;
        const details = value.details.value;
        // const image = image ;
        console.log({ title, description, details })
    }

    return (
        <section>
            <div className="w-full flex items-center justify-center min-h-full p-2">
                <div className="container max-w-6xl">
                    <article className="rounded-xl shadow-md overflow-hidden">
                        {/* Header */}
                        <header className="p-6 border-b border-gray-200">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">My Write</h2>
                                    <p className="text-gray-500 mt-1">Manage Blogs and their account permissions here.</p>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out">
                                        Add Blog
                                    </button>
                                </div>
                            </div>

                            {/* Search and Filter */}
                            <div className="mt-6 flex flex-col sm:flex-row gap-4">
                                <div className="relative flex-grow">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                                        </svg>
                                    </div>
                                    <input type="text" placeholder="Search members..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full" />
                                </div>
                                <div>
                                    <select className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto">
                                        <option value="">All Departments</option>
                                        <option value="engineering">Engineering</option>
                                        <option value="design">Design</option>
                                        <option value="marketing">Marketing</option>
                                        <option value="sales">Sales</option>
                                    </select>
                                </div>
                            </div>
                        </header>

                        {/* Table */}
                        <main className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {blogs && blogs.length > 0 ? (
                                        blogs.map(blog => (
                                            <tr key={blog._id} className="hover:bg-gray-50 transition-colors duration-150">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <img src={blog.image} alt="feature-image" className="h-10 w-10 rounded-full object-cover" />
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{blog.category}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button
                                                        onClick={() => handleEditBlog(blog)}
                                                        className="text-indigo-600 hover:text-indigo-900 mr-3"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button className="text-red-600 hover:text-red-900">Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3" className="px-6 py-4 text-center">
                                                <p className="text-gray-500">No Blogs yet</p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </main>

                        {/* Footer */}
                        <footer className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
                            <div className="flex items-center justify-between flex-col sm:flex-row">
                                <p className="text-sm text-gray-700 mb-4 sm:mb-0">
                                    Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">24</span> results
                                </p>
                                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                    <a href="#" className="px-2 py-2 rounded-l-md border bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                        <span className="sr-only">Previous</span>
                                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
                                        </svg>
                                    </a>
                                    {[1, 2, 3].map((page) => (
                                        <a key={page} href="#" className={`px-4 py-2 border text-sm font-medium ${page === 1 ? 'bg-indigo-50 text-indigo-600' : 'bg-white text-gray-700'} hover:bg-indigo-100`}>
                                            {page}
                                        </a>
                                    ))}
                                    <span className="px-4 py-2 border text-sm font-medium text-gray-700">...</span>
                                    <a href="#" className="px-4 py-2 border text-sm font-medium text-gray-700 hover:bg-gray-50">8</a>
                                    <a href="#" className="px-4 py-2 border text-sm font-medium text-gray-700 hover:bg-gray-50">9</a>
                                    <a href="#" className="px-2 py-2 rounded-r-md border bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                        <span className="sr-only">Next</span>
                                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                                        </svg>
                                    </a>
                                </nav>
                            </div>
                        </footer>
                    </article>
                </div>
            </div>

            {/* Edit Modal */}
            {isModalOpen && (
                <div className="w-full h-screen fixed top-0 left-0 z-[200000000] dark:bg-black/40 bg-[#0000002a] transition-all duration-300 flex items-center justify-center">
                    <div className="w-[90%] sm:w-[80%] md:w-[60%] dark:bg-slate-800 bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8 scale-100 opacity-100">
                        <div className="w-full flex items-end p-4 justify-between border-b dark:border-slate-700 border-[#d1d1d1]">
                            <h1 className="text-[1.5rem] dark:text-[#abc2d3] font-bold">
                                Edit Blog
                            </h1>
                            <RxCross1
                                className="p-2 text-[2.5rem] dark:text-[#abc2d3]/70 dark:hover:bg-slate-900/50 hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                                onClick={() => setIsModalOpen(false)}
                            />
                        </div>

                        <form onSubmit={handleBlogUpdateSubmit} className="flex flex-col gap-5 p-4">
                            <div>
                                <label
                                    htmlFor="title"
                                    className="text-[1rem] dark:text-[#abc2d3] font-[500] text-[#464646]"
                                >
                                    Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    defaultValue={currentBlog?.title || ''}
                                    placeholder="Blog title"
                                    className="py-2 px-3 border dark:border-slate-700 dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-[#abc2d3] border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="description"
                                    className="text-[1rem] dark:text-[#abc2d3] font-[500] text-[#464646]"
                                >
                                    Description
                                </label>
                                <input
                                    type="text"
                                    name="description"
                                    id="description"
                                    defaultValue={currentBlog?.description || ''}
                                    placeholder="Blog title"
                                    className="py-2 px-3 border dark:border-slate-700 dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-[#abc2d3] border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="details"
                                    className="dark:text-[#abc2d3] text-[15px] text-text"
                                >
                                    Details <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    type="textarea"
                                    name="details"
                                    id="details"
                                    defaultValue={currentBlog?.details || ''}
                                    placeholder="Blog details"
                                    className="border-border dark:bg-slate-900 dark:border-slate-700 dark:text-[#abc2d3] dark:placeholder:text-slate-500 border rounded-md outline-none mt-1 px-4 w-full py-3 min-h-[200px] focus:border-primary transition-colors duration-300"
                                />
                            </div>
                            <button
                                type="submit"
                                className="py-2 px-4 w-full bg-[#3B9DF8] text-[#fff] rounded-md"
                            >
                                Update Blog
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default BlogUpdate;