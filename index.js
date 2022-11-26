import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRouter from './routes/posts.js';

const app = express();

app.use('/posts', postRouter)

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://Nagu:LgNQJn2cIcZwO5aC@cluster0.virjf.mongodb.net/test';
const PORT = process.env.PORT || 5000;



mongoose.connect(CONNECTION_URL).then(() => {
    app.listen(PORT, () => console.log(PORT, 'started'))
}).catch((err) => {
    console.log(err)
})
