import instance from "../hook/useAxios";

export const fetchOneById = async (endpoint,id) => {
  const { data } = await instance.get(`/api/${endpoint}/${id}`);
  return data;
};