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
        if (id =="newName") {
            this.setState({ newNameInput: e.target.value })
        }
    }

    render() {
        
    }
}
export default CharactersAPI;