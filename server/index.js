const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller');

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", (req, res) => {
    const fortunes = ["Believe it can be done.", "Bide your time, for success is near.", "Curiosity kills boredom. Nothing can kill curiosity", "Dedicate yourself with a calm mind to the task at hand.", "Savor your freedom, it is precious."];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];
    res.status(200).send(randomFortune);
})

app.post("/api/quote", (req, res) => {
    console.log(req.body)
    let author = req.body.author
    let quote = req.body.quote
    res.status(200).send(`${author} once said, ${quote}`)
})

app.put("/api/quote", (req, res) => {
    console.log(req.body)
    let author = req.body.author
    let quote = req.body.quote
    res.status(200).send(`Actually, ${author} once said, ${quote}`)
})


app.listen(4000, () => console.log("Server running on 4000"));
