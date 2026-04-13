import { getURL } from "../utils/apiConstants";
import { _delete, _get, _getC, _post, _postC, _put } from "../utils/axiosInstance";

type AdSetPayload = {
  campaign_id: string;
  name: string;
  budget: number;
  schedule_start: string | null;
  schedule_end: string | null;
  targeting: any;
};

export const adSetAPI = async (): Promise<any> => {
    try {
        const response = await _get(getURL("ADSET.GETADSET"), true);

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


export const adSetUpadteAPI = async (
  id: string,
  payload: { status: string }
): Promise<any> => {
  try {
    const url = getURL("ADSET.UPDATE", { id });

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

export const adSetDeleteAPI = async (
  id: string,
): Promise<any> => {
  try {
    const url = getURL("ADSET.DELETE", { id });

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

export const adSetCreateAPI = async (
  data: AdSetPayload
): Promise<any> => {
  try {
    const url = getURL("ADSET.CREATE"); 

    const response = await _post(url, data);

    if (!response || (typeof response === "object" && "err" in response)) {
      throw new Error(response?.err || "Create failed");
    }

    if (response.status === 201) {
      return response.data.data;
    }

    throw new Error(response?.data?.message || "Create failed");
  } catch (err: any) {
    throw err?.message || "Create failed";
  }
};
