import React, {Component} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookItem from '../components/BookItem';
import BookList from '../components/BookList'

export default class SearchBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text: ''
        };
      }
      handleChangeShelf = (book,newshelf) => {
          console.log('searchbooks:handleChangeShelf:book',book);
          this.props.handleChangeShelf(book,newshelf)
      };
    
    //   handleTextChange = (e) => {
        
    //     // if(e.target.value!=='')
    //     // this.setState({text: e.target.value})
    //     // else
    //     // this.setState({text: ''})
    //     // this.props.handleTextChange(e);
    //     // console.log('searchBooks: handleTextChange:props.books');
    //     // console.log(this.props.books);
    //     console.log('searchBooks:handleTextChange:e.target',e.target);
    //     this.setState({text: e.target.value},()=>{
    //         this.props.handleTextChange(e);
    //     });
    //   };

      handleTextChange = (e) => {
        this.setState({text: e.target.value},()=>{
                    this.props.handleTextChange(e);
                });
      };

    //   handleSubmit = (e) => {
    //     //console.log('searchBooks:handleSubmit:e.target',e.target);
    //     e.preventDefault();
    //     this.props.handleTextChange(e);
    //     this.setState({
    //       ...this.state,
    //       text: '',
    //     });
    //   };
    
    render() {
       // {JSON.stringify(this.state.books)}
        return(
            
        <div className="search-books">
            
            <div className="search-books-bar">
              <Link to='/'><button className="close-search" onClick={this.props.handleCloseSearch}>Close</button></Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                {/* <form onSubmit={this.handleSubmit}> */}
                    <input type="text" value={this.state.text} placeholder="Search by title or author" onChange={this.handleTextChange}/>
                {/* </form> */}
              </div>
            </div>
            <div className="search-books-results">
            {/* {JSON.stringify(this.state.books)} */}
              <ol className="books-grid">
              {typeof this.props.books !== 'undefined' && this.props.books?
              
              this.props.books.map((book)=>
                                    <BookItem 
                                    book={book} 
                                    key={book.id}
                                    handleChangeShelf={this.handleChangeShelf} />):<div></div>
                                    }
              </ol>
              {/* {typeof this.state.books !== 'undefined' && this.state.text.trim()!=='' && this.state.books?
              <BookList 
              books={this.state.books} 
              handleChangeShelf= {this.handleChangeShelf}/>
              :<div>No books found</div>} */}
            </div>
          </div>
        )
    }
}