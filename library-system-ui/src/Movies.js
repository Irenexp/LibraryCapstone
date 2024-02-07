import React, { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import "./Movies.css";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";

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
    <div className="Movie">
      <div>
        <h2>List of Movies that can be borrowed in the library</h2>
      </div>
      <div>
        <h5>List</h5>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {movieList.map((movie) => (
              <li key={movie.id}>
                {/*<p>Title: {book.title}</p>*/}
                <MoviesCard movie={movie} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Movies;
