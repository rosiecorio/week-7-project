import { useEffect, useState} from "react"
import { Link } from "react-router-dom"

export default function GamesPage() {

    
    const [games, setGames] = useState([])

    useEffect(() => {
        async function fetchGames() {
            const response = await fetch('http://localhost:8080/games')
            const data = await response.json()
            setGames(data)
        }

        fetchGames()
    }, [])

    return (
        <>
            <h1>Games</h1>
            <button className="sortByButton">Sort By</button>
            {games.map(item => (
                <div key={item.title}>
                    <Link to={`/games/${item.id}`}>{item.title}</Link>
                </div>
            ))}
        </>
    )
}

//fetch data to display all games on page, map through them to create elements for them.