import { Dropdown } from 'react-bootstrap';
import './Movie.css';
import MovieCard from "./MovieCard";
import React, { useEffect, useState } from "react";


const Movies = () => {

    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [availabilityFilter, setAvailabilityFilter] = useState('');
    const [genreFilter, setGenreFilter] = useState('');
    const [directorFilter, setDirectorFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');
    const resetFilters = () => {
        setAvailabilityFilter('');
        setGenreFilter('');
        setDirectorFilter('');
        setRatingFilter('');
    };

    const backgroundImageUrl = process.env.PUBLIC_URL + 'capstone_library_image.jpg'; 
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = new URL("http://localhost:8080/movie");

                if (genreFilter) {
                    url.pathname += "/genre";
                    url.searchParams.append("genre", genreFilter);
                }

                if (directorFilter) {
                    url.pathname += "/director";
                    url.searchParams.append("name", directorFilter); // Make sure to use 'name', not 'director'
                }

                if (ratingFilter && ratingFilter.min !== undefined && ratingFilter.max !== undefined) {
                    url.pathname += "/rating";
                    url.searchParams.append("minRating", ratingFilter.min);
                    url.searchParams.append("maxRating", ratingFilter.max);
                }

                const response = await fetch(url.toString());

                const data = await response.json();
                setMovieList(data);
                setLoading(false);
            } catch (error) {
                console.error("error fetching data", console.error());
            }
        };
        fetchData();
    }, [genreFilter, availabilityFilter, directorFilter, ratingFilter]);


    return (
        <div className="main-container">
            <div className="filter-container">
                <h5 className = "filter">Filters</h5>
                <Filter setAvailabilityFilter={setAvailabilityFilter}
                        setGenreFilter={setGenreFilter} setDirectorFilter={setDirectorFilter}
                        setRatingFilter = {setRatingFilter}
                        resetFilters={resetFilters}/>
            </div>
            <div className="movie-container" style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${backgroundImageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
      }}>
                <h2 className="books-title">Movies</h2>
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

const Filter = ({setAvailabilityFilter, setGenreFilter, setDirectorFilter, setRatingFilter, resetFilters }) => {
    return(
        <div>
            <div><Availability setAvailabilityFilter={setAvailabilityFilter} /></div>
            <div><Genre setGenreFilter = {setGenreFilter} /></div>
            <div><Director setDirectorFilter = {setDirectorFilter}/></div>
            <div><Rating setRatingFilter = {setRatingFilter}/></div>
            <div> <button className="reset-filters-btn" onClick={resetFilters}>Reset Filters</button>
        </div>
            
        </div>
    );

};

const Availability = ( {setAvailabilityFilter} ) => {
    return (
        <Dropdown className="availability-drpdw">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Availability
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => setAvailabilityFilter("available")}>
                    Available
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setAvailabilityFilter("unavailable")}>
                    Not Available
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

const Genre = ( {setGenreFilter} ) => {
    return (
        <Dropdown className="genre-drpdw">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Genre
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => setGenreFilter("FICTION")}>
                    Fiction
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setGenreFilter("ROMANCE")}>
                    Romance
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setGenreFilter("ACTION")}>
                    Action
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setGenreFilter("SCIENTIFIC")}>
                    Scientific
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setGenreFilter("THRILLER")}>
                    Thriller
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

const Director = ({setDirectorFilter}) => {
    const toggleStyles = { fontFamily: 'Raleway', fontWeight: 900 };
    return (
        <Dropdown className="director-drpdw">
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={toggleStyles}>
                Director
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => setDirectorFilter("Christopher Nolan")}>
                    Christopher Nolan
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setDirectorFilter("Francis Ford Coppola")}>
                    Francis Ford Coppola
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setDirectorFilter("Frank Darabont")}>
                    Frank Darabont
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setDirectorFilter("James Cameron")}>
                    James Cameron
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setDirectorFilter("Quentin Tarantino")}>
                    Quentin Tarantino
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setDirectorFilter("Robert Zemeckis")}>
                    Robert Zemeckis
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

const Rating = ({ setRatingFilter }) => {

    const toggleStyles = { fontFamily: 'Raleway', fontWeight: 900 };
    return (
        <Dropdown className="rating-drpdw">
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={toggleStyles}>
                Rating Range
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => setRatingFilter({ min: 9, max: 10 })}>
                    9 - 10
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setRatingFilter({ min: 8, max: 9 })}>
                    8 - 9
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setRatingFilter({ min: 7, max: 8 })}>
                    7 - 8
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Movies;
