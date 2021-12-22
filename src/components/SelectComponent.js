import React, {Component} from 'react';
import '../App.css';


export default class SelectComponent extends Component {
    render(){
        const { handleChange, shelfValue, options } = this.props;
        return(
            <select value={shelfValue} onChange={handleChange}>
              {/* <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option> */}
              {options.map(([key,val]) => (
                    <option value={key} key={key}>
                        {val}
                    </option>
              ))}
            </select>
        );
    }
}