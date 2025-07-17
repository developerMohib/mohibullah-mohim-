import instance from "../hook/useAxios";

export const fetchOneById = async (endpoint,id) => {
  const { data } = await instance.get(`/api/${endpoint}/${id}`);
  return data;
};

// Delete by id
export const deleteById = async (endpoint, id) => {
  const { data } = await instance.delete(`/api/${endpoint}`, {
    data: { id }, // Send id in the request body
  });
  return data;
};