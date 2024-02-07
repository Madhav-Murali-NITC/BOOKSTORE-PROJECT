import express from 'express';
import {PORT,URL} from './config.js';
import mongoose from 'mongoose';
import {Book} from './models/booksModel.js';
import {bookRoutes} from './routes/bookRoutes.js';
import cors from 'cors';

const app = express();
const url = URL;

app.use(cors(
  {
    origin: 'http://localhost:5173',
    methods : ['GET','POST','PUT','DELETE'
    
  ]
  
  }
));


app.get('/', (req, res) => {
    console.log('GET request received');
    res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}  );



mongoose.connect(URL). then(() => {
    console.log('Database connected');
}).catch((error) => {
    console.log('Error:', error.message);
});


app.use(express.json());  

//Routes:
app.use('/books', bookRoutes);