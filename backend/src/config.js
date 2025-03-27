import dotenv from "dotenv";


dotenv.config();

export const config = {
    db:{
        URI: process.env.DB_URI || "mongodb://localhost:27017/ZonaDigitalDB20170508" ,
    },
    server:{
        port: process.env.PORT || 4000,
    },
    JWT:{
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES,
    }
}