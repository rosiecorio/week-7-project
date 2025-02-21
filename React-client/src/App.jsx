import './App.css'
// import ReviewForm from './components/ReviewForm'
import GamesPage from './pages/GamesPage'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import ReviewsPage from './pages/ReviewsPage'
import HomePage from './pages/HomePage'
import EachGame from './pages/EachGame'
import NewReviewPage from './pages/NewReviewPage'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <h1><Link to="/">SideQuest</Link></h1>
        <Routes >
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/games"} element={<GamesPage />} />
          <Route path={"/games/:id"} element={<EachGame />} />
          <Route path={"/reviews"} element={<ReviewsPage />} />
          <Route path={"/newreview"} element={<NewReviewPage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

/* 
GOALS

-Style landing page
-style games page
-style reviews page

-create 'sort by' button on games page for genre and alphabetical (group game.title)
-create 'sort by' button on reviews page for name, game title and genre

-Create individual games page for each game added. -- DONE

-Set review form as full page modal on home page?
-Or seperate button on homepage for 'add your own'?

-use 3rd part api for games images?
*/


