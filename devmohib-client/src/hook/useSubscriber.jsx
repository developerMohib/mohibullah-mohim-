import useFetch from '../utils/useFetch';

const useSubscriber = () => {
    return useFetch("/api/subscriber","subscriber")
};

export default useSubscriber;