import React from 'react';
import HeadingText from '../Reuseable/HeadingText';
import useBlogs from '../../hook/useBlogs';


const Blog = () => {
    const { blogs, isPending, error } = useBlogs();

    if (isPending) return 'Loading...'

    return (
        <section className='md:my-10' >
            <HeadingText mainTitle={"My latest "} highlightTitle={"Blogs"} mainDescription={"Here i share my"} highlightDescription={"challenging part"} />
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
                {blogs?.map((post, index) => (
                    <div key={index}>
                        <div className="relative">
                            <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={post.image} alt={post.title} />
                            <div className="absolute bottom-0 flex p-3 bg-terColor">
                                <img className="object-cover object-center w-10 h-10 rounded-full" src={post.author.image} alt={post.author.name} />
                                <div className="mx-4">
                                    <h1 className="text-sm text-textBlack">{post.author.name}</h1>
                                    <p className="text-sm text-textBlack">{post.author.role}</p>
                                </div>
                            </div>
                        </div>
                        <h1 className="mt-6 text-xl font-semibold text-textColor">{post.title}</h1>
                        <hr className="w-32 my-6" />
                        <p className="text-sm text-textColor">{post.description}</p>
                        <a href={post.link} className="inline-block mt-4 text-terColor underline">Read more</a>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default Blog;