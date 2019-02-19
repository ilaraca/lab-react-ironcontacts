import React, { Component } from 'react';
import contacts from './contacts.json';

class Button extends Component {
 render(){
     return (
        <button onClick={this.props.onClick}>Add Random Contact</button>
    );
  }
}

export default Button;
