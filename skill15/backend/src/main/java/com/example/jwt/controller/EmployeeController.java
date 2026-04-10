package com.example.jwt.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @GetMapping("/profile")
    public String getEmployeeProfile() {
        return "Employee Profile Data Accessed.";
    }
}