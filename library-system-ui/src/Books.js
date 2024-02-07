import React, { useEffect, useState } from "react";
import BooksCard from "./BooksCard";
import "./Books.css";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";

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
    <div className="Books">
      <div>
        <h2>List of Books that can be borrowed in the library</h2>
      </div>
      <div>
        <h5>List</h5>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {bookList.map((book) => (
              <li key={book.id}>
                <BooksCard book={book} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Books;
