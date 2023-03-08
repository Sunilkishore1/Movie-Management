package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Movie;

@Repository
public interface MovieRepo extends JpaRepository<Movie, Integer>{

}
