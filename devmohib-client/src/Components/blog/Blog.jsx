import React from 'react';
import HeadingText from '../Reuseable/HeadingText';
const blogPosts = [
    {
        title: "What do you want to know about UI",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore",
        author: {
            name: "Tom Hank",
            role: "Creative Director",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        },
        image: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        link: "#"
    },
    {
        title: "All the features you want to know",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore",
        author: {
            name: "arthur melo",
            role: "Creative Director",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
        },
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        link: "#"
    },
    {
        title: "Which services you get from Meraki UI",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores praesentium, alias nam? Tempore",
        author: {
            name: "Amelia. Anderson",
            role: "Lead Developer",
            image: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
        },
        image: "https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80",
        link: "#"
    }
];

const Blog = () => {
    return (
        <section className='md:my-10' >
            <HeadingText mainTitle={"My latest "} highlightTitle={"Blogs"} mainDescription={"Here i share my"} highlightDescription={"challenging part"} />
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
                {blogPosts?.map((post, index) => (
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