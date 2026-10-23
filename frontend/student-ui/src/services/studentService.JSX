// import axios from "axios";
// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080",
// });
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (!error.response) {
//       return Promise.reject(
//         new Error("Server is not reachable")
//       );
//     }
//     const status = error.response.status;
//     const data = error.response.data;
//     if (status === 404) {
//       return Promise.reject(
//         new Error(
//           data?.error ||
//           data?.message ||
//           "Resource not found"
//         )
//       );
//     }
//     if (status === 400) {
//       return Promise.reject(
//         data || { error: "Invalid request" }
//       );
//     }
//     return Promise.reject(
//       new Error(
//         data?.error ||
//         data?.message ||
//         `Request failed with status ${status}`
//       )
//     );
//   }
// );
// export const getStudents = () => {
//   return api.get("/api/students");
// };
// export const addStudent = (student) => {
//   return api.post("/api/students", student);
// };
// export const deleteStudent = (id) => {
//   return api.delete(`/api/students/${id}`);
// };
// export const searchStudents = (name) => {
//   return api.get("/api/students/search", {
//     params: { name },
//   });
// };

import axios from "axios";
const api = axios.create({
  baseURL: "",
});
export const getStudents = () => api.get("/api/students");
export const addStudent = (student) =>
  api.post("/api/students", student);
export const deleteStudent = (id) =>
  api.delete(`/api/students/${id}`);
export const searchStudents = (name) =>
  api.get("/api/students/search", { params: { name } });