import axios, { AxiosError } from 'axios';
import { config } from './config';
import { getApiHeaders } from './apiConstants';
import { toast } from "react-toastify";

export const axiosInstance =  axios.create({
  baseURL: config.baseURL,
});

const _get = async (url: string, isAuthenticated: boolean = true) => {
  try {
    return await axiosInstance.get(url, isAuthenticated ? getApiHeaders() : {});
  } catch (error) {
    const err = error as AxiosError
    const errorMessage: any | {} = err?.response?.data
    toast.error(errorMessage?.message)
    return {err: errorMessage?.message};  
  }
};

const _post = async (url: string, data = {}, isAuthenticated: boolean = true) => {
  try {
    // console.log('data...',data);
    const headers: Record<string, string> = isAuthenticated ? getApiHeaders().headers : {};
    if (data instanceof FormData) {
      delete headers['Content-Type'];
    }
    return await axiosInstance.post(url, data, {headers});
  } catch (error) {
    const err = error as AxiosError
    const errorMessage: any | {} = err?.response?.data
    toast.error(errorMessage?.message)
    return {err: errorMessage?.message};
  }
};
const _test = async (url: string, data = {}, isAuthenticated: boolean = true) => {
  try {
    const headers: Record<string, string> = isAuthenticated ? getApiHeaders().headers : {};
    // if (data instanceof FormData) {
    //   delete headers['Content-Type'];
    // }
    console.log("test data..",data)
    return await axiosInstance.post(url, data, {headers});
  } catch (error) {
    const err = error as AxiosError
    const errorMessage: any | {} = err?.response?.data
    toast.error(errorMessage?.message)
    return {err: errorMessage?.message};
  }
};

const _put = async (url: string, data = {}, isAuthenticated: boolean = true) => {
  try {
    const headers: Record<string, string> = isAuthenticated ? getApiHeaders().headers : {};
    if (data instanceof FormData) {
      delete headers['Content-Type'];
    }
    return await axiosInstance.put(url, data, {headers});
  } catch (error) {
    const err = error as AxiosError
    const errorMessage: any | {} = err?.response?.data
    toast.error(errorMessage?.message)
    return {err: errorMessage?.message};
  }
};

const _delete = async (url: string, data?:any, isAuthenticated: boolean = true) => {
  try {
    // return await axiosInstance.delete(url, isAuthenticated ? getApiHeaders() : {});
    const config = isAuthenticated ? getApiHeaders() : {};
    const response = await axiosInstance.delete(url, { ...config, data });
    return response;
  } catch (error) {
    const err = error as AxiosError
    const errorMessage: any | {} = err?.response?.data
    toast.error(errorMessage?.message)
    return {err: errorMessage?.message};
  }
};

const _patch = async (url: string, data = {}, isAuthenticated: boolean = true) => {
  try {
    const headers: Record<string, string> = isAuthenticated ? getApiHeaders().headers : {};
    if (data instanceof FormData) {
      delete headers['Content-Type'];
    }
    return await axiosInstance.patch(url, data, {headers});
  } catch (error) {
    const err = error as AxiosError
    const errorMessage: any | {} = err?.response?.data
    toast.error(errorMessage?.message)
    return {err: errorMessage?.message};
  }
};

export { _get, _post, _put, _delete, _patch, _test };
