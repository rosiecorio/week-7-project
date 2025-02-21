import { Link } from "react-router-dom"
// import ReviewForm from "./ReviewForm"

export default function HomePage() {
    return (
        <>
        <section className="landingButtons">
            <div className="gamesContainer">
                <Link to="/games" className="gamesLink">Games</Link>
            </div>
            <div className="reviewsContainer">
                <Link to="/reviews" className="reviewsLink">Reviews</Link>
            </div>
            <div className="addContainer">
                <Link to="/newreview" className="addLink" >Add Your Own</Link>
            </div>
        </section>
        {/* <section className="homeForm">
            <ReviewForm />
        </section> */}
        </>
    )
}