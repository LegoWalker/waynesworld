import React from "react";


const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='col-md-1 d-flex justify-content-start m-5' >
                    <img src={movie.Poster} alt="movies"></img>
                </div>
            ))}
        </>
    );
};

export default MovieList;