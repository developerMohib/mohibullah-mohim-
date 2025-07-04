
import useReviews from '../../hook/useReviews';
import HeadingText from '../Reuseable/HeadingText';

const Reviews = () => {
    const { isPending, data: reviews = [] } = useReviews();
    if (isPending) return 'Loading...'

    return (
        <section className="md:mt-16">
            <HeadingText intro={"clients reviews"} mainTitle={"What say our"} highlightTitle={"clients"} mainDescription={"We’re proud to have earned the trust of businesses around the world. Here’s what some of them have to say about working with us."} highlightDescription={"Discover how our clients feel about partnering with us."} />
            <div className="container px-6 py-10 mx-auto">
                <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
                    {reviews?.map((item, idx) => (
                        <div
                            key={idx}
                            className={`p-6 md:p-8 ${idx % 2 === 1 ? "lg:border-l lg:border-borderPri" : ""
                                }`}
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