import { Dropdown } from 'react-bootstrap';
import "./Books.css";
import BooksCard from "./BookCard";
import React, { useEffect, useState } from "react";


const Filter = ({ setAvailabilityFilter, setGenreFilter, setAuthorFilter, resetFilters}) => {
  return (
    <div>
      <div>
        <Availability setAvailabilityFilter={setAvailabilityFilter} />
      </div>
      <div>
        <Genre setGenreFilter={setGenreFilter} />
      </div>
      <div>
        <Author setAuthorFilter={setAuthorFilter} />
      </div>
      <div><button className="reset-filters-btn" onClick={resetFilters}>Reset Filters</button></div>
    </div>
  );
};


const Books = () => {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [availabilityFilter, setAvailabilityFilter] = useState();
  const [genreFilter, setGenreFilter] = useState();
  const [authorFilter, setAuthorFilter] = useState();
  const resetFilters = () => {
    setAvailabilityFilter('');
    setGenreFilter('');
    setAuthorFilter('');
 };

  const backgroundImageUrl = process.env.PUBLIC_URL + 'capstone_library_image.jpg'; 


  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "http://localhost:8080/books";
        if (genreFilter) {
          url = `http://localhost:8080/book/genre?genre=${genreFilter}`;
        }
        if (availabilityFilter==="available") {
          url = `http://localhost:8080/book/availability?isAvailable=true`;
        }
        if (authorFilter) {
          url = `http://localhost:8080/book/author?name=${authorFilter}`;
        }
        const response = await fetch(url);


        const data = await response.json();
        setBookList(data);
        setLoading(false);
      } catch (error) {
        console.error("error fetching data", console.error());
      }
    };
    fetchData();
  }, [genreFilter, availabilityFilter, authorFilter]);


  return (
    <div className="main-container">
      <div className="filter-container">
        {/* Filter UI */}
        <h5 className="filter">Filters</h5>
        <Filter 
          setAvailabilityFilter={setAvailabilityFilter}
          setGenreFilter={setGenreFilter}
          setAuthorFilter={setAuthorFilter}
          resetFilters={resetFilters}
        />
      </div>
      <div className="books-container" style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        <h2 className="books-title">Books</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="books-list">
            {bookList.map((book) => (
              <BooksCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


const Availability = ({ setAvailabilityFilter }) => {
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


const Genre = ({ setGenreFilter }) => {
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


const Author = ({ setAuthorFilter }) => {
  return (
    <Dropdown className="author-drpdw">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Author
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setAuthorFilter("Harper")}>
          Harper Lee
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setAuthorFilter("George")}>
          George Orwell
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setAuthorFilter("Jane")}>
          Jane Austen
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setAuthorFilter("Scott")}>
          Scott Fitzgerald
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setAuthorFilter("Suzanne")}>
          Suzanne Collins
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setAuthorFilter("Dan")}>
          Dan Brown
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setAuthorFilter("Paulo")}>
          Paulo Coelho
        </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  );
};


export default Books;