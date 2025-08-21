import useFetch from '../utils/useFetch';

const useGithubCommit = () => {
    return useFetch('/api/contributions', 'developerMohib');
};

export default useGithubCommit;