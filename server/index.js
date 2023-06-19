import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRouters from "./routes/posts.js";


dotenv.config();
const app = express();

app.use('/posts', postRouters);

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.DATABASE_URL;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
        .catch((error) => console.log(error.message));
// mongoose.set('useFindAndModify', false);