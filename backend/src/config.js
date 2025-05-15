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
        secret: process.env.JWT_SECRET || "asdf",
        expiresIn: process.env.JWT_EXPIRES || "30d",
    },
    ADMIN:{
        emailAdmin: process.env.ADMIN_EMAIL || "Eduardo@gmail.com",
        password: process.env.ADMIN_PASSWORD || "20230223"

        
    },
    email:{
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS
    },
    cloudinary: {
        cloudinary_name: process.env.CLOUDINARY_NAME,
        cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
        cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET
    }
}