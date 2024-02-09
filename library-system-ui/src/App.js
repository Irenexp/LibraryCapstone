import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Books from "./Books";
import Movies from "./Movies";
import Periodicals from "./Periodicals";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PeriodicalPdf from "./PeriodicalPdf";

const App = () => {
  return (
    <CartProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          {/* Home route shows
        MainContent */}
          <Route path="/books" element={<Books />} />
          {/* Books route */}
          <Route path="/movies" element={<Movies />} />
          {/* Movies route */}
          <Route path="/periodicals" element={<Periodicals />} />
          {/* Periodicals
        route */}
          <Route path="/cart" element={<Cart />} />
          {/* Cart route */}
          <Route path="/pdfViewer" element={<PeriodicalPdf />} /> //periodical
          pdf viewer
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
};
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">Library</div>
      <div className="nav-items">
        <Link to="/" id="home-link">
          Home
        </Link>
        <Link to="/books" id="books-link">
          Books
        </Link>
        <Link to="/movies" id="movies-link">
          Movies
        </Link>
        <Link to="/periodicals" id="periodicals-link">
          Periodicals
        </Link>
      </div>
      <SearchBar />
      <UserAccount />
      <Link to="/cart" id="cart-link">
        <img src="cart-icon.png" alt="Cart" className="cart-icon" />
      </Link>
    </div>
  );
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting in the traditional way

    if (searchTerm === "books") {
      navigate("/books");
    } else if (searchTerm === "movies") {
      navigate("/movies");
    } else if (searchTerm === "periodicals") {
      navigate("/periodicals");
    } else {
      alert('Please search for "books", "movies", or "periodicals"');
    }

    setSearchTerm(""); // Reset the search term
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
};

const UserAccount = () => {
  return <div className="user-account">Andrew Swinney</div>;
};

const MainContent = () => {
  const logoImage = process.env.PUBLIC_URL + "capstone_library_image.jpg";

  return (
    <div className="content-container">
      <div className="welcome-text">
        <p>Welcome to Opps Library</p>
        <p>From the library, you can borrow books and movies.</p>
      </div>
      <div className="library-image">
        <img src={logoImage} alt="Library Interior" />
      </div>
    </div>
  );
};

const Footer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <footer>
      <div className="block">
        <div className="footer-content">
          <span classname="footer-text">
            &copy; OLS | {currentDate.getFullYear()}
          </span>
          <span classname="footer-time"> {currentDate.toLocaleString()}</span>
        </div>
      </div>
    </footer>
  );
};

export default App;
