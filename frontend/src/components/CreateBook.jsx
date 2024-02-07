import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Navigate, useNavigate} from 'react-router-dom';

const CreateBook = () => {
const [currentBook,setCurrentBook] = useState(null);
const navigate = useNavigate();



const changeHandler = (e) => {
  e.preventDefault();
  setCurrentBook({...currentBook,[e.target.name]:e.target.value});
};


const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(currentBook)
  try{
    const response = await axios.post('http://localhost:3000/books',currentBook);
    navigate('/');
    console.log(response.data);
  }catch(err){
    console.log(err);
  }
};


  return (
    <div className='create--container'>
      <form onSubmit = {handleSubmit}>
        <input type = 'text' placeholder = 'Enter Book Title' onChange = {changeHandler} name = 'title'/>
        <input type = 'text' placeholder = 'Enter Author Name' onChange = {changeHandler} name = 'author'/>
        <input type = 'integer' placeholder = 'Enter Price' onChange = {changeHandler} name = 'price'/>
        <input type = 'text' placeholder = 'Enter Genre' onChange = {changeHandler} name = 'genre'/>
      </form>
      <button type = 'submit' onClick = {handleSubmit}>Add Book</button>
      <a href = '/'><button type = 'home'>Back to Home</button></a>
    </div>
  )
}

export default CreateBook
