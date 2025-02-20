import './App.css'
// import ReviewForm from './components/ReviewForm'
import GamesPage from './pages/GamesPage'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import ReviewsPage from './pages/ReviewsPage'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <h1><Link to="/">SideQuest</Link></h1>
          <div className="landingButtons">
            <section className="gamesContainer">
              <Link to="/games" className="gamesLink">Games</Link>
            </section>
            <section className="reviewsContainer">
              <Link to="/reviews" className="reviewsLink">Reviews</Link>
            </section>
          </div>
        {/* <ReviewForm /> */}
        <Routes >
          <Route path={"/games"} element={<GamesPage />} />
          <Route path={"/reviews"} element={<ReviewsPage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}


