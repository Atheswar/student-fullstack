# Student Management System — Backend

A REST API built using Spring Boot and MySQL to manage student records.

## Technologies Used

- Java 21
- Spring Boot
- Spring Data JPA
- MySQL
- Maven
- REST API

## Features

- Get all students
- Get a student by ID
- Add a student
- Update student details
- Delete a student
- Search students by name
- Validate student data
- Handle API errors

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/students` | Get all students |
| GET | `/api/students/{id}` | Get student by ID |
| GET | `/api/students/search?name=John` | Search by name |
| POST | `/api/students` | Add a student |
| PUT | `/api/students/{id}` | Update a student |
| DELETE | `/api/students/{id}` | Delete a student |

## Prerequisites

- JDK 21 or compatible Java version
- MySQL Server
- Eclipse IDE or another Java IDE
- Postman (for API testing)

## Database Configuration

1. Create a MySQL database named `student`.
2. Configure the database URL, username, and password in your local Spring Boot configuration.
3. Keep real passwords and other secrets out of GitHub.

## Run the Application

Open this backend folder in Eclipse and run `StudentbackendApplication.java`.

Alternatively, from this folder, build the project:

```bash
mvn clean package
```

Run the generated JAR from the `target` directory:

```bash
java -jar target/your-generated-file.jar
```

Replace `your-generated-file.jar` with the actual JAR filename.

The API runs on `http://localhost:8080` by default.

## Testing

Use Postman to test the API endpoints with GET, POST, PUT, and DELETE requests.

## Related Project

The React frontend is available in the repository's `frontend/student-ui` directory.
