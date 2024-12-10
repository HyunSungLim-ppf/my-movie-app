import React from "react";
import { useSelector } from "react-redux";
import { GenreBtn } from "../GenreBtn/GenreBtn";
import "./genreBtnList.css";

export const GenreBtnList = () => {
    const genreArr = useSelector((state) => state.movieGenres);
    return (
        <div className="genreBtnList_container" style={{ backgroundImage: "url(/my-movie-app/images/genreListBtn/genreBtnList_bg.png)" }}>
            {/* BTN List */}
            <div className="btn_list">
                {genreArr.map((genre) => {
                    return <GenreBtn label={genre} />;
                })}
            </div>
        </div>
    );
};
