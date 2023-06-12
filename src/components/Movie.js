import { Link } from "react-router-dom";


const Movie = ({movie}) => {
  return (
    <div key={movie.id}>
      <h2><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h2>
      <img src={movie.medium_cover_image} />
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((g) => {
          return <li key={g}>{g}</li>;
        })}
      </ul>
    </div>
  );
};

export default Movie;
