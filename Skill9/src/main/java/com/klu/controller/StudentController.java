package com.klu.controller;

import com.klu.model.Student;
import com.klu.exception.StudentNotFoundException;
import com.klu.exception.InvalidInputException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
public class StudentController {

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable String id) {

        int studentId;

        try {
            studentId = Integer.parseInt(id);
        } catch (Exception e) {
            throw new InvalidInputException("Student ID must be a number");
        }

        if (studentId != 1 && studentId != 2) {
            throw new StudentNotFoundException("Student with ID " + studentId + " not found");
        }

        if (studentId == 1)
            return new Student(1, "Sai Charan", "CSE");

        return new Student(2, "Rahul", "ECE");
    }
}