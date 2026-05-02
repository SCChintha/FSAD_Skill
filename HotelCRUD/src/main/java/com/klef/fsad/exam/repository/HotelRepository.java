package com.klef.fsad.exam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.klef.fsad.exam.model.Hotel;

public interface HotelRepository extends JpaRepository<Hotel, Integer> {
}