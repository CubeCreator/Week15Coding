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

//Updating Values in the Array
    updateHouse = async (updatedCharacter) => {
        await charactersAPI.put(updatedCharacter)
        this.fetchCharacters();
    };

    handleChange = (e) => {
        var id = e.target.getAttribute("id")
        if (id == "newName") {
            this.setState({ newNameInput: e.target.value })
        }
    };

    render() {
        return (
            <div className="character-list">
               {this.state.characters.map((character) => (
                <Character
                    character={character}
                    key={character._id}
                    updateHouse={this.updateHouse}
                />
               ))}
            </div>
        )
    }
}
export default CharactersList;