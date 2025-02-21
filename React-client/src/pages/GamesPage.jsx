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
            <div key={item.title} className="displayedGames">
                <Link to={`/games/${item.id}`} className="displayedGameLink">{item.title}</Link>
            </div>
        ))

    console.log(gamesArray)

//END OF CREATING SORT BUTTON

    return (
        <>
            <div className="gameContent">
                <SortByMenu gamesArray={gamesArray}/>
                <h1>Games</h1>
                {gamesArray}
            </div>
        </>
    )
}

//fetch data to display all games on page, map through them to create elements for them.