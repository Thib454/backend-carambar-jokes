const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Carambar Blagues API',
      version: '1.0.0',
      description: 'Une API pour gérer les blagues Carambar',
    },
  },
  apis: ['./routes/*.js'],
};

module.exports = swaggerJsdoc(options);
