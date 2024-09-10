import serverlessHttp from 'serverless-http'

import e from 'express'
const app = e()

import cors from 'cors'
import bodyParser from 'body-parser';
import cookiesParser from 'cookie-parser'

import authRouter from '../routes/auth/auth.mjs'
import contentRouter from '../routes/content/content.mjs'

const allowedOrigins = ['http://localhost:5173', 'http://localhost:4545', 'https://majosbath.netlify.app']

app.use((req, res, next) => {
    res.removeHeader('Access-Control-Allow-Origin');
    next();
});

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, origin);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization,x-filename,x-color,x-href'
}));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookiesParser())

app.use("/auth", authRouter)
app.use("/api", contentRouter)

app.use((err, req, res, next) => {
    if (err) {
        console.error('Error:', err);
        res.status(500).send({ message: "Internal server error", error: err.message });
    } else {
        next();
    }
});

if (import.meta.url === `file://${process.cwd()}/functions/app.mjs`) {
    const PORT = process.env.PORT || 4545;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

export const handler = serverlessHttp(app);