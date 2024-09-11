import { BASE_URL } from "../../constants/constants";
import axios from "./api-client";

export const post = async (url: string, data: any) => {
  const fullUrl = BASE_URL + "/api" + url;
  try {
    const response = await axios.post(fullUrl, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
