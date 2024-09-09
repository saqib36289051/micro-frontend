import BASE_URL from "main_container/BASE_URL";
import axios from "./api-client";

export const get = async (url: string, params?: any) => {
  const fullUrl = BASE_URL + "/api" + url;
  try {
    const data = await axios
      .get(fullUrl, { params: params })
      .then(({ data }) => data);

    return data;
  } catch (error) {
    console.log(error);
  }
};
