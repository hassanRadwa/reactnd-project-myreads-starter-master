import React, {Component} from 'react';
import '../App.css';
import BookShelf from '../components/BookShelf';

export default class SelectComponent extends Component {
    render(){
        return(
            <select value={this.props.book.shelf}>
              {/* <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option> */}
              {Object.entries(BookShelf).map(([key,val]) => (
                    <option value={key}>
                        {val}
                    </option>
              ))}
            </select>
        );
    }
}