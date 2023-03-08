package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Movie;
import com.example.demo.Service.ApiService;

@RestController
@CrossOrigin(origins="http://localhost:3000/")
public class ApiController {
	@Autowired
	ApiService service;
	
	@GetMapping("/movie")
	public List<Movie> read(){
		return service.getMovie();
	}
	
	@PostMapping("/movie")
	public boolean add(@RequestBody Movie mov) {
		return service.addMovie(mov);
	}
	
	
	@PutMapping("/movie/{id}")
	public Movie update(@RequestBody Movie mov) {
		return service.updateMovie(mov);
	}
	
	@DeleteMapping("/movie/{id}")
	public boolean delete(@PathVariable int id) {
		return service.deleteById(id);
	}
	
	@GetMapping("/movie/{id}")
	public Optional<Movie> readById(@PathVariable int id){
		return service.getMovieById(id);
	}
	
	@GetMapping("/movie/{field}/2")
	public List<Movie> sort(@PathVariable String field){
		return service.sortByField(field);
	}
	@GetMapping("/movie/{field}/1")
	public List<Movie> readField(@PathVariable String field){
		return  service.getMovieByField(field);
	}
	
	@GetMapping("/movie/{offSet}/{pageSize}")
	public List<Movie> paging(@PathVariable int offSet,@PathVariable int pageSize){
		return service.pagination(offSet,pageSize);
	}

}
