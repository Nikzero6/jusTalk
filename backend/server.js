import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 8081;

app.get("/", (req, res) => {
    res.send("hello");
})

app.listen(PORT, console.log(`server running on port ${PORT}`));
