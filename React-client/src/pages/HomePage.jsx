import { Link } from "react-router-dom"
import ReviewForm from "./ReviewForm"

export default function HomePage() {
    return (
        <>
        <div className="landingButtons">
            <section className="gamesContainer">
            <Link to="/games" className="gamesLink">Games</Link>
            </section>
            <section className="reviewsContainer">
            <Link to="/reviews" className="reviewsLink">Reviews</Link>
            </section>
        </div>
        <section className="homeForm">
            <ReviewForm />
        </section>
        </>
    )
}