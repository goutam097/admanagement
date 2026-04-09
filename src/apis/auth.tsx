import { getURL } from "../utils/apiConstants";
import { _post } from "../utils/axiosInstance";

export const login = async (
    formData: { email: string; password: string }
): Promise<any> => {
    try {
        const response = await _post(getURL("AUTH.LOGIN"), formData, false);

        if (!response || (typeof response === "object" && "err" in response)) {
            const errMsg = response?.err || "Login failed";
            throw new Error(errMsg);
        }

        const data = response.data;

        if (data?.code === 200) {
            localStorage.setItem(
                "accessToken",
                data?.data?.tokens?.accessToken
            );
            localStorage.setItem(
                "refreshToken",
                data?.data?.tokens?.refreshToken
            );
            return data;
        }

        throw new Error(data?.message || "Login Failed");
    } catch (err: any) {
        throw err?.message || "Login Failed";
    }
};
