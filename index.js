import express from "express";
import 'dotenv/config'
import { postRouter } from "../server/routes/posts";

const PORT = 5000
const app = express()

app.get('/v1/', (req, res) => {
    res.send('Welcome to redis API v1')
})

app.route('/v1/posts', postRouter)

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})