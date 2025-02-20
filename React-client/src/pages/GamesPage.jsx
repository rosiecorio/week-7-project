import { useEffect, useState } from "react"

export default function GamesPage() {

    const [games, setGames] = useState([])

    useEffect(() => {
        async function fetchGames() {
            const response = await fetch('http://localhost:8080/titles')
            const data = await response.json()
            setGames(data)
        }

        fetchGames()
    })

    return (
        <>
            <h1>Reviews</h1>
            {games.map(item => (
                <div key={item.title}>
                    <h2>{item.title}</h2>
                </div>
            ))}
        </>
    )
}

//fetch data to display all games on page, map through them to create elements for them.