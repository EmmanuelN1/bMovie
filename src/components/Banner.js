import React, {useEffect, useState} from 'react';
import './Banner.css';
import axios from "axios";
import requests from "../Requests";
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer"


function Banner() {
    const [movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals); 
            setMovie(
                request.data.results[ 
                    Math.floor(Math.random() * request.data.results.length -1 )
                ]
            )
                return request;
        }
            fetchData();
    }, []);
 
    const opts = {
        height: "300",
        width: "60%",

        playerVars : {
            autoplay:1,
        }
    }



    const openTrailer = (movie) => {
        console.log(movie);
        if(trailerUrl) {
            setTrailerUrl('')
        } else{
            movieTrailer(movie?.name || "").then(url => {
                //extracting the value of V in the youtube url
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch(error => console.log(error))
        }
    }



    //put the ellipsis in a long text
    const truncate = (string,  n) => {
        return string?.length > n ? string.substr(0, n-1) + '...': string; 
    }
    return (
        <header className="banner" 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>

           
                <div className="banner__contents">
                    <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                    <div className="banner__buttons">
                        <button onClick={() => openTrailer(movie) } className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                    <h1 className="banner__description">
                        {truncate(movie?.overview, 160)}
                    </h1>
                </div>


                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}


                <div className="banner--fadeBottom"/>
        </header>

    )
}


export default Banner;
