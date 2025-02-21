import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function EachGame() {
    
    const [gameInfo, setGameInfo] = useState([])

    const {id} = useParams()

    useEffect(() => {
        async function fetchGame() {
            const response = await fetch (`http://localhost:8080/games/${id}?include_genres=true`)
            const data = await response.json()
            setGameInfo(data.rows[0])
        }

        fetchGame()
    }, [])
    
    return (
        <>
            <div className="eachGameContent">
                <h1>individual game</h1>
                <h2>{gameInfo.title}</h2>
                <p>{gameInfo.review}</p>
            </div>
        </>
    )
}