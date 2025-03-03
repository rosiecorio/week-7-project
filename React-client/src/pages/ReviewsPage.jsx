import { useEffect, useState } from "react"
import DeleteButton from "./DeleteButton"
import { Link } from "react-router-dom"


export default function ReviewsPage() {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        async function fetchReviews() {
            const response = await fetch('https://side-quest-server.onrender.com/games')
            const data = await response.json()
            setReviews(data)
        }

        fetchReviews()
    }, [])

    return (
        <>
            <section className="reviewContent">
                <h1>Reviews</h1>
                {reviews.map(item => (
                    <div key={item.id} className="reviewDiv">
                        <DeleteButton id={item.id}/>
                        <h3>{item.title}</h3>
                        <p>{item.name}</p>
                        <p>{item.review}</p>
                    </div>
                ))}
                <div className="backButton">
                    <Link to={"/"}><button>Go Back</button></Link>
                </div>
            </section>
        </>
    )
}

//group all reviews for each game together, then display them together.