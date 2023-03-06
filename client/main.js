const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const quoteForm = document.querySelector('form')
const quoteList = document.querySelector('#quotelist')
const updateBtn = document.querySelector('#updateButton')


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

const quoteCallback = ({ data }) => showQuotes(data)

const getQuote = () => axios.get("http://localhost:4000/api/quote/").then(quoteCallback)
const createQuote = (body) => axios.post("http://localhost:4000/api/quote/", body).then(quoteCallback)
const deleteQuote = id => axios.delete(`http://localhost:4000/api/quote/${id}`).then(quoteCallback)
const updateQuote = id => axios.put(`http://localhost:4000/api/quote/${id}`).then(quoteCallback)

const sumbitQuote = (e) => {
    e.preventDefault()

    let author = document.querySelector('#author')
    let quote = document.querySelector('#quote')
    let newList = {
        author: author.value,
        quote: quote.value
    }
    createQuote(newList)

}
const writeQuote = (param) => {
    const newQuote = document.createElement('div')
    newQuote.innerHTML = `<h2>${param.author} once said, "${param.quote}"</h2>
    <button onclick="deleteQuote(${param.id})">x</button>
    `
    quoteList.appendChild(newQuote)
}

const showQuotes = (array) => {
    quoteList.innerHTML = ""
    for(let i = 0; i < array.length; i++) {
        writeQuote(array[i])
    }
}
       
quoteForm.addEventListener('submit', sumbitQuote)
getQuote()


complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
updateBtn.addEventListener('click', updateQuote)



