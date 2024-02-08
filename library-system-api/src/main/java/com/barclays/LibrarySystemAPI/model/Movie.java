package com.barclays.LibrarySystemAPI.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table (name = "MOVIE")
@NoArgsConstructor
@Data
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;

    private String title;
    private String imgUrl;
    private String leadActors;
    private String director;
    private String screenWriter;
    private String releaseDate;
    private boolean isAvailable;
    private int quantity;
    @Enumerated(EnumType.STRING)
    private Genre genre;
    private double rating;

    public Movie(Long id, String title, String leadActors, String director, String screenWriter, String releaseDate, boolean isAvailable, int quantity, Genre genre, double rating) {
        this.id = id;
        this.title = title;
        this.leadActors = leadActors;
        this.director = director;
        this.screenWriter = screenWriter;
        this.releaseDate = releaseDate;
        this.isAvailable = isAvailable;
        this.quantity = quantity;
        this.genre = genre;
        this.rating = rating;
    }

    public Movie(Long id, String title, String imgUrl, String leadActors, String director, String screenWriter, String releaseDate, boolean isAvailable, int quantity, Genre genre, double rating) {
        this.id = id;
        this.title = title;
        this.imgUrl = imgUrl;
        this.leadActors = leadActors;
        this.director = director;
        this.screenWriter = screenWriter;
        this.releaseDate = releaseDate;
        this.isAvailable = isAvailable;
        this.quantity = quantity;
        this.genre = genre;
        this.rating = rating;
    }
}
