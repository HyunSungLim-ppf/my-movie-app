import React from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./genreBtn.css";
const Container = styled.div``;
export const GenreBtn = (props) => {
  const label = props.label
  const dispatch = useDispatch();
  const getMovieList = (e) => {
    dispatch({ type: "getMovieList" });
  };
  return (
    <div className="btn_container">
      <Link to={`/movieList/${label}`} onClick={getMovieList} className="btn">
        #{label}
      </Link>
    </div>
  );
};
