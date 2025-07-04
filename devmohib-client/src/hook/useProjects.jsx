import useFetch from "../utils/useFetch";

const useProjects = () => {
  return useFetch('/api/projects', 'projectData');
};
export default useProjects;
