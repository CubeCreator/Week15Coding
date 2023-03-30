import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/jquery/dist/jquery.min.js"
import React from "react"

class CharactersAPI extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newNameInput: ""
        }
    }

    componentDidMount = () => {};

    handleChange = (e) => {
        var id = e.target.getAttribute("id")
        if (id == "newName") {
            this.setState({ newNameInput: e.target.value })
        }
    }

    render() {
        return (
            <div>
               <span>{this.props.characterName}</span> 
               <br />
               <button onClick={() => this.props.deleteCharacters(this.props.id)}>
                Delete Character
               </button>
               <br />
               <button onClick={() => this.props.updateCharacters(this.props.id, this.state.newNameInput)}>
                Update
               </button>
               <input 
               onChange={this.handleChange}
               value={this.state.newNameInput}
               id="newName"></input>
            </div>
        )
    }
}
export default CharactersAPI;