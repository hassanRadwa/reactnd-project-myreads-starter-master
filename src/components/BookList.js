import React, { Component } from 'react';
import BookItem from './BookItem';
import '../App.css'
import BookShelf from '../components/BookShelf'

export default class BookList extends Component {
  render() {
    // return (
    //   <ol className="books-grid">
    //     {this.props.books.map((book) => (
    //       <BookItem 
    //       book={book} 
    //       key={book.id} 
    //       />
    //     ))}
    //   </ol>
    // );
    return (
        <div className="list-books-content">
            <div>
                
                    {Object.entries(BookShelf).map(([key,value])=>{
                      return(
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{value}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid" key={key}>
                                    {this.props.books.filter((b)=>b.shelf === key)
                                    .map((book)=>
                                    <BookItem 
                                    book={book} 
                                    key={book.id} />)
                                    }
                                </ol>
                            </div>
                        </div>
                      );
                                })}
            </div>
        </div>
      );
  }
}
