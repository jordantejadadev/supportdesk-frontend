const API_URL = import.meta.env.VITE_API_URL;

export const fetchWithRefresh = async (url, options = {}) => {
  let response = await fetch(url, {
    ...options,
    credentials: "include",
  });

  const skipRefresh =
    url.endsWith("/auth/refresh") || url.endsWith("/auth/login");

  if (response.status === 401 && !skipRefresh) {
    const refreshResponse = await fetch(`${API_URL}/auth/refresh`, {
      method: "POST",
      credentials: "include",
    });

    if (!refreshResponse.ok) {
      return response; // sin redirect
    }

    response = await fetch(url, {
      ...options,
      credentials: "include",
    });
  }

  return response;
};

export const getMe = async () => {
  const response = await fetchWithRefresh(`${API_URL}/auth/me`);

  if (!response.ok) {
    return null;
  }

  return response.json();
};

export const isAdmin = (user) => {
  return user?.role === "ADMIN";
};
