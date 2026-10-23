// //Git
// /*
// FrontEnd
// Node Modules
// dist
// .env

// BackEnd
// target/
// .idea/
// *.log

// git init
// git add .
// git commit -m "Initial commit: employee app"
// git add . 
// git commit -m "Message"
// git push

// git status         
// git log --oneline  
// git branch feature-delete
// git checkout feature-delete
// git merge feature-delete

// git branch -M main
// git remote add origin https://github.com/<your-username>/employee-app-frontend.git
// git push -u origin main

// Deployment overview
// Users -> Frontend Host(Static Files)
//             | http
//             v
//         Backend Host(SpringBoot Jar)
//             | http
//             v
//         Cloude MySQLDatabase Host

// BackEnd:(SpringBoot)
// ./mvnw clean package
// java -jar target/employee-app-0.0.1-SNAPSHOT.jar

// FrontEnd:(React)
// npm run build


// No Secret in GitHub
// Vite API points to backend (Not to localhost)
// Cros Allows Live(Frontend URL)
// Backend Database are Connection(Check this)
// Test Add/View/Delete On the live site comes under deployment checkList
// */


//Q1
// import { useState } from "react";
// function App() {
//     const [result, setResult] = useState("");
//     function getEmployee(id) {
//         setResult("Loading...");
//         fetch(`http://localhost:8081/api/employees/${id}`)
//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error("Employee not found");
//                 }
//                 return res.json();
//             })
//             .then((data) => {
//                 setResult("Employee Name: " + data.name);
//             })
//             .catch((err) => {
//                 setResult("Error: " + err.message);
//                 console.log("Error: " + err.message);
//             });
//     }
//     return (
//         <div>
//             <h2>Employee Details</h2>
//             <button onClick={() => getEmployee(1)}>
//                 Get Employee 1
//             </button>
//             <button onClick={() => getEmployee(99)}>Get Employee 99</button>
//             <p>{result}</p>
//         </div>
//     );
// }
// export default App;

//Q2
// import { useState } from "react";
// function App() {
//     const [message, setMessage] = useState("");
//     function saveStudent() {
//         const student = {
//             name: "Arun",
//             email: "arun@gmail.com",
//             department: "CSE",
//             marks: 85
//         };
//         fetch("http://localhost:8081/api/students", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(student)
//         })
//             .then(async (res) => {
//                 const data = await res.json();
//                 if (!res.ok) {
//                     throw new Error(data.message || "Failed to save student");
//                 }
//                 return data;
//             })
//             .then((data) => {
//                 setMessage("Student saved successfully!");
//                 console.log(data);
//             })
//             .catch((err) => {
//                 setMessage("Error: " + err.message);
//                 console.error(err);
//             });
//     }
//     return (
//         <div>
//             <h2>Save Student</h2>
//             <button onClick={saveStudent}>Save Student</button>
//             <p>{message}</p>
//         </div>
//     );
// }
// export default App;

//Q3

// import { useState, useEffect } from "react";
// import axios from "axios";
// function StudentList() {
//     const [students, setStudents] = useState([]);
//     useEffect(() => {
//         axios
//             .get("http://localhost:8081/api/students")
//             .then((res) => {
//                 setStudents(res.data);
//             })
//             .catch((err) => {
//                 console.error("Error fetching students:", err);
//             });
//     }, []);
//     return (
//         <div>
//             <h2>Student List</h2>
//             <ul>
//                 {students.map((s, index) => (
//                     <li key={s.id ?? index}>
//                         {s.name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// export default StudentList;

//Q4

// async function loadStudents() {
//     try {
//         const res = await axios.get(
//             "http://localhost:8080/api/students"
//         );
//         setStudents(res.data);
//     } catch (err) {
//         if (err.response) {
//             console.log("HTTP Error:", err.response.status);
//         } else if (err.request) {
//             console.log("No response received from the server");
//         } else {
//             console.log("Error:", err.message);
//         }
//     }
// }

//Q7

// import { useState } from "react";
// function App() {
//     const [output, setOutput] = useState([]);
//     function runCode() {
//         setOutput([]);
//         const logs = [];
//         const print = (letter) => {
//             logs.push(letter);
//             setOutput([...logs]);
//             console.log(letter);
//         };
//         print("A");
//         fetch("http://localhost:8081/api/weekendtask")
//             .then(() => print("B"))
//             .catch((err) => print("Fetch error: " + err.message));
//         setTimeout(() => print("C"), 0);
//         Promise.resolve().then(() => print("D"));
//         print("E");
//     }
//     return (
//         <div style={{ padding: "20px", fontFamily: "Arial" }}>
//             <h2>Q7 - JavaScript Execution Order</h2>
//             <button onClick={runCode}>Run Code</button>
//             <h3>Output</h3>
//             <ol>
//                 {output.map((item, index) => (
//                     <li key={index}>{item}</li>
//                 ))}
//             </ol>
//         </div>
//     );
// }
// export default App;

//Q8
// function App() {
//     function runCode() {
//         console.clear();
//         async function f() {
//             console.log("1");
//             await null;
//             console.log("2");
//         }
//         console.log("3");
//         f();
//         console.log("4");
//     }
//     return (
//         <div>
//             <h2>Q8 - Async/Await Output</h2>
//             <button onClick={runCode}>Run Code</button>
//         </div>
//     );
// }
// export default App;

