const Character_ENDPOINT = 'https://6405117feed195a99f7baa23.mockapi.io/CharaList/CRUDApp'

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
}

export const charactersAPI = new CharactersAPI();