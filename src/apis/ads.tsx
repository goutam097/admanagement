import { getURL } from "../utils/apiConstants";
import { _delete, _get, _getC, _post, _postC, _put } from "../utils/axiosInstance";



export const adAPI = async (): Promise<any> => {
    try {
        const response = await _get(getURL("ADS.GETADS"), true);

        if (!response || (typeof response === "object" && "err" in response)) {
            const errMsg = response?.err || "Failed to load profile";
            throw new Error(errMsg);
        }

        const data = response.data;

        if (response.status === 200) {
            return data;
        }

        throw new Error(data?.message || "Failed to load profile");
    } catch (err: any) {
        throw err?.message || "Failed to load profile";
    }
};

export const adUpdateAPI = async (
  id: string,
  payload: { status: string }
): Promise<any> => {
  try {
    const url = getURL("ADS.UPDATE", { id });

    const response = await _put(url, payload, true);

    if (!response || (typeof response === "object" && "err" in response)) {
      throw new Error(response?.err || "Update failed");
    }

    if (response.status === 200) {
      return response.data;
    }

    throw new Error(response?.data?.message || "Update failed");
  } catch (err: any) {
    throw err?.message || "Update failed";
  }
};

export const adDeleteAPI = async (
  id: string
): Promise<any> => {
  try {
    const url = getURL("ADS.DELETE", { id });

    const response = await _delete(url);

    if (!response || (typeof response === "object" && "err" in response)) {
      throw new Error(response?.err || "Update failed");
    }

    if (response.status === 200) {
      return response.data;
    }

    throw new Error(response?.data?.message || "Update failed");
  } catch (err: any) {
    throw err?.message || "Update failed";
  }
};

export const adCreateAPI = async (
  data: { name: string; objective: string }
): Promise<any> => {
  try {
    const url = getURL("ADS.CREATE"); 

    const response = await _post(url, data);

    if (!response || (typeof response === "object" && "err" in response)) {
      throw new Error(response?.err || "Create failed");
    }

    if (response.status === 200) {
      return response.data.data;
    }

    throw new Error(response?.data?.message || "Create failed");
  } catch (err: any) {
    throw err?.message || "Create failed";
  }
};
