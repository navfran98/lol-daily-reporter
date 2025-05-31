import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Now you can use them
const riotApiKey = process.env.RIOT_API_KEY;
const nodeEnv = process.env.NODE_ENV;

if (!riotApiKey) {
  throw new Error('RIOT_API_KEY is required');
}