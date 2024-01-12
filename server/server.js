import express from 'express';
import rateLimit from 'express-rate-limit';
import pg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const limiter = rateLimit({
    windowMs: 10 * 1000,
    limit: 25
})

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
app.use(limiter)

// METHODS -------


//GET ALL
app.get(`${URL}`, async (req, res, next) => {
    try {
        const result = await pool.query(
            'SELECT * FROM club'
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
            `SELECT * FROM club WHERE id = ${id}`
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

//CREATE
app.post(`${URL}`, async (req, res, next) => {
    try {
        const { image_urls, title, price, sale_price, left_hand, loft, custom_options } = req.body;
        //TODO: create error handling as applicable
        /* if (!XXXXXX) {
            const error = new Error('Not found');
            error.status = 404;
            throw error;
        } */
        const result = await pool.query(
            `INSERT INTO club (image_urls, title, price, sale_price, left_hand, loft, custom_options) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [image_urls, title, price, sale_price, left_hand, loft, custom_options]
        )
        res.status(201).send(result.rows);
    }
    catch (error) {
        next(error);
    }
})

//UPDATE
app.patch(`${URL}/:id`, async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            const error = new Error('Not found');
            error.status = 404;
            throw(error);
        }
        const { image_urls, title, price, sale_price, left_hand, loft, custom_options } = req.body;
        const result = await pool.query(
            `UPDATE club SET image_urls = $1, title = $2, price = $3, sale_price = $4, left_hand = $5, loft = $6, custom_options =$7 WHERE id = $8 RETURNING *`, 
            [id]
        );
        res.status(200).send(result.rows);
    }
    catch (error) {
        next(error);
    }
})

//DELETE
app.delete(`${URL}/:id`, async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            const error = new Error('Not found');
            error.status = 404;
            throw error;
        }
        const result = await pool.query(
            `DELETE FROM club WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0) {
            const error = new Error('Not found');
            error.status = 404;
            throw error;
        }
        res.status(200).send(result.rows);
    }
    catch (error) {
        next(error)
    }
})

//ERROR handling
app.use((error, req, res, next) => {
    res.status(error.status).send({error: error.message});
})

// LISTENER ------

app.listen(PORT, (req, res) => {
    console.log(`Listening on PORT: ${PORT}`);
})