const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";
export async function getJson(url) {
  let response;
  try {
    response = await fetch(`${BASE_URL}${url}`);
  } catch (error) {
    throw new Error("Server is not reachable");
  }
  let data;
  const text = await response.text();
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  if (!response.ok) {
    let message;
    if (typeof data === "string") {
      message = data;
    } else {
      message =
        data?.error ||
        data?.message ||
        JSON.stringify(data) ||
        "Request failed";
    }
    throw new Error(`HTTP ${response.status}: ${message}`);
  }
  return data;
}
export function getStudent(id) {
  return getJson(`/api/students/${id}`);
}