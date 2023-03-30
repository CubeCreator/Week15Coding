import './App.css';
import React from 'react';
import CharactersAPI from './components/CharactersApi';

class App extends React.Component {
  constructor(props) {
    super(props)

  this.state = {
    nameInput: "",
    names: []
  }

  this.ENDPOINT = "https://jsonplaceholder.typicode.com"
  }
  
  componentDidMount = () => {
    this.getCharacters();
  }

  getCharacters = () => {
    fetch(this.ENDPOINT + "/characters")
      .then((result) => result.json())
      .then((data) => {
        this.setState({ names: data }, this.setStateCallback)
      });
  }

  submitCharacters = (name) => {
    console.log(name)
    fetch(this.ENDPOINT + "/characters", {
      method: "POST",
      body: JSON.stringify({name})
    }).then((result) => {
      this.getCharacters();
      console.log(result)
    })
  }

  deleteCharacters = (id) => {
    fetch(this.ENDPOINT + "/characters/" + id, {
      method: "DELETE"
    })
  }

  updateCharacters = (id, name) => {
    fetch(this.ENDPOINT + "/characters/" + id, {
      method: "PUT",
      body: JSON.stringify({name})
    })
  }

  handleChange = (e) => {
    var id = e.target.getAttribute("id");
    if (id == "new-character-name") {
      this.setState({ nameInput: e.target.value })
    }
  }

  render() {
    console.log(this.state.names)


    var names = <div>BUILDING</div>
    if (this.state.names !== null) {
      var names = this.state.names.map((n, index) => {
        var newName = n.nameInput
        var id = n._id
        return (
          <CharactersAPI
            deleteName={this.deleteName}
            updateName={this.updateName}
            key={id}
            id={id}
            characterName={newName}
          />
        );
      });
    }
    return (
      <div>
        <h2>New Character</h2>
          <input type="text" value={this.state.nameInput} id="new-character-name" onChange={this.handleChange}/>
          <button id="create-new-character" onClick={() => this.submitCharacters(this.state.nameInput)}>Create Character</button>
          <br />
          {names}
      </div>
    )
  }
}
  
  

export default App;
