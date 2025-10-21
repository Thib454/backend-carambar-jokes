const Joke = require('../models/joke');

// Ajouter une nouvelle blague
exports.addJoke = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ error: 'Le champ content est requis.' });
    }

    const joke = await Joke.create({ content });
    res.status(201).json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer toutes les blagues
exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer une blague par ID
exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id);
    if (joke) {
      res.json(joke);
    } else {
      res.status(404).json({ message: 'Blague non trouvée.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer une blague aléatoire
exports.getRandomJoke = async (req, res) => {
  try {
    const count = await Joke.count();
    const randomIndex = Math.floor(Math.random() * count);
    const joke = await Joke.findOne({ offset: randomIndex });
    if (joke) {
      res.json(joke);
    } else {
      res.status(404).json({ message: 'Aucune blague disponible.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
