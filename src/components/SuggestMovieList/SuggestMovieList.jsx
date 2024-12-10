import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../Movie/Movie";

const SuggestMovieList = (props) => {
  /* useState Hook */
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  /* 실행함수 */
  async function getMovie() {
    const movieDatas = await axios.get(
      `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${props.suggestId}`
    );
    /* 첫번째 data = axios가 응답을 받았을 떄 자동으로 추가되는 프로퍼티, 실제 API 응답 본문을 갖고 있음 */
    console.log(movieDatas);
    setMovies(movieDatas.data.data.movies);
    setIsLoading(false); // 데이터 로딩 완료 설정
  }

  /* useEffect Hook */
  useEffect(() => {
    getMovie();
  }, [props.suggestId]);
  return (
    <div className="movieList_container">
      <h2>#Suggest Movie List</h2>
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
};

export default SuggestMovieList;
