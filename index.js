import express from 'express';
import 'dotenv/config';
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to my Express App</h1>`);
});

app.listen(PORT, () => {
   console.log(`app running on port ${PORT}`)
});