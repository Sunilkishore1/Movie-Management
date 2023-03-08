import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/view.css";
function ViewMovie() {
    const location=useLocation();
    const[movie,setMovie]=useState();
    useEffect(()=>{
        axios.get(`http://localhost:8081/movie/${location.state.id}`)
        .then((detail)=>{
            console.log(detail.data)
            setMovie(detail.data)
        })
    },[])

    return (
        <>
        {movie&&
            <>
            <list>
                <ul style={{listStyle:'none'}}>
                    <li>id:{movie.id}</li>
                    <li>Movie Name:{movie.movieName}</li>
                    <li>Director:{movie.director}</li>
                    <li>Genre:{movie.gener}</li>
                    <li>Rating:{movie.imbdRating}</li>
                    <li>Budget:{movie.budget}</li>
                </ul>
            </list>
            </>
        }
        </>
    );
}

export default ViewMovie;