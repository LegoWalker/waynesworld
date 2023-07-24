import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Movies/Movies.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourite from "./components/RemoveFavourites";


const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([])
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) => {
        const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=c356b86d`;
        //const url = "https://www.omdbapi.com/?s=avengers&apikey=c356b86d";
        //http://www.omdbapi.com/?i=tt3896198&apikey=263d22d8

        const response = await fetch(url);
        const responseJson = await response.json();

        //console.log(responseJson);

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    }

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    useEffect(() => {
        const MovieFavourites = JSON.parse(
            localStorage.getItem('react-movie-app-favourites')
        );

        setFavourites(MovieFavourites);
    }, []);

    const saveToLocalStorage = (items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    };

    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
        //console.log(movie);
    };

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter((favourite) => favourite.imdbID != movie.imdbID);
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    return (
        <div>
            <div className="row d-flex align-items-center mt-4 mb-4">
                <MovieListHeading heading="Movies"></MovieListHeading>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}></SearchBox>
            </div>
            <div className='movies-body container-fluid movie-app' >
                <div className='row'>
                    <MovieList
                        movies={movies}
                        handleFavouritesClick={addFavouriteMovie}
                        favouriteComponent={AddFavourites}></MovieList>
                </div>
            </div>

            <div className="row d-flex align-items-center mt-4 mb-4">
                <MovieListHeading heading="Favourites"></MovieListHeading>
            </div>
            <div className='movies-body container-fluid movie-app' >
                <div className='row'>
                    <MovieList
                        movies={favourites}
                        handleFavouritesClick={removeFavouriteMovie}
                        favouriteComponent={RemoveFavourite}></MovieList>
                </div>
            </div>
        </div>
    );
};

export default Movies;

// const [movies, setMovies] = useState([
    //     {
    //         "Title": "Star Wars",
    //         "Year": "1977",
    //         "imdbID": "tt0076759",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "Star Wars: Episode V - The Empire Strikes Back",
    //         "Year": "1980",
    //         "imdbID": "tt0080684",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "Star Wars: Episode VI - Return of the Jedi",
    //         "Year": "1983",
    //         "imdbID": "tt0086190",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "Star Wars: Episode VII - The Force Awakens",
    //         "Year": "2015",
    //         "imdbID": "tt2488496",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
    //     }
    // ]);