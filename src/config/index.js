
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
const envFile  = process.env.NODE_ENV || 'development';
dotenv.config({
  path: path.resolve(__dirname, `../../.env.${envFile}`) ,
  
});

// Validate essential environment variables
if (!process.env.PORT) {
  console.error('ERROR: PORT environment variable is not defined.');
  process.exit(1);
}
if (!process.env.NODE_ENV) {
    console.warn('WARNING: NODE_ENV environment variable is not defined. Defaulting to "development".');
}


module.exports = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_VERSION: process.env.API_VERSION || 'v1',
  MESSAGE: process.env.MESSAGE || '',
  // DATABASE_URL: process.env.DATABASE_URL, 
  // JWT_SECRET: process.env.JWT_SECRET,    
};

console.log(`Configuration loaded for ${module.exports.NODE_ENV} environment.`);