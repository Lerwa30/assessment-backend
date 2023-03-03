const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const option1 = document.getElementById("option1")
const fix = document.getElementById("fix")



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


let quote = {
    author: 'Ian Mckellan',
    quote: '"All we have to decide is what to do with the time that is given us."'
    
}

let newQuote = {
    author: 'Gandalf',
    quote: '"All we have to decide is what to do with the time that is given us."'
}

const selectQuote = () => {
    axios.post("http://localhost:4000/api/quote/", quote)
        .then(res => {
            console.log(res.data)
            const data = res.data
            const h3 = document.createElement("h3")
            h3.innerText = data
            document.body.appendChild(h3)
        })
}

const updateQuote = () => {
    axios.put("http://localhost:4000/api/quote/", newQuote)
        .then(res => {
            console.log(res.data)
            const data = res.data
            const h3 = document.createElement("h3")
            h3.innerText = data
            document.body.appendChild(h3)
        })
}




complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
option1.addEventListener('click', selectQuote, {once:true})
fix.addEventListener('click', updateQuote)

