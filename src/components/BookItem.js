import React, { Component } from 'react';
import '../App.css';
import SelectComponent from './SelectComponent';
import BookShelf from '../components/BookShelf';
import * as BooksAPI from '../BooksAPI'

export default class BookItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          shelf: ''
        };
      }
    onChangeShelf = (e) => {
        const { id } = this.props.book;
        // alert(e.target.value);
        // alert(id);
        this.props.handleChangeShelf(id, e.target.value);
        
      };
      getBookbyId = (bookid) => {
        
        BooksAPI.get(bookid).then(
            filteredBook => {//alert(Object.keys(filteredBooks)[0]);
                //alert(filteredBook);
                //JSON.stringify(filteredBook);
                //console.log(filteredBook);
                this.setState({shelf: filteredBook.shelf});
                }
            );
        

        //alert(this.state.books);
    };
  render() {
    const { id,title, authors,shelf, imageLinks } = this.props.book;
    if(!shelf) 
        this.getBookbyId(id);
    
    return (
        
        <li>
            <div className="book">
                {/* {alert(shelf)} */}
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
                        {!shelf?
                        <SelectComponent 
                        book={this.props.book} 
                        handleChange= {this.onChangeShelf}
                        shelfValue={this.state.shelf}
                        options={Object.entries(BookShelf)}/>
                        :<SelectComponent 
                        book={this.props.book} 
                        handleChange= {this.onChangeShelf}
                        shelfValue={shelf}
                        options={Object.entries(BookShelf)}/>
                        }
                        <SelectComponent 
                        book={this.props.book} 
                        handleChange= {this.onChangeShelf}
                        shelfValue={this.state.shelf}
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
