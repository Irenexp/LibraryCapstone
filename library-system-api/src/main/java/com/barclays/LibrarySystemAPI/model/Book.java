package com.barclays.LibrarySystemAPI.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@Table(name = "BOOK")
@NoArgsConstructor
//@AllArgsConstructor
public class Book{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private  Long id;
    private String title;
    private String imgUrl;

    @ManyToOne (fetch = FetchType.EAGER)
    @JsonBackReference
    @JoinColumn(name ="author_id", referencedColumnName = "id", nullable = false)
    private Author author;


    @Enumerated(EnumType.STRING)
    private Genre genre;
    @Column(name = "quantity")
    private int quantity;
    private boolean isAvailable;

    public Book(Long id, String title, Author author, Genre genre, int quantity, boolean isAvailable) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.quantity = quantity;
        this.isAvailable = isAvailable;
    }
    public Book(Long id, String title, String imgUrl, Author author, Genre genre, int quantity, boolean isAvailable) {
        this.id = id;
        this.title = title;
        this.imgUrl = imgUrl;
        this.author = author;
        this.genre = genre;
        this.quantity = quantity;
        this.isAvailable = isAvailable;
    }
}


