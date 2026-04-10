package com.example.jwt.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @PostMapping("/add")
    public String addAdminRecord() {
        return "Record added by ADMIN successfully.";
    }

    @DeleteMapping("/delete")
    public String deleteAdminRecord() {
        return "Record deleted by ADMIN successfully.";
    }
}