import React, { useState } from 'react';
import './Movie.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';


const Movies = () => {
    return (
      <div className="movies-page-container">
        
        {/* <div className="rectangle-left"></div>
        <div className="rectangle-right"></div> */}
        <FilterSidebar/>
        
      </div>
    
    );
  }

  
  const FilterSidebar = () => {
    const [expanded, setExpanded] = useState({}); 
    
    const handleToggle = (filter) => {
      setExpanded(prevState => ({
        ...prevState,
        [filter]: !prevState[filter]
      }));
    };

      return (
        <div className="filter-sidebar">
          <h3 className="filter-header">Filters</h3>
          <div className="filter-option">
          <div className="filter-main" onClick={() => handleToggle('availability')}>
        <span className="filter-link">Availability</span>
        <span className="chevron">&gt;</span>
        </div>
        {expanded['availability'] && (
          <div className="filter-sub-options">
            <a href="#/available" className="filter-link">Available</a>
            <a href="#/unavailable" className="filter-link">Unavailable</a>
          </div>
        )}
      </div>
      </div>
        //   {/* <div className="filter-option">
        //     <a href="#genre">Genre <span className="chevron">&gt;</span></a>
        //   </div>
        //   <div className="filter-option">
        //     <a href="#director">Director <span className="chevron">&gt;</span></a>
        //   </div>
        //   <div className="filter-option">
        //     <a href="#rating">Rating <span className="chevron">&gt;</span></a>
        //   </div>
        //   <div className="filter-option">
        //     <a href="#screen-writer">Screen Writer <span className="chevron">&gt;</span></a>
        //   </div>
        //   <div className="filter-option">
        //     <a href="#release-date">Release Date <span className="chevron">&gt;</span></a>
        //   </div>
        //   <div className="filter-option">
        //     <a href="#lead-actors">Lead Actors <span className="chevron">&gt;</span></a>
        //   </div>
        //   <button className="add-to-cart-btn">Add to cart</button>
        // </div> */}
      );
  };
  
  
  export default Movies; 