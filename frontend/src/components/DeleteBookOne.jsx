import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
const DeleteBookOne = () => {

    const navigate = useNavigate();

    const {id} = useParams();

    const [book,setBook] = useState();
    

    useEffect (()=>{
        const fetchUser  = async () => {
            try{
                const response = await axios.get(`http://localhost:3000/books/${id}`);
                setBook(response.data);
                console.log(response.data);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchUser();
    },[])


    const handleDelete = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.delete(`http://localhost:3000/books/${id}`);
            console.log(response.data);
            navigate('/');
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div>
        {book ? (
        <>
        <h1>Title : {book.title}</h1>
        <h2>Author : {book.author}</h2>
        <h2>Price : {book.price}</h2>
        <h2>Genre : {book.genre}</h2>
        <button onClick = {handleDelete}>Delete</button>
        <a href='/'><button>Home</button></a>
        </>
        ) : (
            <h2>Loading...</h2>
        )}

      
    </div>
  )
}

export default DeleteBookOne
