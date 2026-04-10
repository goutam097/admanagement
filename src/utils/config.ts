
export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
export const API_BASE_CHRISTTUBE_URL = import.meta.env.VITE_APP_API_BASE_URL || "https://shanviaconsulting.com:4000/v1";

export const VITE_GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "AIzaSyCZr5giYgXzXjvOSYfA_LndEkBg6LVuQIc";

export const config = {
  baseURL: API_BASE_URL,
  christtubeBaseURL: API_BASE_CHRISTTUBE_URL,
  googleMapsApiKey: VITE_GOOGLE_MAPS_API_KEY,
};
