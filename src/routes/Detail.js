import { useEffect, useState } from "react";
// import Movie from "../components/Movie";
import { json, useParams } from "react-router";

const Detail = () => {
  const id = useParams().id;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {

      const json = async () => {
        await (
          await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`)
        ).json()
        setMovie(json.data.movie);
      };
    };
    console.log(json)
    getMovie();
  }, [movie, id]);
//   console.log(movie);
  return (
    <div>
      <h1>Detail</h1>
      {/* <Movie movie={movie}></Movie> */}
    </div>
  );
};

export default Detail;
