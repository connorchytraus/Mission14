import React from "react";
import { Link } from "react-router-dom";

function TopBanner(props: any) {
  return (
    <div className="row">
      <div className="col-5">
        <br />
        <img
          src="./JoelHiltonHeadshot.jpg"
          className="rounded"
          alt="headshot of Joel Hilton"
        ></img>
      </div>

      <div className="col align-self-center text-start">
        <h1>The Joel Hilton Website</h1>
        <br />
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
}

export default TopBanner;
