import React, { useState } from "react";
import SearchBox from "../components/SearchBox";
import MovieCard from "../components/MovieCard";

const apiKey = "667981ae";
const apiURL = `https://www.omdbapi.com/?apikey=${apiKey}`;

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [searchError, setSearchError] = useState(false);
    const searchMovies = async (title) => {
        title = title.trim();
        const respone = await fetch(`${apiURL}&s=${title}`);
        const data = await respone.json();
        if (!data.Search) {
            setSearchError(true);
        } 
        if (data.Response === 'True') {
            setMovies(data.Search);
        }
    }
    return (
        <>
        {/* {console.log(movies)} */}
            <h1 className="text-center my-5">Movie Search</h1>
            <SearchBox searchMovies={searchMovies}/>
            {movies.length > 0 ? (
                <div className=" movies d-flex justify-content-center flex-wrap py-4">
                    {movies.map(movie => {
                        return <MovieCard key={movie.imdbID} movie={movie}/>
                    })}
                </div>
            ) : (
                searchError && (
                    <div className="text-center mt-5"><h3>No Movies Found</h3></div>
                )
            )}
            

            
        </>
    );
}
