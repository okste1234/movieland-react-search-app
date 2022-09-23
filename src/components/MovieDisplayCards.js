import React from 'react'

const MovieDisplayCards = ({ movie }) => {
    console.log(movie.i);

    return (
        <div className='movie'>
            <div>
                <p>{movie.y}</p>
            </div>
            <div>
                <img
                    src={movie?.i?.imageUrl !== undefined ? movie?.i?.imageUrl : "https://via.placeholder.com/400"}
                    alt="where is pics"
                />

            </div>
            <div>
                <span>{movie.l}</span>
                <h3>{movie.q}</h3>
            </div>
        </div>
    )
}

export default MovieDisplayCards