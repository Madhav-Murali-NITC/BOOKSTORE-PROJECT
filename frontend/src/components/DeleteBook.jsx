import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const DeleteBook = () => {
  const navigate = useNavigate(); 


  const [allBooks,setAllBooks] = useState([]);
  const [deleteBook,setDeleteBook] = useState();


  useEffect(() =>{
    const fetchBooks = async () => {
      try{
        const response = await axios.get('http://localhost:3000/books');
        setAllBooks(response.data);
        console.log(response.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchBooks();
    

  },[]);








  const handleDelete = async (e) => {
    e.preventDefault();
    if(deleteBook === null){
      return;
    }
    try{
      const response = await axios.delete(`http://localhost:3000/books/${deleteBook}`);
      console.log(response.data);
      navigate('/');

    }catch(err){
      console.log(err);
    }
  }



  return (
    <div>
      <h1>Delete Book</h1>
      <select value = {deleteBook} onChange = {(e) => setDeleteBook(e.target.value)}>
        {
            allBooks.map((book) => (
              <option value = {book._id} key = {book._id}>{book.title}</option>
            ))
        }
      </select>
      <button onClick = {handleDelete}>Delete</button>
      <a href='/'><button>Home</button></a>

      
    </div>
  )
}

export default DeleteBook
