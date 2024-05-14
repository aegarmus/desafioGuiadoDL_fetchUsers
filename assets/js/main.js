const URL_BASE = "https://randomuser.me/api";

const getRandomUsers = async() => {
    try {
        const response = await fetch(`${URL_BASE}/?results=10`);
        const data = await response.json()
    
        return data.results
        
    } catch (error) {
        throw new Error('No obtuvimos una respuesta de la API')
    }
}

getRandomUsers().then(users => console.log(users))