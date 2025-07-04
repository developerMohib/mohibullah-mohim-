import useFetch from '../utils/useFetch';

const useBlogs = () => {
    return useFetch('/api/blogs', 'blogData');
};
export default useBlogs;