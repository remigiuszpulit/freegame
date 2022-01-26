import axios from "axios"
import { useEffect, useState } from "react"
import { API_HOST, API_KEY } from "./constants"

const localCache = {}

const useFetch = ({platform, genre, tag, sortBy}) => {
    const [games, setGames] = useState([])
    const [error, setError] = useState("")
    
    useEffect(() => {
        if(!localCache[`${platform}${genre}${tag}${sortBy}`]) {
            getData(platform, genre, tag, sortBy)
        }
        else {
            setGames(localCache[`${platform}${genre}${tag}${sortBy}`])
        }

    }, [platform, genre, tag, sortBy])

    const getData = (platform, genre, tag, sortBy) => {
        axios.get("/games", {
        baseURL: `https://${API_HOST}/api`,
        headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": API_HOST
    },
    params: {
        platform, category: genre, tag, "sort-by": sortBy
    }
        }).then(response => {
            if (response.data.status === 0) {
                setGames([])
                
            }
            else {
                
                localCache[`${platform}${genre}${tag}${sortBy}`] = response.data
            setGames(localCache[`${platform}${genre}${tag}${sortBy}`])
            }
            

            })
        .catch(error => {setError(error.data)
        setGames([])
        })

    } 

    return {games,error}
}


export default useFetch