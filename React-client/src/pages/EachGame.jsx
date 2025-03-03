import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function EachGame() {
    
    const [gameInfo, setGameInfo] = useState([])

    const {id} = useParams()

    useEffect(() => {
        async function fetchGame() {
            const response = await fetch (`https://side-quest-server.onrender.com/games/${id}?include_genres=true`)
            const data = await response.json()
            setGameInfo(data.rows[0])
        }

        fetchGame()
    }, [])
    
    return (
        <>
            <div className="eachGameContent">
                <h2>{gameInfo.title}</h2>
                <p>{gameInfo.review}</p>
            </div>
            <div className="backButton">
                <Link to={"/games"}><button>Go Back</button></Link>
            </div>
        </>
    )
}