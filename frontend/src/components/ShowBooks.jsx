import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const ShowBooks = (props) => {

  const [currentBook,setCurrentBook] = useState(null);  
  const {id} = useParams();
  console.log(id);

  useEffect(() =>{

    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/books/${id}`);
        setCurrentBook(response.data);
        console.log(response.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchUser();

  },[])
  return (
    <div>
      <h1>Book Details</h1>
      <h2>Title: {currentBook?.title}</h2>
      <h2>Author: {currentBook?.author}</h2>
      <h2>Price: {currentBook?.price}</h2>
      <h2>Genre: {currentBook?.genre}</h2>
      <a href = '/'>
        <button>Back to Home</button>
        </a>  
    </div>
  )
}

export default ShowBooks
