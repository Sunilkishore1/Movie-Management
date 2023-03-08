package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Movie;
import com.example.demo.Repository.MovieRepo;

@Service
public class ApiService {
	@Autowired
	MovieRepo repository;
	
	public List<Movie> getMovie(){
		return repository.findAll();
	}
	
	public boolean addMovie(Movie mov) {
		repository.save(mov);
		return true;
	}
	
	public Optional<Movie> getMovieById(int id){
		return repository.findById(id);
	}
	
	public Movie updateMovie(Movie mov) {
		Movie updated=repository.save(mov);
		return updated;
	}
	
	public boolean deleteById(int id) {
		repository.deleteById(id);
		return true;
	}

	public List<Movie> sortByField(String field) {
		
		return repository.findAll(Sort.by(Sort.Direction.DESC,field));
	}

	public List<Movie> pagination(int offSet, int pageSize) {
		Page<Movie> page=repository.findAll(PageRequest.of(offSet, pageSize));
		return page.getContent();
	}

	public List<Movie> getMovieByField(String field) {
		return repository.findAll(Sort.by(Sort.Direction.DESC,field));
	}


	
}
