import React, {Component} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookItem from '../components/BookItem';
import BookList from '../components/BookList'

export default class SearchBooks extends Component {
    state = {
        text: '',

      };
      handleChangeShelf = (book,newshelf) => {
          this.props.handleChangeShelf(book,newshelf)
      };
    
      handleTextChange = (e) => {
        if(e.target.value.trim()!=='')
        this.setState({text: e.target.value.trim()})
        else
        this.setState({text: ''})
        this.props.handleTextChange(e);
        console.log('inside search txt change handler');
        console.log(this.props.books);
      };
    
    render() {
       // {JSON.stringify(this.state.books)}
        return(
            
        <div className="search-books">
            
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={this.handleTextChange}/>

              </div>
            </div>
            <div className="search-books-results">
            {/* {JSON.stringify(this.state.books)} */}
              <ol className="books-grid" >
              {typeof this.props.books !== 'undefined' && this.state.text.trim()!=='' && this.props.books?
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