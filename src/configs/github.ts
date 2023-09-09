export const isLocal = () => import.meta.env.VITE_ENV === "local";
const getToken = () => {
  if (isLocal()) {
    return import.meta.env.VITE_GITHUB_TOKEN;
  }

  return import.meta.env.FETCH_API_TOKEN;
};

export const username = import.meta.env.VITE_GITHUB_USERNAME;
export const token = getToken();
export const env = import.meta.env.VITE_ENV;
