import React, { useState } from "react";
import Link from "../Link";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div>
      <header id="header" className="mb-8">
        <nav id="navbar" className="navbar navbar-expand-lg">
          <Link className="navbar-brand px-2 py-0" href="/">
            Seach_APIs
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </button>

          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link m-2 text-capitalize " href="/">
                  Wikipedia
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link m-2 text-capitalize" href="/youtube">
                  Youtube
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link m-2 text-capitalize" href="/unsplash">
                  Unsplash
                </Link>
              </li>
            </ul>
            <form onSubmit={onSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
                <div className="input-group-append">
                  <button className="btn search-btn" type="button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default SearchBar;
