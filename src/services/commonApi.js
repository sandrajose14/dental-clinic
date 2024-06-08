import axios from "axios";

export const commonApi = async (httpMethod, url, reqBody) => {
  let requestConfig = {
    method: httpMethod,
    url,
    data: reqBody,
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const result = await axios(requestConfig);
    return result;
  } catch (error) {
    console.error('Error in commonApi:', error);
    throw error;
  }
};
