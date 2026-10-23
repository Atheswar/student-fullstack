## Project Structure

- `backend/studentbackend/studentbackend` — Spring Boot REST API
- `frontend/student-ui` — React and Vite frontend

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/students` | Get all students |
| GET | `/api/students/{id}` | Get a student by ID |
| GET | `/api/students/search?name=John` | Search by name |
| POST | `/api/students` | Add a student |
| PUT | `/api/students/{id}` | Update a student |
| DELETE | `/api/students/{id}` | Delete a student |

## Run Commands

**Backend:** Open the backend folder in Eclipse and run `StudentbackendApplication.java`. Ensure MySQL is running and the database configuration is set locally.

**Frontend:** Open `frontend/student-ui` in VS Code and run:

```bash
npm install
npm run dev
```

**Security:** Keep database passwords and other secrets out of GitHub.
