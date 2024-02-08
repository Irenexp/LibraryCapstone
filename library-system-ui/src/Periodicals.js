import React, { useEffect, useState } from "react";
import PeriodicalsCard from "./PeriodicalsCard";
import Dropdown from "react-bootstrap/Dropdown";
import "./Periodicals.css";

const Periodicals = () => {
  const [periodicalList, setPeriodicalList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [periodicalNameFilter, setPeriodicalNameFilter] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "http://localhost:8080/periodicals";
        if (periodicalNameFilter) {
          url = `http://localhost:8080/periodical/name?periodicalName=${periodicalNameFilter}`;
        }
        const response = await fetch(url);

        const data = await response.json();
        setPeriodicalList(data);
        setLoading(false);
      } catch (error) {
        console.error("error fetching data", console.error());
      }
    };
    fetchData();
  }, [periodicalNameFilter]);

  return (
    <div className="main-container">
      <div className="filter-container">
        <h5>Filter</h5>
        <Filter setPeriodicalNameFilter={setPeriodicalNameFilter} />
      </div>
      <div className="periodicals-container">
        <h2>List of Periodical that can be viewed in the library</h2>
        <h5>List</h5>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="periodical-list">
            {periodicalList.map((periodical) => (
              <PeriodicalsCard periodical={periodical} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Filter = ({ setPeriodicalNameFilter }) => {
  return (
    <div>
      <div>
        <Availability />
      </div>
      <div>
        <PeriodicalsName setPeriodicalNameFilter={setPeriodicalNameFilter} />
      </div>
      <div>
        <Type />
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

const PeriodicalsName = ({ setPeriodicalNameFilter }) => {
  return (
    <Dropdown className="periodicals-drpdw">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Periodical Name
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => setPeriodicalNameFilter("National Geographic")}
        >
          National Geographic
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setPeriodicalNameFilter("Nature")}>
          Nature
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => setPeriodicalNameFilter("The Economist Espresso")}
        >
          The Economist Expresso
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const Type = () => {
  return (
    <Dropdown className="type-drpdw">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Periodical Type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Magazine</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Journal</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Newsletter</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Periodicals;
