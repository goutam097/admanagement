import { getAuthUrl } from "./apiConstants/authConstants";

export const getApiHeaders = () => {
  const token = localStorage.getItem("accessToken") || null;

  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
};

export const getURL = (key: string, params = {}) => {
  const [moduleName, apiName] = key.split(".");
  switch (moduleName) {
    case "AUTH":
      return getAuthUrl(apiName, params);

    default:
      throw new Error(`URL key "${key}" is not defined.`);
  }
};
