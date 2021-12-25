import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookpage from './pages/book';
import SearchBooks from './pages/searchBooks';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NotFoundComponent from './components/NotFoundComponent';


class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchBooks:[]
    };
  }

  async componentDidMount() {
    //get MyReads books from BooksAPI and updating books state
    const books = await BooksAPI.getAll();
    this.setState({books});
  }

  //get filtered books according the input text in input value
  //if no books returned the searchBooks state will be updated with empty array
  //otherwise the searchBooks state will be updated with the returned books with shelf value
  //if input text is empty the searchBooks state will be updated with empty array.
  async searching (searchtxt){
    if(searchtxt!=='')
    {
    const filteredBooks= await BooksAPI.search(searchtxt);
    filteredBooks.error?
    this.setState({searchBooks: [] }):
    this.updateSearchBooksState(filteredBooks);
    }
    else
    {
      this.setState({searchBooks: [] });
    }
  };

  //updates the searchBooks state with a new given array of books
  //it adds the current shelf value to each item
  updateSearchBooksState = (filteredBooks) => {
    const newBooks = filteredBooks.map((fb) => {
      
      fb.shelf = 'none';
      var result = this.state.books.filter(obj => {
        return obj.id === fb.id
      })
      if (result.length === 1){
        fb.shelf = result[0].shelf;
      }
      
      return fb;
    });

    this.setState({
      searchBooks: newBooks
    });
  };

// handels the text change of input field
handleTextChange = (e) => {
  if(e.target.value!=='')
      this.searching(e.target.value);
  else
  this.setState({searchBooks: []})
};

  handleChangeShelf = (book, newShelf) => {
    BooksAPI.update(book,newShelf).then(response =>{
      book.shelf=newShelf;
      this.setState((prevState)=>({books: prevState.books.filter((oldbook)=>oldbook.id!==book.id).concat(book)}));
  });
  };

  //sets the searchBooks state to empty array to reset the search page 
  emptySearchBooks = () => {
    this.setState({searchBooks: []});
  };
  render() {
    return (
      <div className="app">
        <Routes>
        <Route path='/search' 
           element={<SearchBooks books={this.state.searchBooks} 
           handleChangeShelf={this.handleChangeShelf} 
           handleTextChange={this.handleTextChange} 
           handleCloseSearch={this.emptySearchBooks}/>}/>
           <Route path='/' element={<Bookpage books={this.state.books} handleChangeShelf={this.handleChangeShelf}/>}/>
           <Route path='*' element={<NotFoundComponent />} />
        </Routes>
        
      </div>
    )
  }
}

export default BooksApp
