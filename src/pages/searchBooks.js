import React, {Component} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import BookItem from '../components/BookItem';

export default class SearchBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text: ''
        };
      }
    handleChangeShelf = (book,newshelf) => {
        this.props.handleChangeShelf(book,newshelf)
    };
    handleTextChange = (e) => {
      this.setState({text: e.target.value},()=>{
                  this.props.handleTextChange(e);
              });
    };
    render() {
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
                <input type="text" value={this.state.text} placeholder="Search by title or author" onChange={this.handleTextChange}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {typeof this.props.books !== 'undefined' && this.props.books?
              this.props.books.map((book)=>
                                    <BookItem 
                                    book={book} 
                                    key={book.id}
                                    handleChangeShelf={this.handleChangeShelf} />)
                :<div></div>
                }
              </ol>
            </div>
          </div>
        )
    }
}