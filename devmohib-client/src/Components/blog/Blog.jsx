import React from 'react';
import HeadingText from '../Reuseable/HeadingText';
import useBlogs from '../../hook/useBlogs';
import { Link } from 'react-router-dom';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';


const Blog = () => {
    const { data : blogs = [ ], isPending, error } = useBlogs();
    if (isPending) return 'Loading...'
    if (error) return <ErrorPage />
    return (
        <section className='md:my-14' >
            <HeadingText mainTitle={"My latest "} highlightTitle={"Blogs"} mainDescription={"create content to share knowledge, tell stories, or promote ideas on a specific topic."} highlightDescription={"about engaging, informative, or entertaining"} intro={"Here i share my challenging part"} />
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-3">
                {blogs?.map((post, index) => (
                    <div key={index} className='border border-borderPri rounded-b-md'>
                        <div className="relative">
                            <span className='absolute top-0 right-0 text-textColor p-1 bg-bgSecColor'>Category</span>

                            <Link to={`details/${post._id}`}><img className="object-cover object-center w-full h-64 lg:h-80" src={post.image} alt={post.title} />
                            </Link>


                            <div className="absolute bottom-0 flex p-3 bg-terColor">
                                <img className="object-cover object-center w-10 h-10 rounded-full" src={post.author.image} alt={post.author.name} />
                                <div className="mx-4">
                                    <h1 className="text-sm text-textBlack">{post.author.name}</h1>
                                    <p className="text-sm text-textBlack">{post.author.role}</p>
                                </div>
                            </div>
                        </div>
                        <div className='px-5 pb-5'>
                            <Link to={`details/${post._id}`}>
                                <h1 className="mt-6 text-xl font-semibold text-textColor hover:text-secColor transition-all">{post.title}</h1>
                            </Link>
                            <hr className="w-32 my-6" />
                            <p className="text-sm text-textColor">{post.description}</p>
                            <Link to={`details/${post._id}`} className="inline-block mt-4 text-terColor hover:text-secColor underline">Read more</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default Blog;