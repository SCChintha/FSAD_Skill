package com.example.student.model;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Details about the Student")
public class Student {
    
    @Schema(description = "The unique ID of the student", example = "101", accessMode = Schema.AccessMode.READ_ONLY)
    private Long id;
    
    @Schema(description = "The student's full name", example = "John Doe")
    private String name;
    
    @Schema(description = "The student's email address", example = "john.doe@example.com")
    private String email;
    
    @Schema(description = "The course enrolled by the student", example = "Computer Science")
    private String course;

    public Student() {
    }

    public Student(Long id, String name, String email, String course) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.course = course;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }
}
