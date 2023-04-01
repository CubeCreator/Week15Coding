import React from "react";
import { NewInfoForm } from "./NewInfoForm";

export const Character = (props) => {
    const { character, updateCharacter } = props;

    const deleteInfo = (infoId) => {
        const updatedCharacter = {
            ...character,
            info: character.info.filter((x) => x._id !== infoId)
        };
        updateCharacter(updatedCharacter)
    }


    const addNewInfo = (info) => updateCharacter({ ...character, info: [...character.info, info]});

    const info = () => (
        <ul>
            {character.info.map((info, index) => (
                <li key={index}>
                    <label> {`${info.content}`}</label>
                    <button onClick={(e) => deleteInfo(info._id)}>Delete</button>
                </li>
            ))}
        </ul>
    )

    return (
        <div>
            <h1>{character.name}</h1>
            {
                info({ info, characterId: character._id, deleteInfo })
            }
            <NewInfoForm addNewInfo={addNewInfo} />
        </div>
    )
}