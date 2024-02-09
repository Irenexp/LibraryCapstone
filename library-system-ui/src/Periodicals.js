import React, { useEffect, useState } from "react";
import PeriodicalsCard from "./PeriodicalsCard";
import Dropdown from "react-bootstrap/Dropdown";
import "./Periodicals.css";

const Periodicals = () => {
  const [periodicalList, setPeriodicalList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [periodicalNameFilter, setPeriodicalNameFilter] = useState();
  const [periodicalTypeFilter, setPeriodicalTypeFilter] = useState();
  const resetFilters = () => {
    setPeriodicalNameFilter("");
    setPeriodicalTypeFilter("");
  };
  const backgroundImageUrl =
    process.env.PUBLIC_URL + "capstone_library_image.jpg";

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
        <h5 className="filter"> Filters</h5>
        <Filter
          setPeriodicalNameFilter={setPeriodicalNameFilter}
          setPeriodicalTypeFilter={setPeriodicalTypeFilter}
          resetFilters={resetFilters}
        />
      </div>
      <div
        className="periodicals-container"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="books-title">Periodicals</h2>

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

const Filter = ({
  setPeriodicalNameFilter,
  setPeriodicalTypeFilter,
  resetFilters,
}) => {
  return (
    <div>
      <div>All Periodicals</div>
      <div>
        <PeriodicalsName setPeriodicalNameFilter={setPeriodicalNameFilter} />
      </div>
      <div>
        <Type setPeriodicalTypeFilter={setPeriodicalTypeFilter} />
      </div>
      <div>
        <button className="reset-filters-btn" onClick={resetFilters}>
          Reset Filters
        </button>
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
