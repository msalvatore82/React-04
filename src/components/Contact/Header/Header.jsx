import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
       <div className="contenedor-nav">
    <nav className="nav">
        <p>
          <Link to="/home">Home</Link>
        </p>
        <p>
          <Link to="/form">Form</Link>
        </p>
        <p>
          <Link to="/play">Play</Link>
        </p>

       </nav>
      </div>
  );
};

export default Header;