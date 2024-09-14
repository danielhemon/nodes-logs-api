import dotenv from 'dotenv'

const dotenvres = dotenv.config();
export default {
    mongoDbUrl: process.env.MONGODB_URI || 'mongodb://mongo:deaECUxvidNbIOavEVuZApPulMGzJFGG@junction.proxy.rlwy.net:18916',
};

