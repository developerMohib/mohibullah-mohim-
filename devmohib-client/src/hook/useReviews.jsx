import useFetch from "../utils/useFetch";

const useReviews = () => {
    return useFetch('/api/reviews', 'reviewData');
};
export default useReviews;
