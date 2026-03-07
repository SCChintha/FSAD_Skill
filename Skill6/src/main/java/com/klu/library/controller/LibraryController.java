package com.klu.library.controller;

import com.klu.library.model.Book;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class LibraryController {

    List<Book> books = new ArrayList<>();

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to the Online Library System";
    }

    @GetMapping("/count")
    public int count() {
        return 500;
    }

    @GetMapping("/price")
    public double price() {
        return 499.99;
    }

    @GetMapping("/books")
    public List<String> getBooks() {
        List<String> titles = new ArrayList<>();
        titles.add("Java Programming");
        titles.add("Spring Boot Guide");
        titles.add("Data Structures");
        titles.add("Microservices Architecture");
        return titles;
    }

    @GetMapping("/books/{id}")
    public String getBookById(@PathVariable int id) {
        return "Details of Book with ID: " + id;
    }

    @GetMapping("/search")
    public String searchBook(@RequestParam String title) {
        return "Searching for book titled: " + title;
    }

    @GetMapping("/author/{name}")
    public String getAuthor(@PathVariable String name) {
        return "Books written by Author: " + name;
    }

    @PostMapping("/addbook")
    public String addBook(@RequestBody Book book) {
        books.add(book);
        return "Book added successfully";
    }

    @GetMapping("/viewbooks")
    public List<Book> viewBooks() {
        return books;
    }
}