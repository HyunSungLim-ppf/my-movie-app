import React from 'react'
import './commingMovie.css'

export const CommingMovie = (props) => {
    const {id, imgSrc, commingDate, traillerLink} = props;
    return (
        <div className="new_movie_card">
            {/* title img */}
            <img src={imgSrc} alt="new movie logo 01" />
            {/* UpComming Text */}
            <h2>Comming<br />{commingDate}</h2>
            {/* Get Trailler BTN */}
            <a href={traillerLink} target="_blank" rel="noopener noreferrer">Go Trailler</a>
        </div>
    )
}
