import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/addmovie.css";
function AddMovie() {
   
    const[movie,setMovie]=useState();
    const[director,setDirector]=useState();
    const[gener,setGener]=useState();
    const[rating,setRating]=useState();
    const[budget,setBudget]=useState();
    const navigate=useNavigate();
const validatUser=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:8081/movie',{
        movieName:movie,
        director:director,
        gener:gener,
        imbdRating:rating,
        budget:budget
    }
    )
    navigate("/")
}
    return (
        <>
            <h1>Add a Movie!</h1>
            <table>
                <tr>
                    <td>Movie Name:</td>
                    <td><input type="text" value={movie} placeholder="Enter Movie name" 
                        onChange={(s)=>{setMovie(s.target.value)}}>
                    </input></td>
                </tr>
                <tr>
                    <td>Director:</td>
                    <td><input type="text" value={director} placeholder="Enter Director name"
                        onChange={(s)=>setDirector(s.target.value)}
                    ></input></td>
                </tr>
                <tr>
                    <td>Genre:</td>
                    <td><input type="text" value={gener} placeholder="Enter genre"
                        onChange={(s)=>setGener(s.target.value)}
                    ></input></td>
                </tr>
                <tr>
                    <td>imbd Rating:</td>
                    <td><input type="number" value={rating} placeholder="Enter rating"
                        onChange={(s)=>setRating(s.target.value)}
                    ></input></td>
                </tr>
                <tr>
                    <td>budget:</td>
                    <td><input type="number" value={budget} placeholder="Enter budget"
                        onChange={(s)=>setBudget(s.target.value)}
                    ></input></td>
                </tr>
            
               
            </table>
                    <button id="submit" onClick={validatUser}>Submit</button>
        
        </>
      );
}

export default AddMovie;