import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../styles/editmovie.css";

function EditMovie() {
    const location=useLocation();
    const[id,setId]=useState();
    const[film,setFilm]=useState([]);
    const[movie,setMovie]=useState();
    const[director,setDirector]=useState();
    const[gener,setGener]=useState();
    const[rating,setRating]=useState();
    const[budget,setBudget]=useState();
    const navigate=useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8081/movie/${location.state.id}`)
        .then((datum)=>{
            setId(datum.data.id);
            setFilm(datum.data);
            setMovie(datum.data.movieName);
            setDirector(datum.data.director);
            setGener(datum.data.gener);
            setRating(datum.data.imbdRating);
            setBudget(datum.data.budget);
        })
    }, []);

    async function validateMovie(e){
        e.preventDefault();
        await axios.post("http://localhost:8081/movie",
        {
            id:id,
            movieName:movie,
            director:director,
            gener:gener,
            imbdRating:rating,
            budget:budget
        }
        )
        setMovie();
        setDirector();
        setGener();
        setRating();
        setBudget();
        navigate("/");
        alert("Success");
    }
    return ( 
        <>
            {film&&
            <div className='edit'>
                <h2>Edit</h2>
                <form onSubmit={validateMovie}>
                    <div>
                        <label>Movie Name:</label>
                        <input type="text" placeholder='Name'value={movie}
                        onChange={(e)=>setMovie(e.target.value)} />
                    </div>
                    <div>
                        <label>Director:</label>
                        <input type="text" placeholder='Name'value={director}
                        onChange={(e)=>setDirector(e.target.value)} />
                    </div>
                    <div>
                        <label>Genre:</label>
                        <input type="text" placeholder='type'value={gener}
                        onChange={(e)=>setGener(e.target.value)} />
                    </div>
                    <div>
                        <label>Imbd Rating:</label>
                        <input type="number" placeholder='Rating'value={rating}
                        onChange={(e)=>setRating(e.target.value)} />
                    </div>
                    <div>
                        <label>Budget:</label>
                        <input type="number" placeholder='Amount'value={budget}
                        onChange={(e)=>setBudget(e.target.value)} />
                    </div>
                    <input type="submit" />
                </form>

            </div>   
            }
        </>
     );
}
export default EditMovie;