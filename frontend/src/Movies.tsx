// import React, { useState } from "react";
// import data from "./MovieData.json";
import { Link } from "react-router-dom";
import MoviesList from "./movies/MoviesList";

//bring in the movie data
// const mds = data.MovieData;

function DisplayMovies() {
  //ignore this unless CRUD

  //   const [listMovies, setListMovies] = useState(mds);

  //   const addMovie = () => {
  //     setListMovies([
  //       ...mds,
  //       {
  //         Category: "Action/Adventure",
  //         Title: "Puss 'n Boots",
  //         Year: "2023",
  //         Director: "Spencer Hilton",
  //         Rating: "PG",
  //         Edited: "No",
  //       },
  //     ]);
  //   };

  return (
    <div>
      <div>
        <br />
        <h3>Joel Hilton's Movie Collection</h3>
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
      <>
        <MoviesList />
      </>
    </div>

    //   <div>
    //     <table className="table table-light table-striped">
    //       <thead className="thead-dark">
    //         <tr>
    //           <th>Title</th>
    //           <th>Year</th>
    //           <th>Director</th>
    //           <th>Rating</th>
    //           <th>Category</th>
    //           <th>Edited</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {/* change this to listMovies instead of mds */}
    // {mds.map((m) => (
    //           <tr>
    //             <td>{m.Title}</td>
    //             <td>{m.Year}</td>
    //             <td>{m.Director}</td>
    //             <td>{m.Rating}</td>
    //             <td>{m.Category}</td>
    //             <td>{m.Edited}</td>
    //           </tr>
    //         ))}
    //       </tbody> */}
    //     </table>
    //   </div> */}
    //   {/* <button className="btn btn-primary" onClick={addMovie}> */}
    //     Add Movie
    //   </button> */}
    // </div>
  );
}

export default DisplayMovies;
