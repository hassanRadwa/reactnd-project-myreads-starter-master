import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookpage from './pages/book';
import SearchBooks from './pages/searchBooks';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then(
        (books) => this.setState({books})
    );
  }

  handleChangeShelf = (bookid, newShelf) => {
    const newBooks = this.state.books.map((book) => {
      if (book.id === bookid) {
        book.shelf = newShelf;
      }
      return book;
    });
    this.setState({
      books: newBooks
    });
  };

  
  render() {
    return (
      <div className="app">
        <Routes>
           <Route path='/' element={<Bookpage books={this.state.books} handleChangeShelf={this.handleChangeShelf}/>}/>
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
