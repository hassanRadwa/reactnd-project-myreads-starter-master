import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookpage from './pages/book';
import SearchBooks from './pages/searchBooks';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(
        (books) => this.setState({books})
    );
  }

  render() {
    return (
      <div className="app">
        <Routes>
           <Route path='/' element={<Bookpage books={this.state.books}/>}/>
           <Route path='/search' element={<SearchBooks books={this.state.books}/>}/>
        </Routes>
        <div className="open-search">
          <Link to='/search'><button></button></Link>
        </div>
      </div>
    )
  }
}

export default BooksApp
