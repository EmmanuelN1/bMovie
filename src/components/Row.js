import React, { useEffect, useState } from 'react'
import "./Row.css";
import axios from "axios"

function Row({title,fetchUrl, isLargeRow = false }) {
        const [movies , setMovies] = useState([]);

        const base_url = "https://image.tmdb.org/t/p/original/";

        //Anytime you are depending on a variable outside the useEff]fect please always place the variable ib the dependency box below
        useEffect(() => {
            async function fetchData() {
                const req = await axios.get(fetchUrl);
                setMovies(req.data.results);
                return req;
            }
                fetchData();
        },  [fetchUrl]);
    return (
        <div className="row">
            <h3>{title}</h3>

                <div className="row__posters">
                    {movies.map((movie) => 
                        /*To eliminate dead link */
                        ((isLargeRow && movie.poster_path) || 
                        (!isLargeRow && movie.backdrop_path)) && (
                    <img
                     className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                    key={movie.id}
                    src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}/>

            
                ))}    
                </div>
            
        </div>
    )
}

export default Row
