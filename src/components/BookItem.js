import React, { Component } from 'react';
import '../App.css';
import SelectComponent from './SelectComponent';
import BookShelf from '../components/BookShelf';

export default class BookItem extends Component {
    onChangeShelf = (e) => {
        const { id } = this.props.book;
        alert(e.target.value);
        alert(id);
        this.props.handleChangeShelf(id, e.target.value);
        
      };
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
                        <SelectComponent 
                        book={this.props.book} 
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
