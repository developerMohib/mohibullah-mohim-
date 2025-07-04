
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchOneById } from '../../utils/fetchOne';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading } = useQuery({
        queryKey: ['blog', id],
        queryFn: () => fetchOneById('details', id),
        enabled: !!id,
    });
    if (isLoading) return "Loading..."

    const { title, image, details } = blog?.data;
    return (
        <main className="container mx-auto px-6 py-4">
            <div className="md:grid grid-cols-3">
                <div className="col-span-2 px-4 mb-8">
                    <img src={image} alt="Featured Image" className="w-full h-64 object-cover rounded" />
                    <h2 className="text-2xl font-bold mt-4 mb-2 text-textColor "> {title} </h2>
                    <p className="text-textColor mb-4"> <span className='text-secColor'>Details :</span> {details} </p>
                    <p className="text-textColor mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.</p>
                    <p className="text-textColor mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo.</p>


                    <div className="w-full md:mx-auto flex flex-col md:flex-row items-center justify-start text-center">
                        <img className="inline-flex object-cover border-2 border-terColor rounded-full shadow-[2px_2px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 bg-bgSecColor !h-10 !w-10 mb-4 md:mb-0 ml-0 md:mr-5" src={blog?.data.author.image} alt="author" />
                        <div className="flex flex-col">
                            <div className="md:text-justify">
                                <div className="flex flex-col">
                                    <p className="text-textColor font-bold text-xl">
                                        {blog?.data.author.name}
                                    </p>
                                </div>
                                <p className="text-secColor font-semibold text-center md:text-left">
                                    {blog?.data.author.role}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center mt-10">
                        <div className="h-80 px-7 w-full rounded-lg bg-bgSecColor p-4 shadow-md border">
                            <p className="text-xl font-semibold text-textColor cursor-pointer transition-all">
                                Add Comment
                            </p>
                            <textarea className="h-40 px-3 text-sm py-1 mt-5 outline-none border-borderPri w-full resize-none border rounded-lg placeholder:text-sm" placeholder="Add your comments here" defaultValue={""} />
                            <div className="flex justify-between mt-2">
                                <p className="text-sm text-textColor ">Enter atleast 15 characters</p>
                                <button className="h-12 w-[150px] bg-terColor text-sm text-textWhite rounded-lg transition-all cursor-pointer hover:bg-blue-600">
                                    Submit comment
                                </button>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="col-span-1 px-4 mb-8">
                    <div className="bg-gray-100 px-4 py-6 rounded">
                        <h3 className="text-lg font-bold mb-2">Categories</h3>
                        <ul className="list-disc list-inside">
                            <li><a href="#" className="text-textColor hover:text-gray-900">Technology</a></li>
                            <li><a href="#" className="text-textColor hover:text-gray-900">Travel</a></li>
                            <li><a href="#" className="text-textColor hover:text-gray-900">Food</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BlogDetails;