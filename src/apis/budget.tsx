import { getURL } from "../utils/apiConstants";
import {  _get} from "../utils/axiosInstance";



export const budgetAPI = async (): Promise<any> => {
    try {
        const response = await _get(getURL("BUDGET.LIST"), true);

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