//Q9
// import axios from "axios";
// function App() {
//     async function runCode() {
//         console.clear();
//         try {
//             await axios.get(
//                 "http://localhost:8081/a1pi/employeedb/99"
//             );
//             console.log("OK");
//         } catch (err) {
//             console.log(err.response.status);
//             console.log(err.response.data.error);
//         }
//         console.log("Done");
//     }
//     return (
//         <div>
//             <h2>Q9 - Axios Error Handling</h2>
//             <button onClick={runCode}>Run Code</button>
//         </div>
//     );
// }
// export default App;

//Q11

// import { useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);
//   function add() {
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(c => c + 1);
//     console.log(count);
//   }
//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={add}>Add</button>
//     </div>
//   );
// }
// export default App;

//Q12

// function App() {
//   const s = {
//     name: "Arun",
//     marks: 85,
//     address: undefined,
//     tags: ["a", "b"]
//   };
//   console.log(JSON.stringify(s));
//   console.log(JSON.parse('{"x":1,"y":[2,3]}').y.length);
//   console.log(typeof JSON.parse("42"));
//   return (
//     <div>
//       <h2>Q12 - JSON Output</h2>
//     </div>
//   );
// }
// export default App;

//Q15

// import { useState } from "react";
// import {
//   getStudents,
//   addStudent,
//   deleteStudent,
// } from "./services/studentService";
// function App() {
//   const [result, setResult] = useState("");
//   const showResult = async (action) => {
//     try {
//       const response = await action();
//       setResult(JSON.stringify(response.data, null, 2));
//     } catch (error) {
//       setResult(
//         JSON.stringify(
//           error.response?.data ?? error.message,
//           null,
//           2
//         )
//       );
//     }
//   };
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Q15 - Axios Service Test</h2>

//       <button onClick={() => showResult(getStudents)}>
//         Get Students
//       </button>
//       <button
//         onClick={() =>
//           showResult(() =>
//             addStudent({
//               name: "Arun Kumar",
//               email: "arun@example.com",
//               department: "CSE",
//               marks: 85,
//             })
//           )
//         }
//       >
//         Add Student
//       </button>
//       <button onClick={() => showResult(() => deleteStudent(99))}>Delete Student 99</button>
//       <pre>{result}</pre>
//     </div>
//   );
// }
// export default App;

//Q16

// import { useState } from "react";
// import { getStudent } from "./services/studentFetchService";
// function App() {
//   const [result, setResult] = useState("");
//   async function testStudent() {
//     try {
//       const data = await getStudent(99);
//       setResult(JSON.stringify(data, null, 2));
//     } catch (error) {
//       setResult(error.message);
//     }
//   }
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Q16 - Fetch API Test</h2>
//       <button onClick={testStudent}>Get Student 99</button>
//       <pre>{result}</pre>
//     </div>
//   );
// }
// export default App;

//Q17
import { useState, useEffect } from "react";
import {
  getStudents,
  addStudent,
  deleteStudent,
  searchStudents,
} from "./services/studentService";
function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [marks, setMarks] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  useEffect(() => {
    const timer = setTimeout(async () => {
      setLoading(true);
      setError("");
      try {
        const response = search.trim()
          ? await searchStudents(search.trim()): await getStudents();
        setStudents(response.data);
      } catch (err) {
        setError(err.message || "Server is not reachable");
      } finally {
        setLoading(false);
      }
    }, search ? 300 : 0);
    return () => clearTimeout(timer);
  }, [search]);
  async function handleAdd(e) {
    e.preventDefault();
    setError("");
    setFieldErrors({});
    try {
      await addStudent({
        name,
        email,
        department,
        marks: Number(marks),
      });
      setName("");
      setEmail("");
      setDepartment("");
      setMarks("");
      setSearch("");
      const response = await getStudents();
      setStudents(response.data);
    } catch (err) {
      if (err.response?.status === 400) {
        setFieldErrors(err.response.data);
      } else if (typeof err === "object" && !err.response && !err.message) {
        setFieldErrors(err);
      } else {
        setError(err.message || "Unable to add student");
      }
    }
  }
  async function handleDelete(id) {
    if (!window.confirm("Delete this student?")) return;
    try {
      await deleteStudent(id);
      setStudents((old) => old.filter((s) => s.id !== id));
    } catch (err) {
      setError(err.message || "Unable to delete student");
    }
  }
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Student Management</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h2>Add Student</h2>
      <form onSubmit={handleAdd}>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
        {fieldErrors.name && <p style={{ color: "red" }}>{fieldErrors.name}</p>}
        <br /><br />
        <input type="email"placeholder="Email"value={email}onChange={(e) => setEmail(e.target.value)}required/>
        {fieldErrors.email && <p style={{ color: "red" }}>{fieldErrors.email}</p>}
        <br /><br />
        <input
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
        {fieldErrors.department && <p style={{ color: "red" }}>{fieldErrors.department}</p>}
        <br /><br />
        <input type="number"placeholder="Marks (0–100)"min="0"max="100"value={marks}onChange={(e) => setMarks(e.target.value)}required/>
        {fieldErrors.marks && <p style={{ color: "red" }}>{fieldErrors.marks}</p>}
        <br /><br />
        <button type="submit">Add Student</button>
      </form>
      <h2>Student List</h2>
      <input placeholder="Search by name"value={search}onChange={(e) => setSearch(e.target.value)}/>
      {loading ? (
        <p>Loading...</p>
      ) : !error && students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ marginTop: "15px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Marks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.department}</td>
                <td>{s.marks}</td>
                <td>
                  <button onClick={() => handleDelete(s.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default App;

