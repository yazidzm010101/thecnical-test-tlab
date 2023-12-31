import axios from "axios"

export function getGames(category?: string) {
    let url = 'https://free-to-play-games-database.p.rapidapi.com/api/games'
    const fetchOptions = {
        method: "GET",
        url: url,
        params: {},
        headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": "6ca948ceb7msh426f11ced47c1b7p13741cjsnf6f65942f5df",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com"
        },
    }
    if (!!category) {
        fetchOptions.params = {category: category}
    }
    return axios(fetchOptions)
}