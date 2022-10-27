import { Router } from 'express';
import { getActor, postActor } from '../controllers/actor.controller.js';

const router = Router();

/**
 * @swagger
 * /api/actors:
 *   get:
 *     summary: Get all actors
 *     tags: [Actors]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Actor'
 */
router.get('/', getActor);

/**
 * @swagger
 * /api/actors:
 *  post:
 *   summary: Create a new actor
 *   tags: [Actors]
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/Actor'
 *   responses:
 *     200:
 *       description: The actor was successfully created
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Actor'
 */
router.post('/', postActor);

export default router;
