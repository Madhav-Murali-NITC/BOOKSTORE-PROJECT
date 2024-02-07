import mongoose from 'mongoose';
import express, { response } from 'express';
import {Book} from '../models/booksModel.js';

const router = express.Router();

//GET REQUESTS API CALLS:

router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try{
        const book  =await Book.findById(req.params.id);
        res.json(book);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});



//POST REQUEST API CALLS 

router.post('/', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author : req.body.author,
        price : req.body.price,
        genre : req.body.genre
    });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});



//UPDATE BOOK WITH PATCH:

router.put('/:id', async (req, res) => {
  const {id} = req.params;
  try{
  const updatedBook = {
    title: req.body.title,
    author : req.body.author,
    price : req.body.price,
    genre : req.body.genre
  };

  const result  = await Book.findByIdAndUpdate(id, updatedBook)
  if(result){
    res.json({message: "Book updated successfully"});
  }
    else{
        res.json({message: "Book not found"});
    }
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

 
//DETELE BOOK WITH DELETE:

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try{
        const result = await Book.findByIdAndDelete(id);
        if(result){
            res.json({message: "Book deleted successfully"});
        }
        else{
            res.json({message: "Book not found"});
        }
    }catch(error){
            res.status(500).json({message: error.message});
        }
    });

export {router as bookRoutes};