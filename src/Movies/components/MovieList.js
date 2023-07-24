import React from "react";


const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container col-md-1 d-flex justify-content-start m-5' >
                    <img src={movie.Poster} alt="movies"></img>
                    <div 
                        onClick={() => props.handleFavouritesClick(movie)} 
                        className="overlay d-flex align-items-center justify-content-center"
                    >
                        <FavouriteComponent />
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;