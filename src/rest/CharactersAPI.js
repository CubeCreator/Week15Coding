const Character_ENDPOINT = 'https://6405117feed195a99f7baa23.mockapi.io/CharaList/CRUDApp'

//Functions for the other components to use, taken from the API.
class CharactersAPI {
    get = async () => {
        try{
            const resp = await fetch(Character_ENDPOINT)
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log("There is a issue with CharacterFetch. Sorry.")
        }
    }

    post = async (newCharacter) => {
        console.log(newCharacter)
        try{
            const resp = await fetch(Character_ENDPOINT, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(newCharacter)
            })
            return await resp.json();
        } catch (e) {
            console.log("There is an issue with CreateCharacter")
        }
    }

    put = async (character) => {
        try{
            const resp = await fetch(`${Character_ENDPOINT}/${character._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(character)
            })
            return await resp.json();
        }   catch(e) {
            console.log("There is a issue with UpdateCharacter. Sorry.")
        }
    }

    delete = async (character) => {
        try{
            const resp = await fetch(`${Character_ENDPOINT}/${character}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            return await resp.json();
        }   catch(e) {
            console.log("There is an issue with DeleteCharacter.")
        }
    }
}

export const charactersAPI = new CharactersAPI();