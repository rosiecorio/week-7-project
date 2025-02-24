import express, { request } from "express"
import cors from "cors"
import dotenv from "dotenv"
import pg from "pg"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

const db = new pg.Pool({
    connectionString: process.env.DB_CONN
})


app.get('/', (request, response) => {
    try {
        response.json('Welcome!')
    } catch (error) {
        response.status(500).send(error.message)
    }
})

//show all games with reviews and titles.

app.get('/games', async (request, response) => {
    try {
        const games = (await db.query(`SELECT * FROM games`)).rows
        response.status(200).json(games)
    } catch (error) {
        response.status(500).send(error.message)
    }
})

//request a specific game, with title and review

app.get('/games/:id', async (request, response) => {
    const {includes_genres} = request.query
    const {id} = request.params
    console.log(id)
    
    try{
        if(includes_genres === 'true') {
            const gamesInfoWithGenres = (await db.query(`SELECT games.*, array_agg(genres.name) AS genres
                FROM games
                LEFT JOIN
                games_genres ON games.id = games_genres.game_id
                LEFT JOIN
                genres ON games_genres.genre_id = genres.id
                WHERE games.id = $1
                GROUP BY games.id`, [id])).rows[0]
                res.status(200).json(gamesInfoWithGenres)
        } else {
            const gamesInfo = (await db.query(`SELECT * FROM games WHERE id = $1`, [request.params.id]))
            response.status(200).json(gamesInfo)
        }
    } catch (error) {
        response.status(500).send(error.message)
    }
})

//shows all individual reviews with game titles

app.get('/reviews', async (request, response) => {
    try {
        const reviewsInfo = (await db.query(`SELECT title, review FROM games`)).rows
        response.status(200).json(reviewsInfo)
    } catch (error) {
        response.status(500).send(error.message)
    }
})

//shows just game titles

app.get('/titles', async (request, response) => {
    try {
        const titlesInfo = (await db.query(`SELECT title FROM games`)).rows
        response.status(200).json(titlesInfo)
    } catch (error) {
        response.status(500).send(error.message)
    }
})

//shows all genres

app.get('/genres', async (request, response) => {
    try {
        const genreInfo = (await db.query(`SELECT name FROM  genres`)).rows
        response.status(200).json(genreInfo)
    } catch (error) {
        response.status(500).send(error.message)
    }
})

//add a new game with title and review

app.post('/games', async (request, response) => {
    try {
        const gameTitle = request.body.title
        const gameReview = request.body.review
        const userName = request.body.name
        const data = await db.query(`INSERT INTO games (title, review, name) VALUES ($1, $2, $3)`, [gameTitle, gameReview, userName])
        console.log(data)
        response.json(data)
    } catch (error) {
        console.log(error.message)
        response.status(500).send(error.message)
    }
})

//delete a game

app.delete('/games/:id', async (request, response) => {
    try {
        const deletedGame = await db.query(`DELETE FROM games WHERE id=$1`, [request.params.id])
        response.status(200).json({game: deletedGame})
    } catch (error) {
        response.status(500).send(error.message)
    }
})

app.listen(8080), () => {
    console.log(`Server running on 8080`)
}

/* using cats as an example for now */
