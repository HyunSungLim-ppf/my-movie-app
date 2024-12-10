import React, { useEffect, useState } from "react";
import "./movieInfo.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import SuggestMovieList from "../SuggestMovieList/SuggestMovieList";

const MovieInfo = () => {
  /* useState Hook */
  const [isLoading, setIsLoading] = useState(true);
  const [movieId, setMovieId] = useState(0);
  const [movieDetail, setMovieDetail] = useState([]);
  const { movie_id } = useParams();

  /* 실행함수 */
  async function getMovieDetail(id) {
    const movieDetailData = await axios.get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    console.log(movieDetailData.data.data);
    setMovieDetail(movieDetailData.data.data.movie);
    setIsLoading(false); // 데이터 로딩 완료 설정
  }

  /* useEffect Hook */
  useEffect(() => {
    setMovieId(movie_id);
    getMovieDetail(movie_id);
  }, [movie_id]);
  return (
    <div className="movie_info_container">
        {/* Movie Detail */}
      {isLoading ? (
        <h2>Loding...</h2>
      ) : (
        <div className="container">
          {/* Cover Image */}
          <img
            src={`${movieDetail.large_cover_image}`}
            alt="Cover Image"
            id="cover_img"
          />
          <div
            className="detail_container"
            style={{ backgroundImage: `url(${movieDetail.background_image})` }}
          >
            {/* Title */}
            <h2>{movieDetail.title}</h2>
            {/* Year */}
            <h3>Year : {movieDetail.year}</h3>
            {/* Runtime */}
            <h3>
              Runtime : {Math.floor(movieDetail.runtime / 60)}H{" "}
              {movieDetail.runtime % 60}M🎞
            </h3>
            {/* Rating */}
            <h3>Rating : {movieDetail.rating}⭐</h3>
            {/* Genres */}
            <ul className="movie_genre">
              {/* {movieDetail.genres?movieDetail.genres.map(genre => 
                <li>#{genre}</li>
            ):<li>None</li>} */}
              {movieDetail.genres.map((genre) => (
                <li>#{genre}</li>
              ))}
            </ul>
            {/* Description */}
            <div id="description">
              <h3>Description</h3>
              <div className="text">
                {/* {movieDetail.description_intro ? "None": (movieDetail.description_intro.slice(0, 800))} */}
                {movieDetail.description_intro === null ? "None": (movieDetail.description_intro.slice(0, 800))}
              </div>
            </div>
          </div>

          
        </div>
      )}

    {/* Movie Suggest */}
    {isLoading ? (<h2>Loding...</h2>):(
        // {/* SuggestMovieList */}
        <div className="suggestMovieList">
        <SuggestMovieList suggestId={movie_id}></SuggestMovieList>
        </div>
    )}
    </div>
  );
};

export default MovieInfo;
