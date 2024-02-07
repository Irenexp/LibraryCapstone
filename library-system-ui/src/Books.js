//import React, {useState, useEffect} from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import './Books.css';

const Books = () => {
  return (
    <div>
      <div>
        <h4>Books </h4>
      </div>
      <div className="container">
        <div className="filter">
          <h5>Filter</h5>
          <Filter />
        </div>
        <div className="books">
          <h5>List</h5>
        </div>
      </div>
    </div>
  );
};

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
