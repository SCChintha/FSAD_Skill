package com.klef.fsad.exam.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.fsad.exam.model.Hotel;
import com.klef.fsad.exam.repository.HotelRepository;

@Service
public class HotelService {

    @Autowired
    private HotelRepository repo;

    // POST - Add Hotel
    public Hotel addHotel(Hotel hotel) {
        if (hotel.getHotelId() == 0) {
            throw new RuntimeException("Hotel ID must be provided manually");
        }
        return repo.save(hotel);
    }

    // PUT - Update Hotel
    public Hotel updateHotel(int id, Hotel newHotel) {
        Optional<Hotel> optional = repo.findById(id);

        if (optional.isPresent()) {
            Hotel hotel = optional.get();

            hotel.setName(newHotel.getName());
            hotel.setDate(newHotel.getDate());
            hotel.setStatus(newHotel.getStatus());
            hotel.setLocation(newHotel.getLocation());
            hotel.setPrice(newHotel.getPrice());

            return repo.save(hotel);
        } else {
            throw new RuntimeException("Hotel not found");
        }
    }
}