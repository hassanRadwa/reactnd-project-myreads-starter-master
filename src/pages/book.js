import React, {Component} from 'react'
import '../App.css'
import BookList from '../components/BookList'


export default class BookPage extends Component {
    
      
    
      
    
    render() {
        return(
              <div className="list-books">
                  <div className="list-books-title">
                      <h1>MyReads</h1>
                      {/* {JSON.stringify(this.state.books)} */}
                      <BookList 
                  books={this.props.books} 
                  handleChangeShelf= {this.props.handleChangeShelf}/>
                  </div>
              </div>
              
        )
    }
}