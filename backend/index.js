import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.get(
    '/',
    (req, res) => {
        res.status(200).json("Hello Chetan");

    }
);

app.listen(
    5000,
    () => {
        console.log("Running on port 5000")
    }
);
