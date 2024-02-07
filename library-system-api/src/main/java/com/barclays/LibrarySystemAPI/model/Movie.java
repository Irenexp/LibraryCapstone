package com.barclays.LibrarySystemAPI.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table (name = "MOVIE")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;

    private String title;
    private String leadActors;
    private String director;
    private String screenWriter;
    private String releaseDate;
    private boolean isAvailable;
    private int quantity;
    @Enumerated(EnumType.STRING)
    private Genre genre;
    private double rating;
    private  String imgUrl;
}
