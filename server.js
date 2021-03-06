// this will add .env variable to process.env
require('dotenv').config();

const PORT = process.env.PORT || 15000;

const server = require('./src/app')({
  logger: {
    level: 'info',
    prettyPrint: true,
  },
});

const start = async () => {
  try {
    await server.listen(PORT, '0.0.0.0');
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
