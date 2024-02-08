package com.barclays.LibrarySystemAPI.controller;

import com.barclays.LibrarySystemAPI.model.Book;
import com.barclays.LibrarySystemAPI.model.Genre;
import com.barclays.LibrarySystemAPI.model.Movie;
import com.barclays.LibrarySystemAPI.service.MovieService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class MovieController {

    MovieService movieService;
    @GetMapping("/movie/title")
    public List<Movie> searchMovieByTitle(@RequestParam("title") String title){
        title=  title.substring(0,1).toUpperCase() + title.substring(1);
        return movieService.searchMovieByTitle(title);
    }

    @GetMapping("/movie/director")
    public List<Movie> searchMovieByDirectorContaining(@RequestParam("name")String director){
        return movieService.searchMovieByDirectorContaining(director);
    }

    @GetMapping("movie/availability")
    public List<Movie> searchByAvailability(@RequestParam("isAvailable") boolean isAvailable){
        return movieService.searchByIsAvailable(isAvailable);
    }

    @GetMapping("/movie/genre")
    public List<Movie> searchMovieByGenre(@RequestParam("genre") Genre genre){
        return movieService.searchMovieByGenre(genre);
    }

    @GetMapping("/movie/rating")
    public ResponseEntity<List<Movie>> getMoviesByRatingRange(
            @RequestParam(name = "minRating", required = false) Double minRating,
            @RequestParam(name = "maxRating", required = false) Double maxRating) {
            List<Movie> movies = movieService.findMoviesByRatingRange(minRating, maxRating);
            return ResponseEntity.ok(movies);
    }

    @GetMapping("/movie")
    public List<Movie> findAllMovies(){
        return movieService.findAllMovies();
    }

    @PostMapping("/movie/create")
    public Movie createMovie(@RequestBody Movie movie){
        return movieService.save(movie);
    }

    @DeleteMapping("/movie/delete/{id}")
    public void deleteMovie(@PathVariable Long id){
         movieService.deleteMovie(id);
    }



    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }
}
