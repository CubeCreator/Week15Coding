import logo from './logo.svg';
import './App.css';
import React from 'react';
import CharactersAPI from './components/CharactersApi';

class App extends React.Component {
  constructor(props) {
    super(props)

  this.state = {
    nameInput: "",
    names: null
  }

  this.ENDPOINT = "https://jsonplaceholder.typicode.com/todos/6"
  }
  
  componentDidMount = () => {
    this.getCharacters();
  }

  getCharacters = () => {
    fetch(this.ENDPOINT + "/characters")
      .then((result) => result.json())
      .then((data) => {
        this.setState({ characters: data }, this.setStateCallback)
      });
  }

  submitCharacters = () => {
    fetch(this.ENDPOINT + "/characters", {
      method: "POST"
    })
  }

  deleteCharacters = () => {
    fetch(this.ENDPOINT + "/characters/" + id, {
      method: "DELETE"
    })
  }

  updateCharacters = () => {
    fetch(this.ENDPOINT + "/characters/" + id, {
      method: "PUT"
    })
  }

  handleChange = () => {

  }

  render() {


    return (
      <div>
        <h2>New Character</h2>
          <input type="text" value={this.state.nameInput} id="new-character-name" onChange={this.handleChange}/>
          <button id="create-new-character" onClick={() => this.submitCharacters(this.nameInput)}>Create Character</button>
      </div>
    )
  }
}
  
  

export default App;
