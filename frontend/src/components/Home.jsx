import React, { useEffect } from 'react'
import {Link} from 'react-router-dom';
import '../styles/Home.css'
import {useState,useEFfect} from 'react';
import axios from 'axios';

const Home = () => {


  const [books,setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try{
        const response = await axios.get('http://localhost:3000/books'); 
        setBooks(response.data);
        console.log(response.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchBooks();
  },[]);


  return (
    <div className = 'home--container'>
      <h1 className='home--heading'>Welcome to NITC BookStore!</h1>
      <h2 className = "home--heading--subtext">List of all books currently in stock</h2>
      <table className = 'home--table'>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Price</th>
            <th>Genre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key = {book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td>{book.genre}</td>
              <td>
                <Link to = {`/detailbooks/${book._id}`}>View</Link>
                <Link to = {`/editbooks/${book._id}`}>Edit</Link>
                <Link to = {`/deletebookone/${book._id}`}>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href ='createbooks'>
        <button className = 'home--add--button'>Add Book</button>
      </a>
      <a href = 'deletebooks'><button className = 'home--delete-button'>Delete Book</button></a>

 
      


      
      
    </div>
  )
}

export default Home
