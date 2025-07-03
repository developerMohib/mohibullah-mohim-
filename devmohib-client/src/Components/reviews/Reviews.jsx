import HeadingText from '../Reuseable/HeadingText';
const data =
    [
        {
            "quote": "We had a complex project with tight deadlines, and they handled it brilliantly. Communication was always clear, the work was delivered ahead of schedule, and the final product was even better than we imagined. We’re excited to continue working together.",
            "image": "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            "name": "Robbert",
            "position": "CTO, Robert Consultency"
        },
        {
            "quote": "I’ve worked with many professionals over the years, and this team stands out for their dedication and passion. They took the time to understand our goals and delivered a solution that not only met but exceeded our expectations. Truly impressive.",
            "image": "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "name": "Mia Brown",
            "position": "Marketing Manager at Stech"
        }
    ]

const Reviews = () => {
    return (
        <section className="mt-10">
            <HeadingText mainTitle={"What say our"} highlightTitle={"clients"} mainDescription={"We’re proud to have earned the trust of businesses around the world. Here’s what some of them have to say about working with us."} highlightDescription={"Discover how our clients feel about partnering with us."} />
            <div className="container px-6 py-10 mx-auto"> 
                <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
                    {data?.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-6 md:p-8"
                        >
                            <p className="leading-loose text-textColor">
                                “{item.quote}”
                            </p>
                            <div className="flex items-center mt-6 cursor-pointer">
                                <img
                                    className="object-cover rounded-full w-14 h-14"
                                    src={item.image}
                                    alt={item.name}
                                />
                                <div className="mx-4">
                                    <h1 className="font-semibold text-terColor hover:text-secColor">
                                        {item.name}
                                    </h1>
                                    <span className="text-sm text-textColor">
                                        {item.position}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;