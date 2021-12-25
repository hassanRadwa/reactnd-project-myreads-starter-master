import React, { Component } from 'react';
import '../App.css';
import SelectComponent from './SelectComponent';
import BookShelf from '../components/BookShelf';
import * as BooksAPI from '../BooksAPI'

export default class BookItem extends Component {
    
    onChangeShelf = (newshelf) => {
        this.props.handleChangeShelf(this.props.book, newshelf); 
      };
      
  render() {
    const { id,title, authors,shelf, imageLinks } = this.props.book;
    return (
        <li key={id}>
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={typeof imageLinks !== 'undefined'?{ 
                            width: 128, 
                            height: 193, 
                            backgroundImage: `url(${imageLinks.thumbnail})` 
                            }:{ 
                                width: 128, 
                                height: 193, 
                                backgroundColor: '#FBD603',
                                textAlign: 'center'
                                
                                }}>{typeof imageLinks === 'undefined'?'No image available':''}
                    </div>
                    <div className="book-shelf-changer">
                    <SelectComponent 
                        book={id} 
                        handleChange= {this.onChangeShelf}
                        shelfValue={shelf}
                        options={Object.entries(BookShelf)}/>
                    </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    );
  }
}
