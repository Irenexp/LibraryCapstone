import Dropdown from "react-bootstrap/Dropdown";
import "./Books.css";
import BooksCard from "./BookCard";
import React, { useEffect, useState } from "react";

const Books = () => {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [availabilityFilter, setAvailabilityFilter] = useState();
  const [genreFilter, setGenreFilter] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "http://localhost:8080/books";
        if (genreFilter) {
          url = `http://localhost:8080/book/genre?genre=${genreFilter}`;
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
  }, [genreFilter]);

  return (
    <div className="main-container">
      <div className="filter-container">
        <h5>Filter</h5>
        <Filter
          setAvailabilityFilter={setAvailabilityFilter}
          setGenreFilter={setGenreFilter}
        />
      </div>
      <div className="books-container">
        <h2>List of Books that can be borrowed in the library</h2>
        <h5>List</h5>
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

const Filter = ({ setAvailabilityFilter, setGenreFilter }) => {
  return (
    <div>
      <div>
        <Availability setAvailabilityFilter={setAvailabilityFilter} />
      </div>
      <div>
        <Genre setGenreFilter={setGenreFilter} />
      </div>
      <div>
        <Author />
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

const Author = () => {
  return (
    <Dropdown className="author-drpdw">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Author
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Harper Lee</Dropdown.Item>
        <Dropdown.Item href="#/action-2">George Orwell</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Jane Austen</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Scott Fitzgerald</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Suzanne Collins</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Dan Brown</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Paulo Coelho</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Books;
