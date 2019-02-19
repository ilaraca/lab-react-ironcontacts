import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Table from './components/table/Table';
import Button from './components/button/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      actors: contacts.splice(0, 5)
    };
    this.updateState = this.updateState.bind(this);
  }
  
  updateState(obj){
    this.setState({
      actors: obj
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>IronContacts</h1>
          <Button/>
          <table>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          <Table
            actors={this.state.actors}
          />
          </table>
        </div>
      </div>
    );
  }
}

export default App;
