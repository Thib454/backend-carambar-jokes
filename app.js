const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./config/database');
const jokeRoutes = require('./routes/jokeRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');

app.use(cors());

// Middleware pour parser le JSON
app.use(express.json());

// Routes
app.use('/api/v1/blagues', jokeRoutes);

// Documentation Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Port d'écoute
const PORT = process.env.PORT || 3000;

// Connexion à la BDD et lancement du serveur
sequelize.sync({ force: false }).then(() => {
    app.get('/', (req, res) => {
  res.send('🎉 Bienvenue sur l’API des blagues Carambar !');
});
  app.listen(PORT, () => {
    console.log(`✅ Serveur démarré : http://localhost:${PORT}`);
    console.log(`📚 Swagger dispo : http://localhost:${PORT}/api-docs`);
  });
}).catch((err) => {
  console.error('Erreur de connexion à la BDD :', err);
});
