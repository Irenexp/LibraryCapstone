import React from 'react';
import './Movie.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';


const Movies = () => {
    return (
      <div className="movies-page-container">
        <div className="rectangle-left"></div>
        <div className="rectangle-right"></div>
        <Filters/>
        
      </div>
    
    );
  }

  const Filters = () => {
    return (
      <div>
        <h3 className="filter-header">Filters</h3>
        <DropdownButton id="dropdown-availability" title="Availability">
          <Dropdown.Item href="#/available">Available</Dropdown.Item>
          <Dropdown.Item href="#/unavailable">Unavailable</Dropdown.Item>
        </DropdownButton>
  
        <DropdownButton id="dropdown-genre" title="Genre">
          <Dropdown.Item href="#/action">Action</Dropdown.Item>
          <Dropdown.Item href="#/romance">Romance</Dropdown.Item>
          <Dropdown.Item href="#/thriller">Thriller</Dropdown.Item>
          {/* Add more genres as needed */}
        </DropdownButton>
  
        <DropdownButton id="dropdown-author" title="Author">
          <Dropdown.Item href="#/author1">Author 1</Dropdown.Item>
          <Dropdown.Item href="#/author2">Author 2</Dropdown.Item>
          <Dropdown.Item href="#/author3">Author 3</Dropdown.Item>
          {/* Add more authors as needed */}
        </DropdownButton>
      </div>
    );
  };

  export default Movies; 