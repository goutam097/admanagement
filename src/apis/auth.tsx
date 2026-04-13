import { getURL } from "../utils/apiConstants";
import { _getC, _postC } from "../utils/axiosInstance";

export const login = async (
    formData: { email: string; password: string }
): Promise<any> => {
    try {
        const response = await _postC(getURL("AUTH.LOGIN"), formData, false);

        if (!response || (typeof response === "object" && "err" in response)) {
            const errMsg = response?.err || "Login failed";
            throw new Error(errMsg);
        }

        const data = response.data;

        if (data?.code === 200) {
            const accessToken = data?.data?.tokens?.accessToken;
            const refreshToken = data?.data?.tokens?.refreshToken;

            if (accessToken) {
                localStorage.setItem("accessToken", accessToken);
            }

            if (refreshToken) {
                localStorage.setItem("refreshToken", refreshToken);
            }

            return data?.data ?? {};
        }

        throw new Error(data?.message || "Login Failed");
    } catch (err: any) {
        throw err?.message || "Login Failed";
    }
};

export const myProfileDetails = async (): Promise<any> => {
    try {
        const response = await _getC(getURL("AUTH.DETAILS"), true);

        if (!response || (typeof response === "object" && "err" in response)) {
            const errMsg = response?.err || "Failed to load profile";
            throw new Error(errMsg);
        }

        const data = response.data;

        if (data?.code === 200) {
            return data.data;
        }

        throw new Error(data?.message || "Failed to load profile");
    } catch (err: any) {
        throw err?.message || "Failed to load profile";
    }
};

export const ProfileTypeApi = async (
    data: { profile_type: string }
): Promise<any> => {
    try {
        const response = await _postC(
            getURL("AUTH.MEMBERSHIP"),
            data,
            true
        );
        console.log(response,'11111111111111')
        if (!response || (typeof response === "object" && "err" in response)) {
            throw new Error(response?.err || "Failed to load profile");
        }

        const resData = response.data;

        if (resData?.code === 200) {
            return resData.data;
        }

        throw new Error(resData?.message || "Failed to load profile");
    } catch (err: any) {
        throw err?.message || "Failed to load profile";
    }
};
