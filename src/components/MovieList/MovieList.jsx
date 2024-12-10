import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "../Movie/Movie";
import './movieList.css';

export const MovieList = () => {
  /* useState Hook */
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [movieGenre, setMovieGenre] = useState("");
  const { genre } = useParams();

  /* 실행함수 */
  async function getMovie() {
    const movieDate = await axios.get(
      `https://yts.mx/api/v2/list_movies.json?genre=${genre}&sort_by=rating&limit=50`
    );
    /* 첫번째 data = axios가 응답을 받았을 떄 자동으로 추가되는 프로퍼티, 실제 API 응답 본문을 갖고 있음 */
    setMovies(movieDate.data.data.movies);
    setIsLoading(false); // 데이터 로딩 완료 설정
  }

  /* useEffect Hook */
  useEffect(() => {
    setMovieGenre(genre);
    getMovie();
  }, [movieGenre]);

  return (
    <div className="movieList_container">
      <h2>#{genre} Movie List TOP 50</h2>
      {isLoading ? (
        <div className="loader">
          <span>Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
  // return <div>123</div>;
};
