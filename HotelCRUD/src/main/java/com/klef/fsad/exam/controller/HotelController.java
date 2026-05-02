package com.klef.fsad.exam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.klef.fsad.exam.model.Hotel;
import com.klef.fsad.exam.service.HotelService;

@RestController
@RequestMapping("/hotel")
public class HotelController {

    @Autowired
    private HotelService service;

    // POST API
    @PostMapping("/add")
    public Hotel addHotel(@RequestBody Hotel hotel) {
        return service.addHotel(hotel);
    }

    // PUT API
    @PutMapping("/update/{id}")
    public Hotel updateHotel(@PathVariable int id, @RequestBody Hotel hotel) {
        return service.updateHotel(id, hotel);
    }
}