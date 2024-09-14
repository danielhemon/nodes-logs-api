import dotenv from 'dotenv'

const dotenvres = dotenv.config();
export default {
    mongoDbUrl: process.env.MONGODB_URI || 'mongodb://Localhost/Registration',
};
