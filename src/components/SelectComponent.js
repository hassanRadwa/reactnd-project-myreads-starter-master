import React, {Component} from 'react';
import '../App.css';


export default class SelectComponent extends Component {
    changingShelf=(e)=>{
        this.props.handleChange(e.target.value);
    };
    render(){
        const { handleChange, shelfValue, options } = this.props;
        return(
            <select value={shelfValue}  onChange={this.changingShelf} >
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