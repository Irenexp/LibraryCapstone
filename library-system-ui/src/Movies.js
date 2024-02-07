import Dropdown from "react-bootstrap/Dropdown";
import './Movie.css';
import MovieCard from "./MovieCard";
import React, { useEffect, useState } from "react";


const Movies = () => {

    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:8080/movie");
  
          const data = await response.json();
          setMovieList(data);
          setLoading(false);
        } catch (error) {
          console.error("error fetching data", console.error());
        }
      };
      fetchData();
    }, []);


    return (
      <div className="main-container">
        <div className="filter-container">
          <h5>Filter</h5>
          <Filter />
        </div>
        <div className="movie-container">
          <h2>List of Movies that can be borrowed in the library</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="movie-list">
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

const Filter = () => {
  return( 
    <div>
  <div><Availability /></div>
  <div><Genre /></div>
  <div><Director /></div>
  <div><Rating /></div>
  </div>
  );

};

const Availability = () => {
  return (
    <Dropdown className="availability-drpdw">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Availability
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Available</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Not Available</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const Genre = () => {
  return (
    <Dropdown className="genre-drpdw">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Genre
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Fiction</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Romance</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Scientific</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const Director = () => {
  return (
    <Dropdown className="director-drpdw">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Director
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Christopher Nolan</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Francis Ford Coppola</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Frank Darabont</Dropdown.Item>
        <Dropdown.Item href="#/action-3">James Cameron</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Quentin Tarantino</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Robert Zemeckis</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const Rating = () => {
  return (
    <Dropdown className="rating-drpdw">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Rating
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">9</Dropdown.Item>
        <Dropdown.Item href="#/action-2">8</Dropdown.Item>
        <Dropdown.Item href="#/action-3">7</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Movies;