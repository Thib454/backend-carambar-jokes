const express = require('express');
const router = express.Router();
const controller = require('../controllers/jokeController');

/**
 * @swagger
 * tags:
 *   name: Blagues
 *   description: Gestion des blagues Carambar
 */

/**
 * @swagger
 * /api/v1/blagues:
 *   post:
 *     summary: Ajouter une nouvelle blague
 *     tags: [Blagues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *             properties:
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blague créée
 */
router.post('/', controller.addJoke);

/**
 * @swagger
 * /api/v1/blagues:
 *   get:
 *     summary: Récupérer toutes les blagues
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Liste des blagues
 */
router.get('/', controller.getAllJokes);

/**
 * @swagger
 * /api/v1/blagues/random:
 *   get:
 *     summary: Récupérer une blague aléatoire
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 */
router.get('/random', controller.getRandomJoke);

/**
 * @swagger
 * /api/v1/blagues/{id}:
 *   get:
 *     summary: Récupérer une blague par ID
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Blague trouvée
 *       404:
 *         description: Blague non trouvée
 */
router.get('/:id', controller.getJokeById);

module.exports = router;
