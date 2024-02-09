package com.barclays.LibrarySystemAPI.controller;

import com.barclays.LibrarySystemAPI.model.Author;
import com.barclays.LibrarySystemAPI.model.Book;
import com.barclays.LibrarySystemAPI.model.Genre;
import com.barclays.LibrarySystemAPI.model.Movie;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@Sql("classpath:test-data.sql")
@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@TestPropertySource(properties = {"spring.sql.init.mode=never"})

class BookTestWithMockHttpRequest {

    @Autowired
    MockMvc mockMvc;

    ObjectMapper mapper =new ObjectMapper();
    ResultActions resultActions;

    @Test
    void searchBookByTitle() throws Exception {
        Long expectedBookId = 15L;
        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/book")
                        .param("title", "To Kill a Mockingbird")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();
        System.out.println("response content " +contentAsString);
        Book[] actualBook =mapper.readValue(contentAsString, Book[].class);

        assertAll("Testing from a test-data.sql file",
                () -> assertEquals(expectedBookId, actualBook[0].getId()));
    }

    @Test
    void findAllBooks() throws Exception {
        int expectedLength = 7;
        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/books")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();
        Book[] books = mapper.readValue(contentAsString, Book[].class);

        assertAll("Testing from sql database",
                () -> assertEquals(expectedLength, books.length),
                () -> assertEquals("Pride and Prejudice", books[3].getTitle()));


    }

    @Test
    void searchByAuthor() throws Exception {
        int expectedLength = 1;
        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/book/author?name=Scott Fitzgerald")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();
        Book[] books = mapper.readValue(contentAsString, Book[].class);

        assertAll("Testing from a test-data.sql file",
                () -> assertEquals(expectedLength, books.length),
                () -> assertEquals(Genre.ROMANCE, books[0].getGenre()));

    }

    @Test
    void searchByGenre() throws Exception {
        int expectedLength = 3;
        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/book/genre?genre=FICTION")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();
        Book[] books = mapper.readValue(contentAsString, Book[].class);

        assertAll("Testing from a test-data.sql file",
                () -> assertEquals(expectedLength, books.length),
                () -> assertEquals(16, books[1].getId()));


    }

    @Test
    void searchByAvailability() throws Exception {
        int expectedLength = 7;
        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/book/availability")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();
        Book[] books = mapper.readValue(contentAsString, Book[].class);

        assertAll("Testing from a test-data.sql file",
                () -> assertEquals(expectedLength, books.length));
    }

    @Test
    void createBook() throws Exception {
        Author newAuthor = new Author();
        newAuthor.setName("Bryan Hansen");

        // Create a new book object
        Book newBook = new Book();
        newBook.setTitle("Java Bootcamp");
        newBook.setAuthor(newAuthor);
                newBook.setQuantity(10);
                newBook.setAvailable(true);
                newBook.setGenre(Genre.ROMANCE);


        String bookJson = mapper.writeValueAsString(newBook);

        // Perform POST request to create the book
        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.post("/book/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(bookJson)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        // Extract the created book from the response
        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();
        Book createdBook = mapper.readValue(contentAsString, Book.class);

        // Optionally, assert that the created book matches the expected properties
        assertAll("Testing createBook endpoint",
                () -> assertNotNull(createdBook.getId()),
                () -> assertEquals(newBook.getTitle(), createdBook.getTitle())
                // Add assertions for other properties if needed
        );
    }


}