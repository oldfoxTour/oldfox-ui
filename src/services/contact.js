import axios from "../axios";

export const contact = async (message) => {
  const response = await axios.post("contact/", message);
  return response.data;
};
