import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import { User } from './models/User.js'

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

app.get(
    '/fetch_users',
    async (req, res) => {
        try {
            const users = await User.find({});
            res.status(200).json({status: "success", users: users});
        } catch (error) {
            res.status(200).json({ status: error.message });
        }
    }
);

app.post(
    '/register',
    async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email: email })
            if (user) {
                res.status(200).json({ status: 'user already exists' });
            } else {
                try {
                    const user = await User.create({ email, password });
                    res.status(200).json({ status: 'success', user: user });
                } catch (error) {
                    res.status(400).json({ status: error.message });
                }
            }
        } catch (error) {
            res.status(400).json({ status: error.message });
        }
    }
);

app.post(
    '/login',
    async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email: email })
            if (!user) {
                res.status(200).json({ status: 'No such user' });
            } else {
                console.log(user);
                if (user.password == password) {
                    res.status(200).json({ status: 'success', user: user });
                } else {
                    res.status(200).json({ status: 'wrong password', user: user });
                }
            }
        } catch (error) {
            res.status(400).json({ status: error.message });
        }

    }
);

mongoose.connect('mongodb://127.0.0.1:27017/myapp')
    .then(() => {
        app.listen(5000, () => {
            console.log('connected to db and listening on port ', 5000)
        });
    })
    .catch((error) => {
        console.log(error);
    })
