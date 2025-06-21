import axios from "axios";

export const getPlaceholderById = async (id: number) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
