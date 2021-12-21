import React, {Component} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookItem from '../components/BookItem';

export default class SearchBooks extends Component {
    state = {
        text: '',
        books: []
      };
    handleTextChange = (e) => {
        this.setState({
            text: e.target.value.trim()
    });
    if(e.target.value.trim()!=='')
        BooksAPI.search(e.target.value).then(
            filteredBooks => {//alert(Object.keys(filteredBooks)[0]);
                Object.keys(filteredBooks)[0]==='error'?this.setState({books: [] }):this.setState({books: filteredBooks })}
            );
    else
    this.setState({books: [] ,text: ''})
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
            {JSON.stringify(this.state.books)}
              <ol className="books-grid">
              {typeof this.state.books !== 'undefined' && this.state.text.trim()!=='' && this.state.books?
              this.state.books.map((book)=>
                                    <BookItem 
                                    book={book} 
                                    key={book.id} />):<div></div>
                                    }
              </ol>
            </div>
          </div>
        )
    }
}