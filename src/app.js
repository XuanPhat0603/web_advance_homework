import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import actorRoute from './routes/actor.route.js';
import filmRoute from './routes/film.route.js';
import { swaggerDocs } from './docs/swaggerOptions.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api/actors', actorRoute);

app.use('/api/films', filmRoute);

app.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerDocs, { explorer: true })
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
