import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Table from './Table';

function DeleteMovie() {
    const navigate=useNavigate();
    const location=useLocation();
    useEffect(()=>{
        axios.delete(`http://localhost:8081/movie/${location.state.id}`)
        navigate('/')
    }
    ,[])
    return (
        <>
            {<Table/>}
        </>
    );
}

export default DeleteMovie;