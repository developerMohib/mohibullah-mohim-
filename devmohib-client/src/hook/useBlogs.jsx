import instance from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useBlogs = () => {
    const fetchBlogs = async () => {
        try {
            const response = await instance.get('/api/blogs');
            return response?.data.data || [];
        } catch (error) {
            console.error("Failed to fetch Blogs:", error);
            throw new Error("Failed to fetch Blogs. Please try again later.");
        }
    }

    const { data: blogs, isPending, error } = useQuery({
        queryKey: ['blogData'],
        queryFn: fetchBlogs,
        onError: (err) => {
            console.error('Error fetching reviews:', err);
        },
    })
    return { blogs, isPending, error }
};

export default useBlogs;