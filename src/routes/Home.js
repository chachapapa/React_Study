import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    // const response = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    // );
    // const json = await response.json();
    //위를 더 줄이면
    //아래와 같다

    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };


  useEffect(() => {
    getMovies();
    //요즘은 뺏지 안쓰고 async-await를 더 많이쓴다..!
    // fetch(
    //
    // )
    //   .then((resp) => resp.json())
    //   .then((json) => {
    //     setMovies(json);
    //     setLoading(false);
    //   });
  }, []);


  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.id}></Movie>
          ))}
        </div>
      )}
    </div>
  );


};

export default Home;
