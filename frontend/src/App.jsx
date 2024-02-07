import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import EditBook from './components/EditBook'
import CreateBook from './components/CreateBook'
import DeleteBook from './components/DeleteBook.jsx'
import ShowBooks from './components/ShowBooks'
import DeleteBookOne from './components/DeleteBookOne'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editbooks/:id" element={<EditBook />} />
          <Route path="/createbooks/" element={<CreateBook />} />
          <Route path="/deletebooks/" element={<DeleteBook />} />
          <Route path = '/detailbooks/:id' element = {<ShowBooks />} />
          <Route path = '/deletebookone/:id' element = {<DeleteBookOne />} />

        </Routes>
      </Router>



      
    </div>
  )
}

export default App
