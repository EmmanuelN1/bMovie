import React from 'react';
import requests from '../Requests';
import Banner from './Banner';
import './Homescreen.css';
import Nav from "./Nav";
import Row from './Row';

function Homescreen() {
    return (
        <div className="homescreen">
            <Nav/>
            <Banner/>

            {/*Screen Rows*/}
            <Row title="BOOKFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow/>




        </div>
    )
}

export default Homescreen
