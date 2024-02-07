import React, { useEffect, useState } from "react";
import PeriodicalCard from "./PeriodicalCard";
import Dropdown from "react-bootstrap/Dropdown";
import "./Periodical.css";

const Filter = () => {
  return (
    <div>
      <div>
        <Availability />
      </div>
      <div>
        <Genre />
      </div>
      <div>
        <Author />
      </div>
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

const Periodicals = () => {
  const [periodicalList, setPeriodicalList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/periodicals");

        const data = await response.json();
        setPeriodicalList(data);
        setLoading(false);
      } catch (error) {
        console.error("error fetching data", console.error());
      }
    };
    fetchData();
  }, []);

  return (
    <div className="Periodical">
      <div>
        <h2>List of Periodicals that can be viewed in the library</h2>
      </div>
      <div className="container">
        <div className="filter">
          <h5>Filter</h5>
          <Filter />
        </div>
        <div className="book-list">
          <h5>Book List</h5>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {periodicalList.map((periodical) => (
                <li key={periodical.id}>
                  <PeriodicalCard periodical={periodical} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Periodicals;
