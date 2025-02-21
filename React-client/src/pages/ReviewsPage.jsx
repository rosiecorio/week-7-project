import { useEffect, useState } from "react"
import ReviewForm from "./ReviewForm"
import DeleteButton from "./DeleteButton"


export default function ReviewsPage() {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        async function fetchReviews() {
            const response = await fetch('http://localhost:8080/games')
            const data = await response.json()
            setReviews(data)
        }

        fetchReviews()
    }, [])

    return (
        <>
            <h1>Reviews</h1>
            <section className="reviewContent">
                {reviews.map(item => (
                    <div key={item.id} className="reviewDiv">
                        <DeleteButton id={item.id}/>
                        <h3>{item.title}</h3>
                        <p>{item.name}</p>
                        <p>{item.review}</p>
                    </div>
                ))}
            </section>
            <ReviewForm />
        </>
    )
}

//group all reviews for each game together, then display them together.