import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});
export async function getStudents() {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (err) {
    if (err.response) {
      if (typeof err.response.data === "string") {
        return err.response.data;
      }
      return err.response.data;
    }
    return "Server is not reachable";
  }
}
export async function addStudent(student) {
  try {
    const response = await api.post("/", student);
    return response.data;
  } catch (err) {
    if (err.response) {
      if (err.response.status === 400) {
        return err.response.data;
      }
      if (typeof err.response.data === "string") {
        return err.response.data;
      }
      return err.response.data;
    }
    return "Server is not reachable";
  }
}
export async function deleteStudent(id) {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (err) {
    if (err.response) {
      if (typeof err.response.data === "string") {
        return err.response.data;
      }
      if (err.response.data?.error) {
        return err.response.data.error;
      }
      if (err.response.data?.message) {
        return err.response.data.message;
      }
      return err.response.data;
    }
    return "Server is not reachable";
  }
}