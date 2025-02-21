import { useEffect, useState} from "react"
import { Link } from "react-router-dom"
import SortByMenu from "./SortByMenu"

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

//CREATING SORT BY BUTTON

    let gamesArray = 
        games.map(item => (
            <div key={item.title}>
                <Link to={`/games/${item.id}`}>{item.title}</Link>
            </div>
        ))

    console.log(gamesArray)

//END OF CREATING SORT BUTTON

    return (
        <>
            <h1>Games</h1>
            <SortByMenu gamesArray={gamesArray}/>
            {gamesArray}
        </>
    )
}

//fetch data to display all games on page, map through them to create elements for them.