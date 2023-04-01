import React, { useState } from 'react';

export const NewInfoForm = (props) => {
    const [name, setName] = useState('');
    const [content, setContent] = useState(undefined);

    const onSubmit = (e) => {
        e.preventDefault()
        if (name && content) {
            props.addNewInfo({name, content})
            setName('');
            setContent('');
        } else {
            console.log("This is an invalid input.")
        }
    }

    return (
        <div>
            <h4>Add Character Info</h4>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder='Info Heading'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input 
                    type="text"
                    placeholder='Info Content'
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                />
                <button type='submit'>Add Info</button>
            </form>
        </div>
    )
}