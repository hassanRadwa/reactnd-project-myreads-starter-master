import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookpage from './pages/book';
import SearchBooks from './pages/searchBooks';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';


class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchBooks:[]
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then(
        (books) => {this.setState({books});console.log(books);}
    );
    
  
  }

  searching = (searchtxt)=>{
    BooksAPI.search(searchtxt).then(
      filteredBooks => {alert(Object.keys(filteredBooks)[0]);
          //console.log(filteredBooks);
          //JSON.stringify(filteredBooks);
          
          Object.keys(filteredBooks)[0]==='error'?
          this.setState({searchBooks: [] }):
          this.setState({searchBooks: filteredBooks });
          //
          console.log('inside not error')
          console.log(this.state.books);
          this.state.searchBooks.map(sbook=>{BooksAPI.get(sbook.id).then(b=>{sbook.shelf=b.shelf});return sbook;});
          
          }
      );
  };

  handleTextChange = (e) => {
    console.log('search text');
    console.log(e.target.value.trim());
    if(e.target.value.trim()!=='')
        this.searching(e.target.value);
    else
    this.setState({searchBooks: []})

    console.log('state books');
    console.log(this.state.books);
};

  handleChangeShelf = (book, newShelf) => {
    BooksAPI.update(book,newShelf).then(response =>{
      book.shelf=newShelf;
      this.setState((prevState)=>({books: prevState.books.filter((oldbook)=>oldbook.id!==book.id).concat(book)}));
      this.setState((prevState)=>({searchBooks: prevState.searchBooks.filter((oldsearchbook)=>oldsearchbook.id!==book.id).concat(book)}));
      // const newSearchBooks = this.state.searchBooks.map((sbook) => {
      //   if (sbook.id === book.id) {
      //       sbook.shelf = newShelf;
          
      //   }
      //   return sbook;
      // });
    // this.setState((prevState) => ({
    //   ...prevState,
    //   books: book,
    // }));
    // this.setState({
    //   searchBooks: newSearchBooks
    // })});
  });
  //   BooksAPI.getAll().then(
  //     updatedbooks => {this.setState({books: updatedbooks});console.log(this.state.books);}
  // );
  console.log('from handle changeshelf inside App');
      console.log(this.state.books);
      console.log(this.state.searchBooks);
  };

  
  render() {
    return (
      <div className="app">
        <Routes>
           <Route path='/' element={<Bookpage books={this.state.books} handleChangeShelf={this.handleChangeShelf}/>}/>
           <Route path='/search' element={<SearchBooks books={this.state.searchBooks} handleChangeShelf={this.handleChangeShelf} handleTextChange={this.handleTextChange}/>}/>
        </Routes>
        
      </div>
    )
  }
}

export default BooksApp
