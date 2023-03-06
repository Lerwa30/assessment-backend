let quoteData = require('./db.json')
let id = 2;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }, 
    getFortune: (req, res) => {
        const fortunes = ["Believe it can be done.", "Bide your time, for success is near.", "Curiosity kills boredom. Nothing can kill curiosity", "Dedicate yourself with a calm mind to the task at hand.", "Savor your freedom, it is precious."];
    
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
    },
    getQuote: (req, res) => {
        res.status(200).send(quoteData)
    },
    createQuote: (req, res) => {
        let newQuote = req.body
        newQuote.id = id
        quoteData.push(newQuote)
        id++;
        res.status(200).send(quoteData)
    },
    deleteQuote: (req, res) => {
        for(let i = 0; i < quoteData.length; i++) {
            if(quoteData[i].id === +req.params.id) {
                quoteData.splice(i, 1);
                res.status(200).send(quoteData)
            }
        }
    },
    updateQuote: (req, res) => {
        for(let i = 0; i < quoteData.length; i++) {
            if(quoteData[i].id === 1) {
                quoteData[i].author = "Gandalf"
                res.status(200).send(quoteData);
            }
        }
    }

}