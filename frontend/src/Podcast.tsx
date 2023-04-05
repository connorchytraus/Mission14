import React from "react";
import { Link } from "react-router-dom";
//comments about the podcast page
const Podcast = () => {
  return (
    <div>
      <div>
        <h2>Welcome to the Podcasts Page</h2>
        {/* link to baconsale */}
        <a href="https://baconsale.com" className="btn btn-outline-success">
          Access the Podcast
        </a>
        <ul className="list-group list-group-flush">
          <>
            <Link to="/" className="list-group-item">
              Home
            </Link>
          </>
          <>
            <Link to="/podcast" className="list-group-item">
              Podcast
            </Link>
          </>
          <>
            <Link to="/movies" className="list-group-item">
              Movies List
            </Link>
          </>
        </ul>
      </div>
    </div>
  );
};

export default Podcast;
