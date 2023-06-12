import { useEffect, useState } from "react";
import {useParams } from "react-router";
import Movie from '../components/Movie'

const Detail = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  const getMovie = async()=>{
    const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    
    setMovie(json.data.movie)
    setLoading(false);
    // console.log(movie);
  }
  

useEffect(()=>{
  getMovie();
},[])

  return (
    <div>
      <h1>Detail</h1>

      {loading ? (
        <h2>loading...</h2>
      ) : (
        <Movie movie={movie}></Movie>
      )}
      
    </div>
  );
};

export default Detail;
