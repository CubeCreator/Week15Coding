import React from "react";
import { NewInfoForm } from "./NewInfoForm";
import { charactersAPI } from "../rest/CharactersAPI";

export const Character = (props) => {
    const { character, updateCharacter, deleteCharacter } = props;

    //Delete Information from Array Code
    const deleteInfo = (infoId) => {
        const updatedCharacter = {
            ...character,
            infos: character.infos.filter((x) => x._id !== infoId)
        };
        updateCharacter(updatedCharacter)
    }


    const addNewInfo = (info) => updateCharacter({ ...character, infos: [...character.infos, info]});

    //Formatting of the Information Elements to be added in
    const infos = () => (
        <ul>
            {character.infos.map((info, index) => (
                <li key={index}>
                    <h5> {`${info.name}`}</h5>
                    <br />
                    <label> {`${info.content}`}</label>
                    <button onClick={(e) => deleteInfo(info._id)}>Delete Info</button>
                </li>
            ))}
        </ul>
    )

    return (
        //Render the Header of the Character Element
        <div>
            <h1>{character.name}</h1>
            {/* Delete Character Function */}
            <button onClick={(e) => deleteCharacter(character._id)}>Delete Character</button>
            <br />
            {/* Update Character Function */}
            <input placeholder="Enter new name here"></input>
            <button onClick={(e) => updateCharacter(character._id)}>Update Character</button>
            {/* Display the Information elements from their Array, Unique to each Character */}
            {
                infos({ infos, characterId: character._id, deleteInfo })
            }
            {/* The Form for adding new Information to the Character */}
            <NewInfoForm addNewInfo={addNewInfo} key={character._id}/>
        </div>
    )
}