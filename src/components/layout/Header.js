import React, { useState, useEffect } from "react";
import Link from "../Link";
import "./header.css";
import axios from "axios";

export default function Header() {
  const [term, setTerm] = useState("API");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            View Source
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <header id="header">
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
            <form>
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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
}
