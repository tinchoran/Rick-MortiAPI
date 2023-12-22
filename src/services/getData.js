const baseUrl = "https://rickandmortyapi.com/api";

const getCharacter = async (id) => {
    
    try {
        
        const result = await fetch(`${baseUrl}/character/${id}`);

        const data = await result.json()

        return data;

    } catch (error) {
        
        console.log(error)

    }

}

const getCharacters = async (page) => {

    try {
        
        const result = await fetch(`${baseUrl}/character/?page=${page}`)

        const data = await result.json();

        return data;

    } catch (error) {
        
        console.log(error);

    }

}

export { getCharacter, getCharacters }