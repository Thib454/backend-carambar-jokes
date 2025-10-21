const sequelize = require('../config/database');
const Joke = require('../models/joke');

const jokes = [
  "Que dit un oignon quand il se cogne ? Aïe !",
  "Quel est l'animal le plus heureux ? Le hibou, parce que sa femme est chouette !",
  "Pourquoi le football c'est rigolo ? Parce que Thierry en rit !",
  "Quel est le sport le plus fruité ? La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.",
  "Que se fait un Schtroumpf quand il tombe ? Un bleu !",
  "Quel est le comble pour un marin ? Avoir le nez qui coule",
  "Qu'est ce que les enfants usent le plus à l'école ? Le professeur !",
  "Quel est le sport le plus silencieux ? Le para-chuuut !",
  "Quel est le comble pour un joueur de bowling ? C’est de perdre la boule"
];

async function addJokes() {
  try {
    await sequelize.sync();

    for (const content of jokes) {
      await Joke.create({ content });
      console.log(`Blague ajoutée : ${content}`);
    }

    console.log('Toutes les blagues ont été ajoutées avec succès !');
    process.exit(0);
  } catch (error) {
    console.error('Erreur lors de l\'ajout des blagues :', error);
    process.exit(1);
  }
}

addJokes();
