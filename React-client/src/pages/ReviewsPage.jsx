import { useEffect, useState } from "react"

export default function ReviewsPage() {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        async function fetchReviews() {
            const response = await fetch('http://localhost:8080/reviews')
            const data = await response.json()
            setReviews(data)
        }

        fetchReviews()
    })

    return (
        <>
            <h1>Reviews</h1>
            {reviews.map(item => (
                <div key={item}>
                    <h4>{item.title}</h4>
                    <p>{item.review}</p>
                </div>
            ))}
        </>
    )
}

//group all reviews for each game together, then display them together.