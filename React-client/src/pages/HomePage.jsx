import { Link } from "react-router-dom"
// import ReviewForm from "./ReviewForm"

export default function HomePage() {
    return (
        <>
        <section className="landingButtons">
            <div className="gamesContainer homeContainer">
                <Link to="/games" className="gamesLink homeLink">Games</Link>
            </div>
            <div className="reviewsContainer homeContainer">
                <Link to="/reviews" className="reviewsLink homeLink">Reviews</Link>
            </div>
            <div className="addContainer homeContainer">
                <Link to="/newreview" className="addLink homeLink" >Add Yours</Link>
            </div>
        </section>
        {/* <section className="homeForm">
            <ReviewForm />
        </section> */}
        </>
    )
}