import React, { Component } from 'react';
import '../App.css';
import SelectComponent from './SelectComponent';

export default class BookItem extends Component {
  render() {
    const { id,title, authors,shelf, imageLinks } = this.props.book;
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ 
                            width: 128, 
                            height: 193, 
                            backgroundImage: `url(${imageLinks.thumbnail})` 
                            }}>
                    </div>
                    <div className="book-shelf-changer">
                        <SelectComponent book={this.props.book}/>
                    </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    );
  }
}
