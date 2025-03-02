import ReviewForm from "./ReviewForm"
import { Link } from "react-router-dom"

export default function NewReviewPage() {
    return (
        <>
            <div className="addContent">
                <h1>Add Your Review</h1>
                <ReviewForm />
                <div className="backButton">
                <Link to={"/"}><button>Go Back</button></Link>
                </div>
            </div>
        </>
    )
}