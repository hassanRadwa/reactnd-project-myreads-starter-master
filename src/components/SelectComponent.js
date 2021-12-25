import React, {Component} from 'react';
import '../App.css';


export default class SelectComponent extends Component {
    changingShelf=(e)=>{
        this.props.handleChange(e.target.value);
    };
    render(){
        const {shelfValue, options } = this.props;
        return(
            
            <select value={shelfValue}  onChange={this.changingShelf} >
              {options.map(([key,val]) => (
                    <option value={key} key={key}>
                        {val}
                    </option>
              ))}
            </select>
        );
    }
}