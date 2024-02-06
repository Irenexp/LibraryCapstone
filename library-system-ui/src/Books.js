//import React, {useState, useEffect} from 'react';
//import Dropdown from 'react-bootstrap/Dropdown';
import './Books.css';

const Books = () => {
    return (
      <div>
      <div>
        <h2>Books </h2>
      </div>
      <div>
      <Filter/>
      </div>
      </div>
      );
  }

const Filter = () =>{
  <FilterComp/>
}

const FilterComp = () => {
  return (
    // <Dropdown>
    //   <Dropdown.Toggle variant="success" id="dropdown-basic">
    //     Dropdown Button
    //   </Dropdown.Toggle>

    //   <Dropdown.Menu>
    //     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    //     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    //     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    //   </Dropdown.Menu>
    // </Dropdown>

    <div className="filter-container">
      <label className="filter-label">Filter Options:</label>
      <select className="filter-dropdown">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <button className="filter-button">Apply Filter</button>
    </div>
  );
}

  export default Books; 