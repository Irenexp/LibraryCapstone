import './App.css';
import React, {useState, useEffect} from 'react';


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <MainContent/>
      <Footer/>
    </div>
  );
}

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">Library</div>
      <div className="nav-items">
        <a href="#home">Home</a>
        <a href="#books">Books</a>
        <a href="#movies">Movies</a>
        <a href="#periodicals">Periodicals</a>
      </div>
      <SearchBar />
      <UserAccount />
    </div>
  );
}

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" />
      <button type="submit">🔍</button>
    </div>
  );
}

const UserAccount = () => {
  return (
    <div className="user-account">
      Andrew Swinney
    </div>
  );
}

const MainContent = () => {
  const logoImage = process.env.PUBLIC_URL + 'capstone_library_image.jpg';

  return (
    <div className="content-container">
      <div className="welcome-text">
        <h1>Welcome to Opps Library</h1>
        <p>From the library, you can borrow books and movies.</p>
      </div>
      <div className="library-image">
        <img src={logoImage} alt="Library Interior" />
      </div>
    </div>
  );
}

const Footer = () => {

  const [currentDate, setCurrentDate]=useState(new Date());
  
  useEffect(()=>{
      const intervalId = setInterval(()=>{
          setCurrentDate(new Date()); 
  },1000);
  return()=>clearInterval(intervalId);
  }, [])
return (
  <footer>
    <div className="block">
    <div className="footer-content">
          <span classname = "footer-text">&copy; TWG | {currentDate.getFullYear()}</span> 
          <span classname = "footer-time"> {currentDate.toLocaleString()}</span>
       </div>
       </div>
  </footer>
);
};

export default App;

