import express from 'express';
import { Pool } from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const URL = '/api';
const { Pool } = pg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

// METHODS -------


//GET ALL
app.get(`${URL}`, async (req, res, next) => {
    try {
        const result = await pool.query(
            'SELECT * FROM activities_table'
        );
        res.status(200).send(result.rows);
    }
    catch (error) {
        next(error)
    }
})

//GET ONE
app.get(`${URL}/:id`, async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        console.log(id);
        if (isNaN(id)) {
            const error = new Error('Not found');
            error.status = 404;
            throw error;
        }
        console.log(`${id}`);
        const result = await pool.query(
            `SELECT * FROM activities_table WHERE id = ${id}`
        );
        if (result.rows.length === 0) {
            const error = new Error('Not found');
            error.status = 404;
            throw error;
        }
        res.status(200).send(result.rows);
    }
    catch (error) {
        next(error);
    }
})

// LISTENER ------

app.listen(PORT, (req, res) => {
    console.log(`Listening on PORT: ${PORT}`);
})