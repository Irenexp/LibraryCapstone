package com.barclays.LibrarySystemAPI.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table (name = "PERIODICAL")
@AllArgsConstructor
@NoArgsConstructor
public class Periodical {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;
    private String publicationDate;
    private String periodicalName;
    private String imgUrl;
}
