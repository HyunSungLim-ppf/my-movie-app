import React from 'react'
import './movie.css'
import { Link } from 'react-router-dom'

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <div className='movie'>
            <Link to={`../movieInfo/${id}`}>
            <img src={ poster } alt={ title } className='movie_poster' />
            <div className='movie_data' >
                <h3>{ title }</h3>
                <h4>{ year }</h4>
                <ul>
                    { genres.map((genre, index) => (<li key={ index }> #{ genre}</li>)) }
                </ul>
                {/* <p>{ summary.slice(0,180) }...</p> */}
            </div>
            </Link>
        </div>
    )
}
export default Movie