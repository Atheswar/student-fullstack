package com.example.studentbackend;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class StudentService {

    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public List<Student> getStudents() {
        return repository.findAll();
    }

    public Student getStudent(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Student not found with id " + id));
    }

    public Student addStudent(Student student) {
        student.setId(null);
        return repository.save(student);
    }

    public Student updateStudent(Long id, Student student) {
        Student existing = getStudent(id);

        existing.setName(student.getName());
        existing.setEmail(student.getEmail());
        existing.setDepartment(student.getDepartment());
        existing.setMarks(student.getMarks());

        return repository.save(existing);
    }

    public void deleteStudent(Long id) {
        Student student = getStudent(id);
        repository.delete(student);
    }

    public List<Student> searchStudents(String name) {
        return repository.findByNameContainingIgnoreCase(
                name == null ? "" : name.trim());
    }
}
