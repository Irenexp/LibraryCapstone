import React, { useEffect, useState } from "react";
import PeriodicalCard from "./PeriodicalCard";

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
    <div>
      <h2>List of Periodicals that can be viewed in the library</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {periodicalList.map((periodical) => (
            <li key={periodical.id}>
              {/*<p>Title: {book.title}</p>*/}
              <PeriodicalCard periodical={periodical} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Periodicals;
