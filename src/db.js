import mongoose from "mongoose";
import config from './config.js'

(async () => {
    try {
        const db = await mongoose.connect(config.mongoDbUrl);
        console.log('se conecto a la db exitosamente a la db:', db.connection.name);
    } catch (error) {
        console.error(error);
    }
})();