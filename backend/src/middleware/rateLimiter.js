import rateLimit from "express-rate-limit"


//2-Lo configuramos
const limiter = rateLimit({

    windowMs: 15 * 60 * 1000, //15 minutos
    max: 5, //maximo de solicitudes HTTPs
    message: {
        status: 429,
        error: "Too many request"
    }
})

export default limiter;