import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import postRouter from './routes/posts.js';

const app = express();
const env = dotenv.config();

app.use(cors())

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))


app.use('/posts', postRouter)


const port = process.env.PORT || 5000;



mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(port, () => console.log(port, 'started'))
}).catch((err) => {
    console.log(err)
})
