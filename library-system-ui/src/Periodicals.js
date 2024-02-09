import React, { useEffect, useState } from "react";
import PeriodicalsCard from "./PeriodicalsCard";
import Dropdown from "react-bootstrap/Dropdown";
import "./Periodicals.css";

const Periodicals = () => {
  const [periodicalList, setPeriodicalList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [periodicalNameFilter, setPeriodicalNameFilter] = useState();
  const [periodicalTypeFilter, setPeriodicalTypeFilter] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "http://localhost:8080/periodicals";
        if (periodicalNameFilter) {
          url = `http://localhost:8080/periodicals/name?periodicalName=${periodicalNameFilter}`;
        }

        if (periodicalTypeFilter) {
          url = `http://localhost:8080/periodicals/type?type=${periodicalTypeFilter}`;
        }

        const response = await fetch(url);

        const data = await response.json();

        setPeriodicalList(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [periodicalNameFilter, periodicalTypeFilter]);

  console.log("data", periodicalList);
  return (
    <div className="main-container">
      <div className="filter-container">
        <h5>Filter</h5>
        <Filter
          setPeriodicalNameFilter={setPeriodicalNameFilter}
          setPeriodicalTypeFilter={setPeriodicalTypeFilter}
        />
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

const Filter = ({ setPeriodicalNameFilter, setPeriodicalTypeFilter }) => {
  return (
    <div>
      <div>All Periodicals</div>
      <div>
        <PeriodicalsName setPeriodicalNameFilter={setPeriodicalNameFilter} />
      </div>
      <div>
        <Type setPeriodicalTypeFilter={setPeriodicalTypeFilter} />
      </div>
    </div>
  );
};

const PeriodicalsName = ({ setPeriodicalNameFilter }) => {
  return (
    <Dropdown className="periodicals-drpdw">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Periodical Title
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

const Type = ({ setPeriodicalTypeFilter }) => {
  return (
    <Dropdown className="type-drpdw">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Periodical Type
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => setPeriodicalTypeFilter("Magazine")}>
          Magazine
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setPeriodicalTypeFilter("Journal")}>
          Journal
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setPeriodicalTypeFilter("Newsletter")}>
          Newsletter
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Periodicals;
