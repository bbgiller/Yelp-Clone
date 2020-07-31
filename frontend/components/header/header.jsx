import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({ currentUser, logout }) => {
    const searchBar = () => (
      <div> 
      <Link to="/" className="header-logo">
        yalp <p className="symbol">ꕤ</p>
      </Link>
      <div className="searchbar-container">
      <form className="searchbar">
        <input className="searchbar-input" type="text" value={null} placeholder="Find restaurants" className="searchbar-input"/>

      </form>
      <Link to="/businesses" className="all-businesses-link">All Businesses!</Link>
      </div>
      </div>
    );

    const sessionLinks = () => (
      <div className="main-header">
      <nav className="login-signup">
        <Link to="/login" className="login-link">Log In</Link>
        &nbsp; &nbsp;
        <Link to="/signup" className="signup-link">Sign up</Link>
      </nav>
       <div>{searchBar()}</div>
       </div>
    );
    const personalGreeting = () => (
      <div className="main-header">
        
        <hgroup className="login-signup">
          <h2 className="header-name">Hi, {currentUser.email}!     </h2>
          <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
        <div>{searchBar()}</div>
      </div>
    );
      
    // debugger
    return currentUser ? personalGreeting() : sessionLinks();
  };
  
  
  export default Header;