import React, {Component} from 'react'
import '../App.css'
import BookList from '../components/BookList'
import {Link} from 'react-router-dom'


export default class BookPage extends Component {
    
      
    
      
    
    render() {
        return(
            <div>
              <div className="list-books">
                  <div className="list-books-title">
                      <h1>MyReads</h1>
                      {/* {JSON.stringify(this.state.books)} */}
                      <BookList 
                  books={this.props.books} 
                  handleChangeShelf= {this.props.handleChangeShelf}/>
                  </div>
              </div>
              <div className="open-search">
              <Link to='/search'><button></button></Link>
              </div>
            </div>

              
        )
    }
}