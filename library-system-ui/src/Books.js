import Dropdown from "react-bootstrap/Dropdown";
import './Books.css';
import BooksCard from "./BookCard";
import React, { useEffect, useState } from "react";


const Books = () => {


    const [bookList, setBookList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:8080/books");
  
          const data = await response.json();
          setBookList(data);
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
  }

const Filter = () => {
  return( 
    <div>
  <div><Availability /></div>
  <div><Genre /></div>
  <div><Author /></div>
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