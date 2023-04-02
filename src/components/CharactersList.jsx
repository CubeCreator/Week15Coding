import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min"
import React from "react"
import { Character } from './Character.js'
import { charactersAPI } from '../rest/CharactersAPI.js'

export class CharactersList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newNameInput: "",
            characters: []
        }
    }
//Check the Component and Display the Array.
    componentDidMount = () => {
        this.fetchCharacters();
    };

    fetchCharacters = async () => {
        const characters = await charactersAPI.get();
        this.setState({ characters })
    };

//Creating new Characters in the Array
    createCharacter = async (newCharacter) => {
        await charactersAPI.post(newCharacter)
        this.fetchCharacters();
    };

    //Delete Character Code
    deleteCharacter = async (character) => {
        await charactersAPI.delete()
        this.fetchCharacters(character);
        console.log(character)
    }

//Updating Values in the Array
    updateCharacter = async (updatedCharacter) => {
        await charactersAPI.put(updatedCharacter)
        this.fetchCharacters();
        console.log(updatedCharacter)
    };

    handleChange = (e) => {
        var id = e.target.getAttribute("id")
        if (id == "newName") {
            this.setState({ newNameInput: e.target.value })
        }
        console.log(this.state.newNameInput)
    };

    //Render the App
    render() {
        return (
            //Header of the Application
            <div className="character-list">
                <h1>Character CRUD App</h1>
                <input placeholder="Character Name" defaultValue={this.state.newNameInput} onChange={this.handleChange} id="newName"></input>
                <button onClick={() => this.createCharacter(this.state.newNameInput)}>Create Character</button>
                <br />
            {/* List of the API Character elements  */}
               {this.state.characters.map((character) => (
                <Character
                    character={character}
                    key={character._id}
                    updateCharacter={this.updateCharacter}
                    deleteCharacter={this.deleteCharacter}
                    handleChange={this.handleChange}
                />
               ))}
            </div>
        )
    }
}
export default CharactersList;