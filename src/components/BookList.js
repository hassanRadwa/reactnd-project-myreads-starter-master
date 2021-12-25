import React, { Component } from 'react';
import BookItem from './BookItem';
import '../App.css'
import BookShelf from '../components/BookShelf'

export default class BookList extends Component {
  render() {
    return (
        <div className="list-books-content">
            <div>
                {Object.entries(BookShelf).map(([key1,value1])=>
                {
                    if(key1!=='none')
                        return(
                          <div className="bookshelf" key={key1}>
                              <h2 className="bookshelf-title">{value1}</h2>
                              <div className="bookshelf-books">
                                  <ol className="books-grid" key={key1}>
                                      {this.props.books.filter((b)=>b.shelf === key1)
                                      .map((book)=>
                                      <BookItem 
                                      book={book} 
                                      key={book.id} 
                                      handleChangeShelf={this.props.handleChangeShelf}/>)
                                      }
                                  </ol>
                              </div>
                          </div>
                        );
                    else
                      return (<div key='none'></div>);
                })}
            </div>
        </div>
      );
  }
}
