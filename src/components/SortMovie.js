
import axios from 'axios';
import '../styles/table.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddMovie from './AddMovie';
import "../styles/table.css";

function SortMovie() {
    const[movie,setMovie]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:8081/movie/gener/1')
        .then((response)=>{
            console.log(response.data);
            setMovie(response.data)
        })
    },[])
    return ( 
        <>

        <h1>Movies For You!</h1>
        <button className="Add" onClick={()=>navigate('/addmovie')}>Add Movie</button>
        <div className='outter'>


            <table id="movTable">
                <tr>
                    <th>Movie Name</th>
                    <th>Director</th>
                    <th>Genre</th>
                </tr>
                {
                    movie.map((e)=>
                    <tr>
                        <td>{e.movieName}</td>
                        <td>{e.director}</td>
                        <td>{e.gener}</td>
                        <td id='hell'><button  onClick={()=>navigate('/viewmovie',{state:{id:e.id}})}>View</button>
                        <button onClick={()=>navigate('/editmovie',{state:{id:e.id}})}>Edit</button>
                        <button onClick={()=>navigate('/delete',{state:{id:e.id}})}>Delete</button></td>
                    </tr>)
                }
            </table>
        </div>
        </>
     );
}

export default SortMovie;