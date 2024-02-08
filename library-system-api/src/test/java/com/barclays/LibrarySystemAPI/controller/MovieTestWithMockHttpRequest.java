package com.barclays.LibrarySystemAPI.controller;

import com.barclays.LibrarySystemAPI.model.Genre;
import com.barclays.LibrarySystemAPI.model.Movie;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeEach;
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

import java.io.UnsupportedEncodingException;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@Sql("classpath:test-data.sql")
@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@TestPropertySource(properties = {"spring.sql.init.mode=never"})
@Slf4j
class MovieTestWithMockHttpRequest {

    @Autowired
    MockMvc mockMvc;


    ObjectMapper mapper =new ObjectMapper();
    ResultActions resultActions;

    @BeforeEach
    void setUp() {
    }

    @Test
    void searchMovieByTitle() throws Exception {
        int expectedLength = 1;
        long expectedId = 1;
        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/movie")
                        .param("title", "Titanic")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();
        log.debug("response content " +contentAsString);
        Movie[] movies =mapper.readValue(contentAsString, Movie[].class);
        log.debug("movie length "+ movies.length);
        for ( Movie m: movies
        ){
            System.out.println("Movies list: " + m);
        }

        assertAll("Testing endpoint to database ",
                //() -> assertEquals(expecte dLength, movies.length));
                () -> assertEquals(expectedId, movies[0].getId()));


    }

    @Test
    void searchMovieByDirectorContaining() throws Exception {
        int expectedLength = 2;
        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/movie/director?name=Christopher Nolan")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();
        Movie[] movies =mapper.readValue(contentAsString, Movie[].class);

        assertAll("Testing from a test-data.sql file",
              () -> assertEquals(expectedLength, movies.length),
                () -> assertEquals(Genre.ACTION, movies[0].getGenre()));


    }

    @Test
    void searchMovieByGenre() throws Exception {
        int expectedLength = 2;
        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/movie/genre?genre=ROMANCE")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();
        Movie[] movies = mapper.readValue(contentAsString, Movie[].class);

        assertAll("Testing from mySQL Database",
                () -> assertEquals(expectedLength, movies.length),
                () -> assertEquals("Titanic", movies[0].getTitle()));



    }



    @Test
    void findAllMovies() throws Exception {
        int expectedLength = 7;
        ResultActions resultActions = this.mockMvc.perform(MockMvcRequestBuilders.get("/movie")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());

        MvcResult result = resultActions.andReturn();
        String contentAsString = result.getResponse().getContentAsString();
        Movie[] movies = mapper.readValue(contentAsString, Movie[].class);

        assertAll("Testing from a test-data.sql file",
                () -> assertEquals(expectedLength, movies.length),
                () -> assertEquals("James Cameron", movies[0].getScreenWriter()));
    }


}