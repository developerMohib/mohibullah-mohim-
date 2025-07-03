import React from 'react';
import HeadingText from '../Reuseable/HeadingText';
const blogPosts = [
    {
        title: "Next.js Rendering Techniques: How to Optimize Page Speed",
        description: "Dive deep into server‑side rendering, code‑splitting, and smart caching strategies to boost performance and SEO in React/Next.js apps.",
        details: "Dive deep into server‑side rendering, code‑splitting, and smart caching strategies to boost performance and SEO in React/Next.js apps. Dive deep into server‑side rendering, code‑splitting, and smart caching strategies to boost performance and SEO in React/Next.js apps.",
        author: {
            name: "Subhakar Tikkireddy",
            role: "Frontend Developer, Toptal",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" // replace with real URL
        },
        image: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        link: "https://www.toptal.com/developers/blog/nextjs-rendering-techniques"
    },
    {
        title: "WordPress‑powered Angular: JWT Authentication Using GraphQL",
        description: "Combine WordPress systems with modern Angular apps using GraphQL and JWT for secure, scalable integrations.",
        details: "Combine WordPress systems with modern Angular apps using GraphQL and JWT for secure, scalable integrations. Combine WordPress systems with modern Angular apps using GraphQL and JWT for secure, scalable integrations.",
        author: {
            name: "Tarek Mohamed Mehrez",
            role: "Software Engineer, Toptal",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
        },
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
        link: "https://www.toptal.com/developers/blog/wordpress-angular-jwt-graphql"
    },
    {
        title: "Reusable State Management With RxJS, React, and Custom Libraries",
        description: "A practical guide for architecting shared state using RxJS and React—building modular, reactive UI effectively.",
        details: "A practical guide for architecting shared state using RxJS and React—building modular, reactive UI effectively. A practical guide for architecting shared state using RxJS and React—building modular, reactive UI effectively.",
        author: {
            name: "Mark Evans",
            role: "Full‑Stack Engineer, Toptal",
            image: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
        },
        image: "https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80",
        link: "https://www.toptal.com/developers/blog/rxjs-react-state-management"
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