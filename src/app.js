import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express';
import { swaggerDocs } from './docs/swaggerOptions.js';
import actorRoute from './routes/actor.route.js';
import filmRoute from './routes/film.route.js';
import logger from './services//logger/logger.service.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

// save the request url in the logger
app.use((req, res, next) => {
	logger.info(`Request URL: ${req.url}`);
	next();
});

app.use('/api/actors', actorRoute);

app.use('/api/films', filmRoute);

app.use(
	'/api-docs',
	swaggerUI.serve,
	swaggerUI.setup(swaggerDocs, { explorer: true })
);

app.listen(port, () => {
	logger.log({
		level: 'error',
		message: 'This is super secret - hide it.',
	});
	logger.info(`Server is running on port ${port}`);
	console.log(`Server is running on port ${port}`);
});
