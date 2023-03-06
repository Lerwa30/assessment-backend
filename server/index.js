const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const control = require('./controller.js');

app.get("/api/compliment", control.getCompliment);
app.get("/api/fortune", control.getFortune)

app.get("/api/quote", control.getQuote)
app.post("/api/quote", control.createQuote)
app.delete("/api/quote/:id", control.deleteQuote)
app.put("/api/quote/:id", control.updateQuote)


app.listen(4000, () => console.log("Server running on 4000"));
