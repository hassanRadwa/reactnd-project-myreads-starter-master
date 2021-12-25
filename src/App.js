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

  componentDidMount() {
    BooksAPI.getAll().then(
        (books) => {
          this.setState({books});//console.log(books);
      }
    );
    
  }
  getBookshelfBybookid=(bookid) => {
    BooksAPI.get(bookid).then((b)=>{
      console.log('app:getBookshelfBybookid:b.shelf',JSON.stringify(b.shelf));
      return JSON.stringify(b.shelf);
    })
  };

  searching = (searchtxt)=>{
    if(searchtxt!=='')
    {
    console.log('app:searching:searchtxt',searchtxt);
    BooksAPI.search(searchtxt).then(
      filteredBooks => {//alert(Object.values(filteredBooks));
          //console.log('app:searching:filteredBooks.error',filteredBooks.error);
          //JSON.stringify(filteredBooks);
          
          
          
            //this.setState({searchBooks: filteredBooks });
            (filteredBooks.error?this.setState({searchBooks: [] })
            :this.updateSearchBooksState(filteredBooks))
            
            //this.setState({searchBooks:filteredBooks});
          
          //
          //console.log('inside not error')
          //console.log(this.state.books);
          //this.setState({searchBooks: prevState.searchBooks.map(sbook=>{BooksAPI.get(sbook.id).then(b=>{sbook.shelf=b.shelf});return sbook;})});
          
          }
      );
    }
    else
    {
      this.setState({searchBooks: [] });
    }
  };
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

  handleTextChange = (e) => {
    console.log('app:handleTextChange:e.target.value',e.target.value);
    //console.log(e.target.value.trim());
    if(e.target.value!=='')
        this.searching(e.target.value);
    else
    this.setState({searchBooks: []})

    //console.log('App:handleTextChange: state.searchBooks');
    console.log(this.state.searchBooks);
};

  handleChangeShelf = (book, newShelf) => {
    BooksAPI.update(book,newShelf).then(response =>{
      book.shelf=newShelf;
      this.setState((prevState)=>({books: prevState.books.filter((oldbook)=>oldbook.id!==book.id).concat(book)}));
      //this.setState((prevState)=>({searchBooks: prevState.searchBooks.filter((oldsearchbook)=>oldsearchbook.id!==book.id).concat(book)}));
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
  //console.log('from handle changeshelf inside App');
      // console.log(this.state.books);
      // console.log(this.state.searchBooks);
  };

  emptySearchBooks = () => {
    this.setState({searchBooks: []});
  };
  render() {
    return (
      <div className="app">
        <Routes>
           <Route path='/' element={<Bookpage books={this.state.books} handleChangeShelf={this.handleChangeShelf}/>}/>
           <Route path='/search' 
           element={<SearchBooks books={this.state.searchBooks} 
           handleChangeShelf={this.handleChangeShelf} 
           handleTextChange={this.handleTextChange} 
           handleCloseSearch={this.emptySearchBooks}/>}/>
           <Route path='*' element={<NotFoundComponent />} />
        </Routes>
        
      </div>
    )
  }
}

export default BooksApp
