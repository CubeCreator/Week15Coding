import './App.css';
import React, {Component} from 'react';
import CharactersAPI from './rest/CharactersAPI';
import CharactersList from './components/CharactersList';


class App extends Component {
  constructor(props) {
    super(props)

  this.state = {
    nameInput: "",
    names: []
  }

  // this.ENDPOINT = "https://jsonplaceholder.typicode.com"
  this.ENDPOINT = "https://6405117feed195a99f7baa23.mockapi.io/CharaList/CRUDApp";
  }
  
  render() {
    return (
      <div>
        <CharactersList/>
      </div>
    )
  }
}
  
  

export default App;
