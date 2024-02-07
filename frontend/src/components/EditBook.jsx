import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const EditBook = () => {
const navigate = useNavigate();
const {id} = useParams();
const [book,setBook] = useState();

const [newBook,setNewBook] = useState();

useEffect (() =>{

  const fetchUser = async () => {
    try{
      const response = await axios.get(`http://localhost:3000/books/${id}`);
      setBook(response.data);
      console.log(response.data);
    }catch(err){
      console.log(err);
    }
  }
  fetchUser();
},[])

const handleEdit = async(e) => {
  e.preventDefault();
  try{
    const response = await axios.put(`http://localhost:3000/books/${id}`,newBook);
    navigate('/');
    console.log(response.data);
}catch(err){
  console.log(err);
}
}


const handleOnChange = (e) => {
  e.preventDefault();
  setNewBook({...newBook,[e.target.name]:e.target.value});
}


  return (
    <div>
      {book &&
      <form onSubmit = {handleEdit}>
        <input type = 'text' placeholder = {book.title} onChange = {handleOnChange} name = 'title'/>
        <input type = 'text' placeholder = {book.author} onChange = {handleOnChange} name = 'author'/>
        <input type = 'integer' placeholder = {book.price} onChange = {handleOnChange} name = 'price'/>
        <input type = 'text' placeholder = {book.genre} onChange = {handleOnChange} name = 'genre'/>
        <button type = 'submit' onClick = {handleEdit}>Edit</button>
      </form> 
}
    </div>
  )
}

export default EditBook
