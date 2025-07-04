import { useQuery } from '@tanstack/react-query';
import instance from './useAxios';

const fetchReviews = async () => {
    try {
        const response = await instance.get('/api/reviews');
        return response?.data.data || [];
    } catch (error) {
        console.error("Failed to fetch reviews:", error);
        throw new Error("Failed to fetch reviews. Please try again later.");
    }
};

const useReviews = () => {
    const {
        data: reviews = [],
        isPending,
        isError,
        error,
    } = useQuery({
        queryKey: ['reviewData'],
        queryFn: fetchReviews,
        onError: (err) => {
            console.error('Error fetching reviews:', err);
        },
    });

    return { reviews, isPending, isError, error };
};

export default useReviews;
