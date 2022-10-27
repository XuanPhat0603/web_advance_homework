import { Router } from 'express';
import { getFilm, postFilm } from '../controllers/film.controller.js';
import { postFilmValidation } from '../validation/film.validate.js';
import validate from '../validation/index.js';

const router = Router();

router.get('/', getFilm);

router.post('/', validate(postFilmValidation), postFilm);

export default router;
