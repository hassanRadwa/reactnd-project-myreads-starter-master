import React, { Component } from 'react';
import '../App.css';
import SelectComponent from './SelectComponent';
import BookShelf from '../components/BookShelf';
import * as BooksAPI from '../BooksAPI'

export default class BookItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       shelf: ''
    //     };
    //   }
    onChangeShelf = (newshelf) => {
        //const { id } = this.props.book;
        // alert(e.target.value);
        // alert(id);
        this.props.handleChangeShelf(this.props.book, newshelf);
        //this.setState({shelf: e.target.value});
        //console.log(e.target.value);
        
      };
      
  render() {
    const { id,title, authors,shelf, imageLinks } = this.props.book;
    console.log('BookItem:render:props.book',this.props.book);
    //alert(shelf);
    // if(!shelf) {
    //     this.getBookbyId(id);
        
    // }
    
    return (
        
        <li key={id}>
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
                    <SelectComponent 
                        book={id} 
                        handleChange= {this.onChangeShelf}
                        shelfValue={shelf}
                        options={Object.entries(BookShelf)}/>
                        {/* {!shelf?
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
                        options={Object.entries(BookShelf)}/> */}
                    </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    );
  }
}
