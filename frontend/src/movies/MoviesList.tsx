import { useEffect, useState } from "react";
import { Movies } from "../types/movies";

function MoviesList() {
  const [movieData, setMovieData] = useState<Movies[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const rsp = await fetch("https://localhost:4000/movies");
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <table className="table table-light table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {/* pull from api here */}
          {movieData.map((m) => (
            <tr key={m.movieId}>
              <td>{m.title}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.category}</td>
              <td>{m.edited}</td>
              <td>{m.lentto}</td>
              <td>{m.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MoviesList;
