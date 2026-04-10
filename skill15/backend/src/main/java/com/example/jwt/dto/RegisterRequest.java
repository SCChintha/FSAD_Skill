package com.example.jwt.dto;

import com.example.jwt.entity.Role;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class RegisterRequest {
    private String username;
    private String password;
    private Role role;
}